export type Product = {
  id: ?string,
  price: number,
  name: string,
  description: string,
  img: string,
};

export type Category = {
  id: string,
  name: string,
  items: Array<Product>,
};

export type Props = {
  categories: Array<Category>
};
