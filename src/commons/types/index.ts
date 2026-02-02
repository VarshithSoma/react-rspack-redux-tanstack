export type CartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
};
export type CartState = {
  items: CartItem[];
};
export const initialState: CartState = {
  items: [],
};
export type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  price: number;
};
