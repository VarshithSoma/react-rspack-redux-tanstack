import { useQuery } from '@tanstack/react-query';

export const getAllProducts = () => {
  return useQuery({
    queryKey: ['all-products'],
    queryFn: fetchData,
  });
};
const fetchData = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
};
