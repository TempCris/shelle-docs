/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-fragments */
// ---Dependencys
import { ReactElement, Fragment, useEffect } from 'react';
import {
  Route, Switch, withRouter, RouteComponentProps
} from 'react-router-dom';
// ---Redux
import { useDispatch } from 'react-redux';
import {
  changeResponsiveFlag,
  updatePath,
  updateParams
} from '@Redux/appInfo/actions';
import { ResponsiveData } from '@Redux/appInfo/customTypes';
// ---Others
import isMovilDetector from 'AppConfig/isMovilDetector';
// ---Pages
import HomePage from 'Pages/HomePage';
import ProductListPage from 'Pages/ProductListPage';
import ProductDetailPage from 'Pages/ProductDetailPage';
import TrackerPage from 'Pages/TrackerPage';
import Error404Page from 'Pages/Error404Page';
// ---Components
import NavbarCont from 'Cont/NavBar/NavbarCont';
import Footer from 'Cont/Footer';
/** Render components as routes of the app, is the root of the entire app also,
 * get usefull data as window size of the app, current route and retrive the data to redux  */
function Routes({ location }: RouteComponentProps): ReactElement {
  const { pathname, search: urlParams } = location;
  const currentPath = pathname;
  const responsiveData = isMovilDetector();
  // Redux Actions
  const dispatch = useDispatch();
  const updateResponsiveData = (data: ResponsiveData) => dispatch(changeResponsiveFlag(data));
  const updateCurrentPath = () => dispatch(updatePath(currentPath));
  const updateCurrentParams = () => dispatch(updateParams(urlParams));
  useEffect(() => {
    updateResponsiveData(responsiveData);
  }, [responsiveData]);

  useEffect(() => { updateCurrentPath(); }, [currentPath]);
  useEffect(() => { updateCurrentParams(); }, [urlParams]);
  return (
    <Fragment>
      <NavbarCont currentPath={currentPath} />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/productos">
          <ProductListPage />
        </Route>
        <Route path="/item">
          <ProductDetailPage />
        </Route>
        <Route path="/rastreo">
          <TrackerPage />
        </Route>
        <Route path="*">
          <Error404Page />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default withRouter(Routes);
