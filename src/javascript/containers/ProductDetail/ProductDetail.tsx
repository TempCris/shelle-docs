// ---Dependencys
import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
// ---Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateLoading } from '@Redux/appInfo/actions';
import { updateReduxProdDetail } from '@Redux/appInfo/productDetail';
// ---Components
import ShortData from 'Cont/ProductDetail/components/ShortData';
import Actions from 'Cont/ProductDetail/components/Actions';
import Questions from 'Cont/ProductDetail/components/Questions';
// ---Types
import { ReduxState } from '@Redux/globalReducers';
import { IDParamsBody } from '@Declarations';
import { Product } from '@Redux/appInfo/customTypes';
// --Request
import { getProductRequest } from 'AppConfig/peticiones';
import { asyncHandler, testError } from 'AppConfig/requestHandlers';
// ---Others
import { stringToObject } from 'AppConfig/otherMethods';
import { validateJustIdParam } from 'AppConfig/validations';
import TitleStyler from 'AppConfig/TitleStyler';
import ImagesWidget from 'Cont/ProductDetail/components/ImagesWidget';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function ProductDetail() : React.ReactElement {
  // ----------------------- hooks, const, props y states
  // Redux States
  const { currentParams, isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  const { productDetail } = useSelector((reducers: ReduxState) => reducers.productDetailReducer);
  const {
    nombre, categoria, descripcion, _id, images
  } = productDetail;
  // Redux Actions
  const dispatchR = useDispatch();
  const isLoading = (flag: boolean) => dispatchR(updateLoading(flag));
  const updateProduct = (data: Product) => dispatchR(updateReduxProdDetail(data));
  // useEffect
  useEffect(() => { getProductData(); }, [currentParams]);
  // ----------------------- Metodos Principales
  function getProductData() {
    const { id } = areValidParams();
    if (id) {
      isLoading(true);
      asyncHandler(getProductRequest, onSuccessProduct, onErrorProduct, id);
    }
  }
  // ----------------------- Metodos Auxiliares
  function areValidParams() {
    const urlParams = stringToObject(currentParams);
    const { error } = validateJustIdParam(urlParams);
    if (error) {
      return { id: null };
    }
    return urlParams as unknown as IDParamsBody;
  }
  function onSuccessProduct(data: Product) {
    updateProduct(data);
    isLoading(false);
  }

  function onErrorProduct(err: unknown) {
    testError(err);
    isLoading(false);
  }
  // ----------------------- Render
  return (
    <div className="product-container">
      <Row>
        <Col span={24}>
          <h1>
            <TitleStyler someTitle={nombre} />
          </h1>
        </Col>
        <Col span={24}>
          <h5>{categoria && categoria.length > 0 ? categoria[0] : null}</h5>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={18}>
          <aside>
            <ImagesWidget nombre={nombre} images={images} />
          </aside>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={6}>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={24} xxl={24}>
              <Actions />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={24} xxl={24}>
              <ShortData productDetail={productDetail} />
            </Col>
          </Row>
        </Col>
        {isMovil ? (
          <Col xs={24} sm={24} md={10} lg={8} xl={8} xxl={6}>
            <Questions id={_id} />
          </Col>
        ) : null}
        <Col xs={24} sm={24} md={14} lg={16} xl={16} xxl={18}>
          <h2>Descripción</h2>
          <article>{descripcion}</article>
        </Col>
        {isMovil ? null : (
          <Col xs={24} sm={24} md={10} lg={8} xl={8} xxl={6}>
            <Questions id={_id} />
          </Col>
        )}
      </Row>
    </div>
  );
}
