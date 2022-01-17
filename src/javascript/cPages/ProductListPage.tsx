// ---Dependencys
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import ProductList from 'Cont/ProductList';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function ProductListPage():ReactElement {
  return (
    <>
      <Helmet>
        <title>HomePage | Inicio</title>
      </Helmet>
      <ProductList />
    </>
  );
}
