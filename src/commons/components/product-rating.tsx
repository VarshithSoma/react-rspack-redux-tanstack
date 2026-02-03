import { Flex, Text } from '@sparrowengg/twigs-react';

type ProductRatingProps = {
  value: number;
  showText?: boolean;
};
export default function ProductRating({
  value,
  showText = true,
}: ProductRatingProps) {
  return (
    <Flex
      alignItems="center"
      gap="0.1rem"
      css={{
        marginBottom: '0.5rem',
        marginLeft: '-5px',
      }}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} filled={index < value} />
      ))}

      {showText && (
        <Text
          size="xs"
          weight="medium"
          css={{
            marginLeft: '0.25rem',
          }}
        >
          {value}/5
        </Text>
      )}
    </Flex>
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
