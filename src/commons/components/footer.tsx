import {
  Box,
  Button,
  Input,
  Text,
  Flex,
  Grid,
  Link,
} from '@sparrowengg/twigs-react';

export default function Footer() {
  return (
    <Box
      css={{
        backgroundColor: '$neutral200',
        marginTop: '10rem',
        padding: '1rem',
      }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        css={{
          backgroundColor: '$neutral900',
          borderRadius: '1rem',
          padding: '$15',
          position: 'relative',
          bottom: '5rem',
        }}
      >
        <Text size="lg" weight="bold" css={{ color: 'white' }}>
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </Text>

        <Flex
          flexDirection="column"
          gap="$4"
          css={{
            width: '360px',
          }}
        >
          <Input
            placeholder="Enter your email address"
            css={{
              backgroundColor: '$neutral50',
              color: '$neutral900',
              padding: '$7',
              borderRadius: '3rem',
            }}
          />
          <Button
            color={'secondary'}
            css={{
              backgroundColor: '$neutral50',
              color: '$neutral900',
              padding: '$7',
              borderRadius: '3rem',
              '&:hover': {
                color: '$accent50',
              },
            }}
          >
            Subscribe to Newsletter
          </Button>
        </Flex>
      </Flex>
      <Grid
        templateColumns="2fr repeat(4, 1fr)"
        gap={['1rem']}
        css={{ marginBottom: '$8' }}
      >
        <Box>
          <Text size="lg" weight="bold">
            SHOP.CO
          </Text>

          <Text css={{ color: '$neutral600', marginTop: '$3' }}>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </Text>
        </Box>

        <FooterColumn
          title="COMPANY"
          items={['About', 'Features', 'Works', 'Career']}
        />

        <FooterColumn
          title="HELP"
          items={[
            'Customer Support',
            'Delivery Details',
            'Terms & Conditions',
            'Privacy Policy',
          ]}
        />

        <FooterColumn
          title="FAQ"
          items={['Account', 'Manage Deliveries', 'Orders', 'Payments']}
        />

        <FooterColumn
          title="RESOURCES"
          items={[
            'Free eBooks',
            'Development Tutorial',
            'How to - Blog',
            'Youtube Playlist',
          ]}
        />
      </Grid>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        css={{
          borderTop: '1px solid $neutral300',
          paddingTop: '$5',
        }}
      >
        <Text css={{ color: '$neutral600', height: '5rem' }}>
          Shop.co © 2000–2023, All Rights Reserved
        </Text>
      </Flex>
    </Box>
  );
}
function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <Box>
      <Text
        size="sm"
        weight="bold"
        css={{
          letterSpacing: '0.2em',
          marginBottom: '$4',
        }}
      >
        {title}
      </Text>

      {items.map((item: string) => (
        <Link
          key={item}
          css={{
            fontSize: '0.8rem',
            display: 'block',
            color: '$neutral600',
            marginBottom: '0.5rem',
            cursor: 'pointer',
          }}
        >
          {item}
        </Link>
      ))}
    </Box>
  );
}
