/* eslint-disable import/no-dynamic-require,global-require */
import React from 'react';
import './Product.scss';
import { Row, Col } from 'react-grid-system';
import Truncate from 'react-truncate';
import { Props } from './type';
import formatPrice from '../../../../utils/formatPrice';
import Ellipsis from '../../../Ellipsis';

const Product = (props: Props) => {
  const {
    name, price, img, description,
  } = props;
  const formattedPrice = formatPrice(price, 'de-DE', 'đ');
  const imgSrc = img ? require(`../../../../assets/images/${img}`) : '';
  return (
    <Row className="product">
      <Col xs={3}>
        <img src={imgSrc} alt="" />
      </Col>
      <Col xs={6}>
        <div className="product__name">
          <Truncate lines={2} ellipsis={<Ellipsis />}>
            {name}
          </Truncate>
        </div>
        <div className="product__description">
          <Truncate lines={1} ellipsis={<Ellipsis />}>
            {description}
          </Truncate>
        </div>
      </Col>
      <Col xs={3}>
        {formattedPrice}
      </Col>
    </Row>
  );
};

export default Product;
