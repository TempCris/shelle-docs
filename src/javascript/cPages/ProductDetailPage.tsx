// ---Dependencys
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
// ---Components
import ProductDetail from 'Cont/ProductDetail/ProductDetailCont';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function HomePage():ReactElement {
  return (
    <>
      <Helmet>
        <title>ProductDetailPage</title>
      </Helmet>
      <ProductDetail />
    </>
  );
}
