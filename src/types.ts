export type Category = {
  id: number;
  title: string;
};

export type Item = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: Category;
};

export type Counter = {
  id: number;
  count: number;
};
