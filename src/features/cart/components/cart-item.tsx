import { Flex, Image, Text } from '@sparrowengg/twigs-react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useAppDispatch } from '@commons/store/hooks';
import { removeFromCart } from '../slices/cart-slice';
import { type CartItem } from '@commons/types';
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
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      gap="1rem"
      css={{
        width: '100%',
        borderBottom: '1px solid $neutral200',
        paddingBottom: '2.5rem',
      }}
    >
      <Image
        src={image}
        alt={title}
        css={{
          width: '120px',
          height: '120px',
          objectFit: 'contain',
          backgroundColor: '$neutral100',
          borderRadius: '1rem',
        }}
      />
      <Flex
        flexDirection="column"
        gap="0.5rem"
        alignItems="flex-start"
        css={{ width: '50%' }}
      >
        <Text>{title}</Text>
        <Text size="sm" weight="medium" css={{ color: '$neutral500' }}>
          Size: Small
        </Text>
        <Text size="sm" weight="medium" css={{ color: '$neutral500' }}>
          Color: White
        </Text>
        <Text size="sm" weight="medium" css={{ color: '$black900' }}>
          ${price}
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        gap="3rem"
        alignItems="flex-end"
        justifyContent="space-between"
        css={{ color: '$negative500', cursor: 'pointer' }}
      >
        <RiDeleteBin5Fill
          size={20}
          onClick={() => dispatch(removeFromCart(id))}
        />
        <QuantityInput id={id} quantity={quantity} />
      </Flex>
    </Flex>
  );
}
export function CartItems({ cartData }: { cartData: CartItem[] }) {
  if (cartData.length === 0) {
    return (
      <Flex
        flexDirection="column"
        css={{
          width: '60%',
          border: '1px solid $neutral200',
          padding: '2rem',
          borderRadius: '10px',
        }}
      >
        <Text>Your cart is empty</Text>
      </Flex>
    );
  }

  return (
    <Flex
      flexDirection="column"
      gap="3rem"
      css={{
        width: '60%',
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
    </Flex>
  );
}
