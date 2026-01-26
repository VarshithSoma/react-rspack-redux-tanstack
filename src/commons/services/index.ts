import { useQuery } from "@tanstack/react-query";

export const getAllProducts = () => {
    return useQuery({
        queryKey: ["all-products"],
        queryFn: fetchData
    })
}
const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
}
export async function getProductById(id: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
}
