import { Flex, IconButton, Text } from '@sparrowengg/twigs-react';
import { MinusIcon, PlusIcon } from '@sparrowengg/twigs-react-icons';
import { useAppDispatch } from '@commons/store/hooks';
import { updateQuantity } from '../slices/cart-slice';

export default function QuantityInput({
  id,
  quantity,
}: {
  id: number;
  quantity: number;
}) {
  const dispatch = useAppDispatch();
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap="1rem"
      css={{
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
        size="md"
        weight="medium"
        css={{
          width: '2rem',
          textAlign: 'center',
          color: '$neutral900',
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
    </Flex>
  );
}
