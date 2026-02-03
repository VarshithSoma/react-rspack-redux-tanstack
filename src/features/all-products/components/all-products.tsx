import { Heading, Box, Pagination, Flex } from '@sparrowengg/twigs-react';
import ProductItem from '@commons/components/product-item';
import { Product } from '@commons/types';
const ITEMS_PER_PAGE = 9;
export default function AllProducts({
  products,
  total,
  activePage,
  setActivePage,
}: {
  products: Product[];
  total: number;
  activePage: number;
  setActivePage: (page: number) => void;
}) {
  console.log(products);
  return (
    <Box css={{ padding: '3rem' }}>
      <Heading size="h3" css={{ marginLeft: '3rem', marginBottom: '1rem' }}>
        All Products
      </Heading>
      <Flex wrap="wrap" justifyContent="space-around" gap="2rem">
        {products.map((item: Product) => (
          <ProductItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            rating={item.rating.rate}
            price={item.price}
          />
        ))}
      </Flex>
      <Flex justifyContent="center">
        <Pagination
          activePage={activePage}
          itemsPerPage={ITEMS_PER_PAGE}
          total={total}
          onChange={(_, page) => setActivePage(page)}
        />
      </Flex>
    </Box>
  );
}
