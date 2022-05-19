// --- Dependencys
import { ReactElement } from 'react';
// --- Redux
import { useSelector } from 'react-redux';
import { ReduxState } from '@Redux/globalReducers';
// ---Components
import LoadingFullScreen from 'Cont/NavBar/components/LoadingFullScreen';

// -----------------------------------------COMPONENT-----------------------
/**
 * Componente de transicion de carga
  *@param {props} props
  *@return ReactElement | null
 */
function GlobalComponents(): ReactElement {
  // Redux States
  const { isLoading } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  return (
    <LoadingFullScreen isLoading={isLoading} />
  );
}

export default GlobalComponents;
