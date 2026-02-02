import { Box, Button, Text } from '@sparrowengg/twigs-react';
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
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '35%',
        border: '1px solid $neutral200',
        padding: '2rem',
        borderRadius: '10px',
      }}
    >
      <Text css={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>
        Order Summary
      </Text>
      <Box css={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text>Subtotal</Text>
          <Text>${total}</Text>
        </Box>
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text>Delivery Fee</Text>
          <Text>$10</Text>
        </Box>
        <LineBreak></LineBreak>
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text>Total</Text>
          <Text>${total + 10}</Text>
        </Box>
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
      </Box>
    </Box>
  );
}
