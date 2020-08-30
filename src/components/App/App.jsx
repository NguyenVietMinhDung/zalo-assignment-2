import React from 'react';
import Navbar from '../Navbar';
import Categories from '../Categories';
import ViewCartButton from '../ViewCartButton';
import categories from '../../constants/categories';
import './App.scss';

const App = () => {
  const navbarItems = categories.map(category => ({ id: category.id, name: category.name }));
  return (
    <div className="app">
      <Navbar items={navbarItems} />
      <Categories categories={categories} />
      <ViewCartButton />
    </div>
  );
};

export default App;
