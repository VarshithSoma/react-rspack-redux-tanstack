import { Flex } from '@sparrowengg/twigs-react';
import { useParams } from 'react-router-dom';
import { useGetProductById } from '../services/index';
import Loading from '../../../commons/components/loading';
import Error from '../../../commons/components/error';
import ProductData from '../components/product-data';
import ProductSuggestions from '../components/product-suggestions';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductById(id ?? '');
  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <ProductData product={product} />
      <ProductSuggestions />
    </Flex>
  );
}
