export interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}
export const initialState: { items: CartItem[] } = {
  items: [],
};
export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  price: number;
}

export interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}
