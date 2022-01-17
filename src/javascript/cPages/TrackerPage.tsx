// ---Dependencys
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import ProductList from 'Cont/ProductList';
import InDevPage from 'Utils/InDevPage';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function TrackerPage():ReactElement {
  const finishDate = new Date('December 17, 2021 03:24:00');
  return (
    <>
      <Helmet>
        <title>TrackerPage | Inicio</title>
      </Helmet>
      <InDevPage compName="Rastreo" finishDate={finishDate as unknown as number} />
      <ProductList />
    </>
  );
}
