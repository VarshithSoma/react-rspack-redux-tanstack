import { Box, Flex, Text } from '@sparrowengg/twigs-react';
import { TickCircleFillIcon } from '@sparrowengg/twigs-react-icons';
import ProductRating from './product-rating';

export default function Review() {
  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-between"
      css={{
        width: '100%',
        padding: '1rem',
        border: '1px solid $neutral200',
        borderRadius: '1rem',
        margin: '0.5rem',
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        css={{
          width: '100%',
          gap: '0.5rem',
        }}
      >
        <Box>
          <ProductRating value={4.5} showText={false}></ProductRating>
        </Box>
        <Flex
          alignItems="center"
          justifyContent="space-around"
          css={{
            width: '1.8rem',
            gap: '0.5rem',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '5px',
              backgroundColor: '#A3AEBD',
              borderRadius: '50%',
            }}
          ></div>
          <div
            style={{
              width: '10px',
              height: '5px',
              backgroundColor: '#A3AEBD',
              borderRadius: '50%',
            }}
          ></div>
          <div
            style={{
              width: '10px',
              height: '5px',
              backgroundColor: '#A3AEBD',
              borderRadius: '50%',
            }}
          ></div>
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        css={{
          gap: '0.5rem',
        }}
      >
        <Text
          size="md"
          weight="bold"
          css={{
            marginTop: '0.5rem',
          }}
        >
          Samantha D.
        </Text>
        <TickCircleFillIcon
          style={{
            width: '20px',
            height: '20px',
            color: '#01AB31',
            marginTop: '0.1rem',
          }}
        />
      </Flex>
      <Box>
        <Text
          size="sm"
          css={{
            color: '$neutral400',
            margin: '$2',
            lineHeight: '1.6',
          }}
        >
          "I absolutely love this t-shirt! The design is unique and the fabric
          feels so comfortable. As a fellow designer, I appreciate the attention
          to detail. It's become my favorite go-to shirt."
        </Text>
      </Box>
      <Text
        size="sm"
        weight="medium"
        css={{
          marginTop: '0.5rem',
          color: '$neutral700',
        }}
      >
        Posted on August 20, 2024
      </Text>
    </Flex>
  );
}
