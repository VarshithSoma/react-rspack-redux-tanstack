import { Box, Text, Flex } from '@sparrowengg/twigs-react';
import PopularItemsWelcome from '../../../commons/components/popular-items';
import AllReviews from './all-reviews';

export default function ProductSuggestions() {
  return (
    <>
      <Box
        css={{
          width: '90%',
        }}
      >
        <Flex
          justifyContent="space-around"
          css={{
            color: '$neutral500',
            borderBottom: '1px solid $neutral200',
          }}
        >
          <Text size="sm" css={{ width: '15rem', cursor: 'pointer' }}>
            Product Details
          </Text>
          <Text
            size="sm"
            weight="medium"
            color="black900"
            css={{
              borderBottom: '2px solid $black900',
              paddingBottom: '1rem',
              textAlign: 'center',
            }}
          >
            Ratings & Reviews
          </Text>
          <Text size="sm" css={{ width: '15rem', cursor: 'pointer' }}>
            FAQ
          </Text>
        </Flex>
      </Box>
      <AllReviews />
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        css={{
          width: '100%',
          padding: '4rem 10rem',
        }}
      >
        <PopularItemsWelcome
          title="You might also like"
          buttonText="view all"
        ></PopularItemsWelcome>
      </Flex>
    </>
  );
}
