import { Box, Button, Text, Image, Flex } from '@sparrowengg/twigs-react';

export default function HeroSection() {
  return (
    <Flex
      flexDirection="column"
      css={{
        minHeight: 'calc(100vh - 72px)',
        height: 'calc(100vh - 80px)',
        overflow: 'hidden',
      }}
    >
      <Flex
        alignItems="center"
        css={{
          flex: 1,
          minHeight: 0,
          paddingLeft: '10rem',
          paddingRight: '10rem',
          backgroundColor: '$neutral100',
          gap: '5rem',
          overflow: 'hidden',
        }}
      >
        <Flex
          flexDirection="column"
          alignItems="stretch"
          justifyContent="space-around"
          gap="2rem"
          css={{
            width: '50%',
          }}
        >
          <Text
            css={{
              fontSize: '5rem',
              fontWeight: 700,
              lineHeight: '0.9',
            }}
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </Text>
          <Text
            size="md"
            css={{
              color: '$neutral300',
            }}
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </Text>
          <Button
            color={'secondary'}
            css={{
              backgroundColor: '$neutral900',
              color: '$white900',
              borderRadius: '10rem',
              fontSize: '$sm',
              fontWeight: 500,
              lineHeight: '1.2',
              width: '13rem',
              height: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '$2',
              cursor: 'pointer',
            }}
          >
            Shop Now
          </Button>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around"
            gap="2rem"
            css={{
              width: '50%',
            }}
          >
            <Stats count={'200'} label="International Brands" />
            <Seperator />
            <Stats count={'2,000'} label="High-Quality Products" />
            <Seperator />
            <Stats count={'30,000'} label="Happy Customers" />
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          css={{
            overflow: 'hidden',
            width: '50%',
          }}
        >
          <Image
            src="/landing-banner.jpg"
            alt="Welcome"
            css={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
        </Flex>
      </Flex>
      <WelcomeBrands />
    </Flex>
  );
}
function WelcomeBrands() {
  const BRANDS = [
    { src: '/versace.png', alt: 'Versace' },
    { src: '/gucci.png', alt: 'Gucci' },
    { src: '/prada.png', alt: 'Prada' },
    { src: '/zara.png', alt: 'Zara' },
    { src: '/ck.png', alt: 'Calvin Klein' },
  ];
  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      gap="3rem"
      css={{
        width: '100%',
        padding: '2rem 0rem',
        backgroundColor: '$black900',
        overflow: 'hidden',
      }}
    >
      {BRANDS.map(({ src, alt }) => (
        <Flex
          alignItems="center"
          justifyContent="space-around"
          shrink="0"
          key={alt}
          css={{
            width: 140,
            height: 60,
          }}
        >
          <Image
            src={src}
            alt={alt}
            css={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              filter: 'grayscale(100%)',
              opacity: 0.85,
            }}
          />
        </Flex>
      ))}
    </Flex>
  );
}
function Seperator() {
  return (
    <Box
      css={{
        width: '1px',
        backgroundColor: '$neutral900',
        height: '5rem',
        alignSelf: 'stretch',
        flexShrink: 0,
      }}
    />
  );
}
function Stats({ count, label }: { count: string; label: string }) {
  return (
    <Box>
      <Text size="lg" weight="bold">
        {count}+
      </Text>
      <Text
        size="xs"
        css={{
          width: '9rem',
        }}
      >
        {label}
      </Text>
    </Box>
  );
}
