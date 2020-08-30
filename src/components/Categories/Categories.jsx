import React from 'react';
import './Categories.scss';
import Category from './Category';
import { Props } from './type';

const Categories = (props: Props) => {
  const { categories } = props;
  return (
    <div className="categories">
      {categories.map(category => <Category key={category.id} {...category} />)}
    </div>
  );
};

export default Categories;
