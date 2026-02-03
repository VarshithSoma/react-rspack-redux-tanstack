import { Flex } from '@sparrowengg/twigs-react';
import PopularItemsWelcome from '@commons/components/popular-items';
import HeroSection from '../components/hero-section';
import LineBreak from '../../product-details/components/line-break';
export default function Welcome() {
  return (
    <Flex flexDirection="column" alignItems="space-around">
      <HeroSection />
      <PopularItemsWelcome title="New Arrivals" buttonText="View All" />
      <LineBreak />
      <PopularItemsWelcome title="Top Selling" buttonText="View All" />
    </Flex>
  );
}
