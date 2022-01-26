// ---Dependencys
import React, { useEffect, ReactElement } from 'react';
// ---Redux
import { useSelector, useDispatch } from 'react-redux';
import { saveHomeData, saveReduxProducts } from '@Redux/home/actions';
import { updateLoading } from '@Redux/appInfo/actions';
// ---Components
import DinamicCarousel from 'Cont/Home/components/DinamicCarousel';
import BuySteps from 'Cont/Home/components/BuySteps';
import ButtonProd from 'Cont/Home/components/ButtonProd';
import Destacados from 'Cont/Home/components/Destacados';
// ---Types
import { ReduxState } from '@Redux/globalReducers';
import { ReducerState as HomeData, Product } from '@Redux/home/customTypes';
// ---Others
import { ownerData, appConfig } from 'AppConfig/globalConfig';
// --Request
import { getHomePublic, getHomeProducts } from 'AppConfig/peticiones';
import { asyncHandler, testError } from 'AppConfig/requestHandlers';

// ------------------------------------------ COMPONENT-----------------------------------------
function Home() : ReactElement {
  // ----------------------- hooks, const, props y states
  // Redux States
  const {
    banners, paragraph, productsData, products
  } = useSelector(
    (reducers: ReduxState) => reducers.homeReducer
  );
  const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  // Redux Actions
  const dispatchR = useDispatch();
  const updateHomeReducer = (data: HomeData) => dispatchR(saveHomeData(data));
  const updateProductReducer = (data: Array<Product>) => dispatchR(saveReduxProducts(data));
  const isLoading = (flag: boolean) => dispatchR(updateLoading(flag));
  const { main, sub } = ownerData.title;
  useEffect(() => getHomeData(), []);
  useEffect(() => getProductsData(), [paragraph]);

  // ----------------------- Metodos Principales
  function getHomeData() {
    if (!paragraph) {
      isLoading(true);
      asyncHandler(getHomePublic, onSuccessData, onError);
    }
  }
  function getProductsData() {
    if (paragraph && !productsData) {
      isLoading(true);
      asyncHandler(getHomeProducts, onSuccessProducts, onError, { products });
    }
  }

  // ----------------------- Metodos Auxiliares
  function onSuccessData(data: HomeData) {
    updateHomeReducer(data);
    isLoading(false);
  }

  function onError(err: unknown) {
    testError(err);
    isLoading(false);
  }

  function onSuccessProducts(data: Array<Product>) {
    updateProductReducer(data);
    isLoading(false);
  }

  // ----------------------- Render
  return (
    <>
      <div className="h-title">
        {main}
        <span>{sub}</span>
      </div>
      <p>
        ¡Lo
        <span> mejor </span>
        te espera!
      </p>
      <DinamicCarousel isMovil={isMovil} banners={banners} />
      <div className="home-container">
        <p>{paragraph || 'Cargando...'}</p>
        <Destacados productsData={productsData} />
        <BuySteps isMovil={isMovil} />
        <ButtonProd urlParams={appConfig.productsURL} />
      </div>
    </>
  );
}

export default Home;
