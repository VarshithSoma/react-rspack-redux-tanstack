import { useState } from 'react';
import AllProducts from '../components/all-products';
import { Product } from '@commons/types';
import { useGetProducts } from '../services';
import { CircleLoader, Text } from '@sparrowengg/twigs-react';

export default function AllProductsPage() {
  const [activePage, setActivePage] = useState(1);
  const { data, isLoading, isError } = useGetProducts(activePage);
  if (isLoading)
    return (
      <CircleLoader
        size="3xl"
        color="primary"
        css={{
          margin: 'auto',
          height: '70vh',
        }}
      />
    );
  if (isError) return <Text>Failed to load products</Text>;
  return (
    <AllProducts
      products={data?.products as Product[]}
      total={data?.total}
      activePage={activePage}
      setActivePage={setActivePage}
    />
  );
}
