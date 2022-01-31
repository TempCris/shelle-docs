/* eslint-disable max-len */
// ---Dependencys
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// ---Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateLoading } from '@Redux/appInfo/actions';
import { updateSearchParams, updateReduxProducts } from '@Redux/productList/actions';
import { ReduxState } from '@Redux/globalReducers';
// ---Components
import TabMenu from 'Cont/ProductList/components/TabMenu';
import MapProudcts from 'Cont/ProductList/components/MapProudcts';
// --Request
import { searchProducts } from 'Requests/peticiones';
import { asyncHandler, testError } from 'Requests/requestHandlers';
// ---Types
import { SearchParams, SearchParamsURL, ProductPayload } from '@Redux/productList/customTypes';
// ---Others
import { stringToObject, removeEmptyAndNull, objectToQueryString } from 'Others/otherMethods';
import { validateSearchParams } from 'Others/validations';

// ------------------------------------------ COMPONENT-----------------------------------------
function ProductList() : React.ReactElement {
  const history = useHistory();
  // Redux States
  const { currentParams } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  const { searchParams: reduxSearchParams, products, productCount } = useSelector((reducers: ReduxState) => reducers.productListReducer);
  // Redux Actions
  const dispatchR = useDispatch();
  const isLoading = (flag: boolean) => dispatchR(updateLoading(flag));
  const searchParamsAction = (searchParams: SearchParams) => dispatchR(updateSearchParams(searchParams));
  const updateProducts = (data: ProductPayload) => dispatchR(updateReduxProducts(data));
  // useEffect
  useEffect(() => { updateSearch(); }, [currentParams]);
  useEffect(() => { getData(); }, [reduxSearchParams]);

  // -----------------------------MAIN METHODS--------------------------------
  function getData() {
    isLoading(true);
    const fixedData = fitDataToRequest();
    asyncHandler(searchProducts, onSuccess, onError, fixedData);
  }
  function hystoryPush(path: string) {
    history.push(path);
  }
  function updateSearch() {
    const searchParams = areValidParams();
    if (searchParams) {
      searchParamsAction(searchParams);
    }
  }
  function onPageChange(page: number, pageSize?: number) {
    const newSearchParams = {
      ...reduxSearchParams,
      pageNumber: page,
      pageSize
    };
    const newParams = objectToQueryString(newSearchParams);
    history.push(`/productos${newParams}`);
  }
  // -----------------------------AUX METHODS--------------------------------
  function areValidParams() {
    let searchParams = stringToObject(currentParams);
    const { error } = validateSearchParams(searchParams);
    if (error) {
      return null;
    }
    const { pageNumber, pageSize } = searchParams as unknown as SearchParamsURL;
    searchParams = {
      ...searchParams,
      pageNumber: pageNumber ? parseInt(pageNumber, 10) : 1,
      pageSize: pageSize ? parseInt(pageSize, 10) : 30
    };
    return searchParams as unknown as SearchParams;
  }
  function onSuccess(data: ProductPayload) {
    updateProducts(data);
    isLoading(false);
  }

  function onError(err: unknown) {
    testError(err);
    isLoading(false);
  }
  function fitDataToRequest() {
    const { categoria, descuento, sortBy } = reduxSearchParams;
    const catValidation = categoria === 'Todos' || categoria === 'Buscar';
    const fixedData = {
      ...reduxSearchParams,
      filters: {
        categoria: catValidation ? null : categoria,
        descuento
      },
      categoria: null,
      descuento: null,
      sortBy: sortBy ? JSON.parse(sortBy) : null
    };
    return removeEmptyAndNull(fixedData);
  }
  // ---Render
  return (
    <div className="products-cont">
      <TabMenu currentCat={reduxSearchParams.categoria} hystoryPush={hystoryPush}>
        <MapProudcts
          onPageChange={onPageChange}
          current={reduxSearchParams.pageNumber}
          pageSize={reduxSearchParams.pageSize}
          productsData={products}
          showSizeChanger
          total={productCount}
        />
      </TabMenu>
    </div>
  );
}

export default ProductList;
