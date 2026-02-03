import {
  Box,
  Button,
  Heading,
  Text,
  toast,
  Flex,
  Image,
} from '@sparrowengg/twigs-react';
import { Product } from '@commons/types';
import ProductRating from '@commons/components/product-rating';
import { useAppDispatch } from '@commons/store/hooks';
import LineBreak from './line-break';
import SelectColor from './colors';
import SizeSelection from './size-button';
import QuantityInput from './quantity';
import { addToCart } from '../../cart/slices/cart-slice';
import { useState } from 'react';

export default function ProductData({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  return (
    <Flex
      gap="4rem"
      justifyContent="center"
      css={{
        width: '100%',
        padding: '4rem 10rem',
      }}
    >
      <Box
        css={{
          width: 480,
          height: 520,
          borderRadius: 12,
          backgroundColor: '$neutral100',
          padding: '0.5rem',
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          css={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      </Box>
      <Flex
        flexDirection="column"
        gap="1rem"
        css={{
          maxWidth: 520,
        }}
      >
        <Heading size="h4">{product.title}</Heading>
        <ProductRating value={product.rating.rate} />
        <Text
          size="lg"
          weight="bold"
          css={{
            marginTop: '0.5rem',
          }}
        >
          ${product.price}
        </Text>
        <Text
          css={{
            color: '$neutral400',
            marginTop: '0.5rem',
          }}
        >
          {product.description}
        </Text>
        <LineBreak />
        <SelectColor />
        <LineBreak />
        <SizeSelection />
        <LineBreak />
        <Flex alignItems="center" justifyContent="flex-start" gap="1rem">
          <QuantityInput quantity={quantity} setQuantity={setQuantity} />
          <Button
            color={'secondary'}
            css={{
              width: '100%',
              height: '2.1rem',
              marginLeft: '3rem',
              borderRadius: '10rem',
              backgroundColor: '$neutral900',
              color: '$white900',
              fontWeight: 500,
            }}
            onClick={() => {
              dispatch(
                addToCart({
                  id: product.id,
                  title: product.title,
                  image: product.image,
                  price: product.price,
                  quantity: quantity,
                }),
              );
              setQuantity(1);
              toast({
                duration: 1000,
                variant: 'default',
                title: `${product.title} added to cart`,
                description: 'Product added to cart successfully.',
              });
            }}
          >
            Add to Cart
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
