import { Box, Chip, Text, Flex } from '@sparrowengg/twigs-react';

export default function SizeSelection() {
  return (
    <Box>
      <Text>Choose Size</Text>
      <Flex css={{ margin: '1rem 0rem' }}>
        <Chip
          color="secondary"
          size="md"
          rounded="full"
          css={{ height: '2.5rem', padding: '$2' }}
          selectable
        >
          Small
        </Chip>
        <Chip
          color="secondary"
          size="md"
          rounded="full"
          css={{ height: '2.5rem', padding: '$2' }}
          selectable
        >
          Medium
        </Chip>
        <Chip
          color="secondary"
          size="md"
          rounded="full"
          css={{ height: '2.5rem', padding: '$2' }}
          selectable
        >
          Large
        </Chip>
        <Chip
          color="secondary"
          size="md"
          rounded="full"
          css={{ height: '2.5rem', padding: '$2' }}
          selectable
        >
          X-Large
        </Chip>
      </Flex>
    </Box>
  );
}
