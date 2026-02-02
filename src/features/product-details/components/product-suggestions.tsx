import { Box, Text } from '@sparrowengg/twigs-react';
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
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            color: '$neutral500',
            borderBottom: '1px solid $neutral200',
          }}
        >
          <Text css={{ width: '15rem', cursor: 'pointer' }}>
            Product Details
          </Text>
          <Text
            css={{
              width: '15rem',
              color: '$black900',
              cursor: 'pointer',
              borderBottom: '2px solid $black900',
              paddingBottom: '1rem',
              textAlign: 'center',
            }}
          >
            Ratings & Reviews
          </Text>
          <Text css={{ width: '15rem', cursor: 'pointer' }}>FAQ</Text>
        </Box>
      </Box>
      <AllReviews />
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '4rem 10rem',
        }}
      >
        <PopularItemsWelcome
          title="You might also like"
          buttonText="view all"
        ></PopularItemsWelcome>
      </Box>
    </>
  );
}
