import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Category.scss';
import Product from './Product';
import { Props } from './type';

const Category = (props: Props) => {
  const { items, id, name } = props;
  return (
    <Container className="category" id={id}>
      <Row>
        <Col><h3>{name}</h3></Col>
      </Row>
      {items.map(item => <Product key={item.id} {...item} />)}
    </Container>
  );
};

export default Category;
