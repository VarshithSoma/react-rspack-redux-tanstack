import { Flex, Text } from '@sparrowengg/twigs-react';
import { CheckoutItem } from './checkout-product';
import LineBreak from '../../product-details/components/line-break';
import { CartItem } from '@commons/types';

export default function CheckoutItems({ cartData }: { cartData: CartItem[] }) {
  return (
    <Flex
      flexDirection="column"
      gap="2rem"
      css={{
        marginTop: '4rem',
        width: '20%',
      }}
    >
      {cartData.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <LineBreak />
      <Flex flexDirection="row" justifyContent="space-between">
        <Text>Total: </Text>
        <Text>
          ${cartData.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </Text>
      </Flex>
      <LineBreak />
    </Flex>
  );
}
