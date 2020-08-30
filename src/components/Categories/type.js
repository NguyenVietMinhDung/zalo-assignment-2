export type Name = {
  vi: string,
  en: string,
};

export type Product = {
  id: ?string,
  price: number,
  name: Name,
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
