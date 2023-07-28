import { Row, Col } from 'antd';
import React, { useState } from 'react';


const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const FoodMenuPage: React.FC = () => {
 
  return (
    <Row gutter={16} className='pt-20 pb-20'>
      <Col className="gutter-row m-3" span={6}>
      <div style={style}>col-6</div>
      </Col>
    </Row>
  );
};

export default FoodMenuPage;