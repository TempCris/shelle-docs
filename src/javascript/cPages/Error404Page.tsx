// ---Dependencys
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import Error404Cont from 'Cont/Error404/Error404Cont';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function Error404Page():ReactElement {
  return (
    <>
      <Helmet>
        <title>Ups! Error 404</title>
      </Helmet>
      <Error404Cont />
    </>
  );
}
