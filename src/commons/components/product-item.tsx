import { Box, Heading, Text, Flex, Image } from '@sparrowengg/twigs-react';
import { useNavigate } from 'react-router-dom';
import ProductRating from './product-rating';

export default function ProductItem({
  id,
  image,
  title,
  rating,
  price,
}: {
  id: number;
  image: string;
  title: string;
  rating: number;
  price: number;
}) {
  const navigate = useNavigate();

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="1rem"
      onClick={() => navigate(`/${id}`)}
      css={{
        width: 295,
        height: 405,
        borderRadius: '1rem',
        margin: '1rem',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-4px)',
          transition: '0.2s ease',
        },
      }}
    >
      <Image
        src={image}
        alt={title}
        css={{
          width: 295,
          height: 298,
          objectFit: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '$neutral100',
          borderRadius: 10,
        }}
      />
      <Box css={{ width: 295, height: 94 }}>
        <Heading size="h6" weight="bold" css={{ color: '$neutral900' }}>
          {title}
        </Heading>
        <ProductRating value={rating} />
        <Text size="md" weight="bold" css={{ color: '$neutral900' }}>
          ${price}
        </Text>
      </Box>
    </Flex>
  );
}
