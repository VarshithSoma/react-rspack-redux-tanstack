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
    rating: { rate: number };
    price: number;
}

export interface CartItem {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
}