// ---Dependencys
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import HomeCont from 'Cont/Home/HomeCont';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function HomePage():ReactElement {
  return (
    <>
      <Helmet>
        <title>HomePage | Inicio</title>
      </Helmet>
      <HomeCont />
    </>
  );
}
