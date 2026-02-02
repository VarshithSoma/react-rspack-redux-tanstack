import { CircleLoader, Text } from '@sparrowengg/twigs-react';

export default function Loading() {
  return (
    <Text
      css={{
        display: 'flex',
        height: '80vh',
        width: '100vw',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircleLoader
        size="lg"
        color="primary"
        css={{ height: '5rem', width: '5rem' }}
      />
    </Text>
  );
}
