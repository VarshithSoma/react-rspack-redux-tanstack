import { Box, Text } from '@sparrowengg/twigs-react';

type ProductRatingProps = {
  value: number;
  showText?: boolean;
};
export default function ProductRating({
  value,
  showText = true,
}: ProductRatingProps) {
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: '$1',
        marginBottom: '$5',
        marginLeft: '-5px',
      }}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} filled={index < value} />
      ))}

      {showText && (
        <Text
          css={{
            fontSize: '$xs',
            fontWeight: 400,
            marginLeft: '$4',
          }}
        >
          {value}/5
        </Text>
      )}
    </Box>
  );
}

const Star = ({ filled = false }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill={filled ? '#facc15' : '#e5e7eb'}
  >
    <path
      d="M12 17.27L18.18 21 16.54 13.97 
        22 9.24 14.81 8.63 
        12 2 9.19 8.63 
        2 9.24 7.46 13.97 
        5.82 21z"
    />
  </svg>
);
