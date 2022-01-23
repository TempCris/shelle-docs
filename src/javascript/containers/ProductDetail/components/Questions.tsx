// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---CommonComps
import ButtonFB from 'Utils/ButtonFB';
import ButtonWhats from 'Utils/ButtonWhats';

// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  id:string
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function Questions(props: Props): ReactElement | null {
  // ----------------------- hooks, const, props y states
  const { id } = props;
  // ----------------------- Render
  return (
    <Row>
      <Col span={24}>
        <h6>
          <span>Hey!</span>
          Puedes preguntar aquí tus dudas:
        </h6>
      </Col>
      <Col span={10}>
        <ButtonFB />
      </Col>
      <Col span={10}>
        <ButtonWhats id={id} />
      </Col>
    </Row>
  );
}
