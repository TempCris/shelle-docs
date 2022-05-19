// ---Dependencys
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingOutlined } from '@ant-design/icons';
// ---Utils
import ButtonMlg from 'Utils/ButtonMlg';

// ------------------------------------------ COMPONENT-----------------------------------------
/**
 * Componente de boton de ver Catalogo
 * @param {props} props string - urlParams
 * @return ReactElement
 */
function ButtonProd(props: { urlParams: string }): React.ReactElement {
  const { urlParams } = props;
  return (
    <Link to={`/productos?${urlParams}`}>
      <div className="center-block">
        <ButtonMlg
          label="Ver catálogo ahora"
          htmlType="button"
          variant="yellow"
          size="small"
          widthB="220px"
          icon={<ShoppingOutlined />}
        />
      </div>
    </Link>
  );
}

export default ButtonProd;
