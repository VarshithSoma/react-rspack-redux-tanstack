import { Box, IconButton, Input, styled, Text } from '@sparrowengg/twigs-react';
import { LuShoppingCart, LuUser } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
export default function Header() {
  const cartData = useAppSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const CustomButton = styled('button', {
    css: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '2rem',
    },
  });
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '$10',
        gap: '$10',
        borderBottom: '1px solid $neutral200',
      }}
    >
      <button
        onClick={() => navigate('/')}
        style={{
          fontSize: '2rem',
          fontWeight: 900,
          cursor: 'pointer',
          border: 'none',
          backgroundColor: 'transparent',
        }}
      >
        SHOP.CO
      </button>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <CustomButton
          color={'secondary'}
          onClick={() => navigate('/all-products')}
          css={{
            fontSize: '1rem',
            TextDecoration: 'none',
            fontWeight: 500,
            cursor: 'pointer',
            border: 'none',
            backgroundColor: 'transparent',
          }}
        >
          Shop
        </CustomButton>
        <CustomButton
          color={'secondary'}
          onClick={() => navigate('/all-products')}
          css={{
            fontSize: '1rem',
            TextDecoration: 'none',
            fontWeight: 500,
            cursor: 'pointer',
            border: 'none',
            backgroundColor: 'transparent',
          }}
        >
          New Arrivals
        </CustomButton>
        <CustomButton
          color={'secondary'}
          onClick={() => navigate('/all-products')}
          css={{
            fontSize: '1rem',
            TextDecoration: 'none',
            fontWeight: 500,
            cursor: 'pointer',
            border: 'none',
            backgroundColor: 'transparent',
          }}
        >
          Brands
        </CustomButton>
      </Box>
      <Box
        css={{
          width: '30%',
        }}
      >
        <Input
          variant={'default'}
          css={{
            fontSize: '$md',
            backgroundColor: '$neutral100',
            borderRadius: '10rem',
            width: '100%',
            border: 'none',
            padding: '$8',
          }}
          placeholder="Search for Products..."
        />
      </Box>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <Box onClick={() => navigate('/cart')} css={{ position: 'relative' }}>
          <IconButton
            variant={'ghost'}
            color={'secondary'}
            icon={<LuShoppingCart />}
          />
          <Text
            size="xxs"
            weight="medium"
            css={{
              backgroundColor: '$secondary',
              color: '$white900',
              borderRadius: '50%',
              height: '1rem',
              width: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: '-0.5rem',
              right: '-0.5rem',
            }}
          >
            {cartData.length}
          </Text>
        </Box>
        <IconButton variant={'ghost'} color={'secondary'} icon={<LuUser />} />
      </Box>
    </Box>
  );
}
