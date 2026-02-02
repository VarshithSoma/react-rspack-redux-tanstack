import { Box, Flex } from '@sparrowengg/twigs-react';
import { HollowButton } from '../../../commons/components/popular-items';
import Review from '../../../commons/components/review';

export default function AllReviews() {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          padding: '4rem 10rem',
        }}
      >
        <Review></Review>
        <Review></Review>
        <Review></Review>
        <Review></Review>
        <Review></Review>
        <Review></Review>
      </Box>
      <HollowButton text="Load More Reviews"></HollowButton>
    </Flex>
  );
}
