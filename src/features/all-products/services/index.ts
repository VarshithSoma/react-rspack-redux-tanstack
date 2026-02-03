import { useQuery } from '@tanstack/react-query';
import { ITEMS_PER_PAGE } from '../../../commons/constants';

export async function getProducts(page: number, limit = 9) {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  const start = (page - 1) * limit;
  const paginated = data.slice(start, start + limit);
  return {
    products: paginated,
    total: data.length,
  };
}
export const useGetProducts = (activePage: number) => {
  return useQuery({
    queryKey: ['products', activePage],
    queryFn: () => getProducts(activePage, ITEMS_PER_PAGE),
    staleTime: 5 * 60 * 1000,
  });
};
