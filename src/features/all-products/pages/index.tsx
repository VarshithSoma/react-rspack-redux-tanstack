import { useState } from 'react';
import AllProducts from '../components/all-products';
import Loading from '../../../commons/components/loading';
import { Product } from '../../../commons/types';
import Error from '../../../commons/components/error';
import { useGetProducts } from '../services';

export default function AllProductsPage() {
  const [activePage, setActivePage] = useState(1);
  const { data, isLoading, isError } = useGetProducts(activePage);
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return (
    <AllProducts
      products={data?.products as Product[]}
      total={data?.total}
      activePage={activePage}
      setActivePage={setActivePage}
    />
  );
}
