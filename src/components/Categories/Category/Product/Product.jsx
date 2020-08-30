/* eslint-disable import/no-dynamic-require,global-require */
import React from 'react';
import './Product.scss';
import { Row, Col } from 'react-grid-system';
import { Props } from './type';
import formatPrice from '../../../../utils/formatPrice';

const Product = (props: Props) => {
  const { name, price, img } = props;
  const formattedPrice = formatPrice(price, 'de-DE', 'đ');
  const imgSrc = img ? require(`../../../../assets/images/${img}`) : '';
  return (
    <Row className="product">
      <Col xs={3}>
        <img src={imgSrc} alt="" />
      </Col>
      <Col xs={6}>
        <div className="product__name--vi">{name && name.vi}</div>
        <div className="product__name--en">{name && name.en}</div>
      </Col>
      <Col xs={3}>
        {formattedPrice}
      </Col>
    </Row>
  );
};

export default Product;
