import { Box, IconButton, Text } from '@sparrowengg/twigs-react';
import { MinusIcon, PlusIcon } from '@sparrowengg/twigs-react-icons';
import { useAppDispatch } from '../../../commons/store/hooks';
import { updateQuantity } from '../../../commons/store/slices/cart-slice';

export default function QuantityInput({
  id,
  quantity,
}: {
  id: number;
  quantity: number;
}) {
  const dispatch = useAppDispatch();
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '$3',
        backgroundColor: '$neutral100',
        borderRadius: '10rem',
      }}
    >
      <IconButton
        color="secondary"
        size="sm"
        disabled={quantity <= 1}
        variant="ghost"
        onClick={() => dispatch(updateQuantity({ id, quantity: -1 }))}
        css={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
        }}
        icon={<MinusIcon style={{ width: '20px', height: '20px' }} />}
      />
      <Text
        css={{
          width: '2rem',
          textAlign: 'center',
          fontSize: '$md',
          fontWeight: 500,
          color: '$neutral900',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {quantity}
      </Text>
      <IconButton
        color="secondary"
        size="sm"
        variant="ghost"
        onClick={() => dispatch(updateQuantity({ id, quantity: 1 }))}
        css={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
        }}
        icon={<PlusIcon style={{ width: '20px', height: '20px' }} />}
      />
    </Box>
  );
}
