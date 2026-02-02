import { Flex } from '@sparrowengg/twigs-react';
import { useAppSelector } from '../../../commons/store/hooks';
import UserInfo from '../components/user-info';
import CheckoutItems from '../components/chekout-items';

export default function CheckOutPage() {
  const cartData = useAppSelector((state) => state.cart.items);
  return (
    <Flex flexDirection="row" css={{ padding: '5rem 10rem', width: '100%' }}>
      <UserInfo />
      <CheckoutItems cartData={cartData} />
    </Flex>
  );
}
