import { Box, Button, Text, Image } from '@sparrowengg/twigs-react';

export default function HeroSection() {
  return (
    <>
      <Box
        css={{
          paddingLeft: '10rem',
          paddingRight: '10rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '$neutral100',
          gap: '5rem',
        }}
      >
        <Box
          css={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'space-around',
            gap: '2rem',
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
          <Box
            css={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '50%',
              justifyContent: 'space-around',
              gap: '2rem',
            }}
          >
            <Stats count={'200'} label="International Brands" />
            <Seperator />
            <Stats count={'2,000'} label="High-Quality Products" />
            <Seperator />
            <Stats count={'30,000'} label="Happy Customers" />
          </Box>
        </Box>
        <Box
          css={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/landing-banner.jpg"
            alt="Welcome"
            css={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Box>
      </Box>
      <WelcomeBrands />
    </>
  );
}
function WelcomeBrands() {
  return (
    <Box
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '$black900',
        overflow: 'hidden',
      }}
    >
      <Image src="/versace.png" alt="Welcome Brands"></Image>
      <Image src="/gucci.png" alt="Welcome Brands"></Image>
      <Image src="/prada.png" alt="Welcome Brands"></Image>
      <Image src="/zara.png" alt="Welcome Brands"></Image>
      <Image src="/ck.png" alt="Welcome Brands"></Image>
    </Box>
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
