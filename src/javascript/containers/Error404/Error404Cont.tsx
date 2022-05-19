// ---Dependencys
import React from 'react';
// ---Components
import Titulo from 'Cont/Error404/components/Titulo';
import Cuerpo from 'Cont/Error404/components/Cuerpo';

/**
 *Contenedor de los componentes de Error 404
 *@type {string}
  *@return ReactElement
 */
// ------------------------------------------ COMPONENT-----------------------------------------
function Error404Cont(): React.ReactElement {
  return (
    <>
      <Titulo />
      <Cuerpo />
    </>
  );
}

export default Error404Cont;
