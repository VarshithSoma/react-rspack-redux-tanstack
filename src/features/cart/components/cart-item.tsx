import { Box, Text } from '@sparrowengg/twigs-react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useAppDispatch } from '../../../commons/store/hooks';
import { removeFromCart } from '../../../commons/store/slices/cart-slice';
import { type CartItem } from '../../../commons/types';
import QuantityInput from './quantity';

export function CartItem({
  id,
  image,
  title,
  price,
  quantity,
}: {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}) {
  const dispatch = useAppDispatch();
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        width: '100%',
        borderBottom: '1px solid $neutral200',
        paddingBottom: '2.5rem',
      }}
    >
      <Box
        css={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '120px',
          height: '120px',
          backgroundColor: '$neutral100',
          borderRadius: '1rem',
        }}
      ></Box>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          alignItems: 'flex-start',
          gap: '0.5rem',
        }}
      >
        <Text>{title}</Text>
        <Text
          css={{ color: '$neutral500', fontSize: '$sm', lineHeight: '1.2' }}
        >
          Size: Small
        </Text>
        <Text
          css={{ color: '$neutral500', fontSize: '$sm', lineHeight: '1.2' }}
        >
          Color: White
        </Text>
        <Text css={{ color: '$black900', fontSize: '$sm', lineHeight: '1.2' }}>
          ${price}
        </Text>
      </Box>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          color: '$negative500',
          cursor: 'pointer',
        }}
      >
        <RiDeleteBin5Fill
          size={20}
          onClick={() => dispatch(removeFromCart(id))}
        />
        <QuantityInput id={id} quantity={quantity} />
      </Box>
    </Box>
  );
}
export function CartItems({ cartData }: { cartData: CartItem[] }) {
  if (cartData.length === 0) {
    return (
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: '60%',
          border: '1px solid $neutral200',
          padding: '2rem',
          borderRadius: '10px',
        }}
      >
        <Text>Your cart is empty</Text>
      </Box>
    );
  }

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        gap: '3rem',
        border: '1px solid $neutral200',
        padding: '2rem',
        borderRadius: '10px',
        '& > div:last-child': {
          borderBottom: 'none',
          paddingBottom: '0',
        },
      }}
    >
      {cartData.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </Box>
  );
}
