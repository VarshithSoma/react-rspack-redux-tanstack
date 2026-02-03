import { CircleLoader, Flex, Text } from '@sparrowengg/twigs-react';
import { useParams } from 'react-router-dom';
import { useGetProductById } from '../services/index';
import ProductData from '../components/product-data';
import ProductSuggestions from '../components/product-suggestions';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductById(id ?? '');
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
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <ProductData product={product} />
      <ProductSuggestions />
    </Flex>
  );
}
