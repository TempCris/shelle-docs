/* eslint-disable react/require-default-props */
// ---Dependencys
import React from 'react';
import { Row } from 'antd';
// ---CommonComps
import ProductBox from 'Utils/ProductBox';
// ---Types
import { Product } from '@Redux/home/customTypes';

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  productsData?: Array<Product>;
}
// ------------------------------------------ COMPONENT-----------------------------------------
/**
 * Componente de articulos destacados
 * @param {props} props Array(Product) - productsData
 * @return ReactElement | null
 */
function Destacados(props: Props) : React.ReactElement | null {
  const { productsData } = props;
  if (productsData && productsData.length > 0) {
    return (
      <div className="destacados-cont">
        <h1>Destacados</h1>
        <Row>
          {productsData.map((producto) => <ProductBox key={producto._id} producto={producto} />)}
        </Row>
      </div>
    );
  }
  return null;
}

export default Destacados;
