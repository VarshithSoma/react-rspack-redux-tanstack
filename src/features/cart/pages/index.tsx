import { Flex, Text } from '@sparrowengg/twigs-react';
import { useAppSelector } from '@commons/store/hooks';
import OrderSummary from '../components/order-summary';
import { CartItems } from '../components/cart-item';

export default function CartPage() {
  const cartData = useAppSelector((state) => state.cart.items);
  return (
    <Flex flexDirection="column" css={{ width: '100%', padding: '5rem' }}>
      <Text size="lg" weight="bold" css={{ marginBottom: '2rem' }}>
        YOUR CART
      </Text>
      <Flex
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <CartItems cartData={cartData} />
        <OrderSummary />
      </Flex>
    </Flex>
  );
}
