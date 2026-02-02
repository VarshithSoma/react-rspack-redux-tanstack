import { Box, Button, Heading, Text, toast } from '@sparrowengg/twigs-react';
import { Product } from '../../../commons/types';
import ProductRating from '../../../commons/components/product-rating';
import LineBreak from './line-break';
import SelectColor from './colors';
import SizeSelection from './size-button';
import QuantityInput from './quantity';
import { addToCart } from '../../../commons/store/slices/cart-slice';
import { useAppDispatch } from '../../../commons/store/hooks';
import { useState } from 'react';

export default function ProductData({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  return (
    <Box
      css={{
        width: '100%',
        padding: '4rem 10rem',
        display: 'flex',
        gap: '4rem',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
    >
      <Box
        css={{
          width: 480,
          height: 520,
          borderRadius: 12,
          backgroundColor: '$neutral100',
          padding: '$6',
        }}
      >
        <Box
          css={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${product.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
      </Box>
      <Box
        css={{
          maxWidth: 520,
          display: 'flex',
          flexDirection: 'column',
          gap: '$4',
        }}
      >
        <Heading size="h4" css={{ lineHeight: '1.3' }}>
          {product.title}
        </Heading>
        <ProductRating value={product.rating.rate} />
        <Text
          css={{
            fontSize: '$lg',
            fontWeight: 700,
            marginTop: '$2',
          }}
        >
          ${product.price}
        </Text>
        <Text
          css={{
            color: '$neutral400',
            lineHeight: '1.6',
            marginTop: '$2',
          }}
        >
          {product.description}
        </Text>
        <LineBreak />
        <SelectColor />
        <LineBreak />
        <SizeSelection />
        <LineBreak />
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '$4',
          }}
        >
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
        </Box>
      </Box>
    </Box>
  );
}
