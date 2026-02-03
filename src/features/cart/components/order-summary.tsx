import { Button, Flex, Text } from '@sparrowengg/twigs-react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../commons/store/hooks';
import LineBreak from '../../product-details/components/line-break';

export default function OrderSummary() {
  const navigate = useNavigate();
  const cartData = useAppSelector((state) => state.cart.items);
  const total = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <Flex
      flexDirection="column"
      css={{
        width: '35%',
        border: '1px solid $neutral200',
        padding: '2rem',
        borderRadius: '10px',
      }}
    >
      <Text size="lg" weight="bold" css={{ marginBottom: '2rem' }}>
        Order Summary
      </Text>
      <Flex flexDirection="column" gap="1rem">
        <Flex flexDirection="row" justifyContent="space-between">
          <Text>Subtotal</Text>
          <Text>${total}</Text>
        </Flex>
        <Flex flexDirection="row" justifyContent="space-between">
          <Text>Delivery Fee</Text>
          <Text>$10</Text>
        </Flex>
        <LineBreak></LineBreak>
        <Flex flexDirection="row" justifyContent="space-between">
          <Text>Total</Text>
          <Text>${total + 10}</Text>
        </Flex>
        <Button
          color={'secondary'}
          css={{
            width: '100%',
            height: '2.1rem',
            borderRadius: '10rem',
            backgroundColor: '$neutral900',
            color: '$white900',
            fontWeight: 500,
          }}
          onClick={() => navigate('/checkout')}
        >
          <Text>Checkout</Text>
        </Button>
      </Flex>
    </Flex>
  );
}
