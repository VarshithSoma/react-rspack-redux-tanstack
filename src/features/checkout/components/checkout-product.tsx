import { Box, Image, Text } from '@sparrowengg/twigs-react';
export function CheckoutItem({ item }: { item: any }) {
  return (
    <Box
      css={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Image
        src={item.image}
        alt={item.title.slice(0, 10)}
        css={{
          width: '60px',
          height: '60px',
          objectFit: 'contain',
          backgroundColor: '$neutral100',
          borderRadius: '10px',
        }}
      />
      <Text css={{ width: '50%', alignSelf: 'left' }}>
        {item.title.slice(0, 10)}
      </Text>
      <Text>${item.price * item.quantity}</Text>
    </Box>
  );
}
