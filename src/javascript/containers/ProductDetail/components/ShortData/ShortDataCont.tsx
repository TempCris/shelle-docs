// ---Dependencys
import React from 'react';
// ---Components
import ShortDataCard from 'Cont/ProductDetail/components/ShortData/components/ShortDataCard';
// ---Types
import { Product } from '@Redux/productDetail/customTypes';

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  productDetail: Product | Record<string, never>
}
// ------------------------------------------ COMPONENT-----------------------------------------
function ShortData(props: Props): React.ReactElement | null {
  // ----------------------- hooks, const, props y states
  const { productDetail } = props;
  // ----------------------- Render
  if (productDetail === {}) {
    return null;
  }
  return <ShortDataCard productDetail={productDetail} />;
}

export default ShortData;
