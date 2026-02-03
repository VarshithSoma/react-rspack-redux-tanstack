import { Box, Text, Flex } from '@sparrowengg/twigs-react';

export default function SelectColor() {
  return (
    <Box>
      <Text size="sm" color="neutral500">
        Select Colors
      </Text>
      <Flex gap="1rem" css={{ margin: '0.5rem 0rem' }}>
        <Box
          css={{
            width: '1.5rem',
            height: '1.5rem',
            backgroundColor: '$negative500',
            borderRadius: '50%',
          }}
        ></Box>
        <Box
          css={{
            width: '1.5rem',
            height: '1.5rem',
            backgroundColor: '$primary500',
            borderRadius: '50%',
          }}
        ></Box>
        <Box
          css={{
            width: '1.5rem',
            height: '1.5rem',
            backgroundColor: '$secondary500',
            borderRadius: '50%',
          }}
        ></Box>
      </Flex>
    </Box>
  );
}
