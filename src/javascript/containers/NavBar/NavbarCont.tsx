// ---Dependencys
import { ReactElement } from 'react';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from '@Redux/globalReducers';
// ---Components
import ClientMenu from 'Cont/NavBar/components/ClientMenu';
import GlobalComponents from 'Cont/NavBar/components/GlobalComponents';
// ---Others
import logo from 'Images/logoStoreL.png';
import { RouteComponentProps } from 'react-router-dom';

// ------------------------------------------ COMPONENT-----------------------------------------
/**
 * Componente de la NavBar
 * @param {props} props RouteComponentProps
 * @return ReactElement
 */
export default function NavbarCont(props:RouteComponentProps): ReactElement {
  const { currentPath } = props;
  // Redux States
  const { isMovil } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  return (
    <>
      <ClientMenu currentPath={currentPath} isMovil={isMovil} logo={logo} />
      <GlobalComponents />
    </>
  );
}
