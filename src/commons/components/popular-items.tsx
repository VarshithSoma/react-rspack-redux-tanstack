import { Box, Button, Flex, Text } from '@sparrowengg/twigs-react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { useGetProducts } from '../../features/all-products/services';
import ProductItem from './product-item';

export function PopularItems() {
  const { data} = useGetProducts(1);
  let trimData = data?.products?.slice(0,4);
  return (
    <Flex
      flexDirection="row"
      wrap="wrap"
      justifyContent="space-around"
      alignItems="center"
      css={{
        width: '100%',
        marginBottom: '3rem',
      }}
    >
      {trimData?.map((item: Product) => {
        return (
          <ProductItem
            id={item.id}
            image={item.image}
            title={item.title}
            rating={item.rating.rate}
            price={item.price}
          />
        );
      })}
    </Flex>
  );
}
export default function PopularItemsWelcome({
  title,
  buttonText,
}: {
  title: string;
  buttonText?: string;
}) {
  const buttonTextPresent = buttonText ?? 'View All';
  return (
    <Box
      css={{
        marginTop: '$20',
      }}
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
        css={{
          width: '100%',
          marginBottom: '4rem',
        }}
      >
        <Text size="lg" weight="bold">
          {title}
        </Text>
        <PopularItems />
        <HollowButton text={buttonTextPresent} />
      </Flex>
    </Box>
  );
}
export function HollowButton({ text }: { text: string }) {
  const navigate = useNavigate();
  return (
    <Button
      color={'secondary'}
      onClick={() => navigate('/all-products')}
      css={{
        backgroundColor: '$white900',
        color: '$black900',
        borderRadius: '10rem',
        fontSize: '$sm',
        fontWeight: 500,
        lineHeight: '1.2',
        border: '1px solid $black400',
        width: '10rem',
        height: '2rem',
        cursor: 'pointer',
        display: 'block',
        margin: '0 auto',
        marginTop: '2rem',
        '&:hover': {
          color: '$accent50',
        },
      }}
    >
      {text}
    </Button>
  );
}
