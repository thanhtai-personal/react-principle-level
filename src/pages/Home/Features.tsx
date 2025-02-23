import card1Thump from '@/assets/images/card1Thump.png';
import card2Thump from '@/assets/images/card2Thump.png';
import card3Thump from '@/assets/images/card3Thump.png';
import { AppCard } from './AppCard';

const cardList = [
  {
    id: 1,
    title: 'Comprehensive Data Insights',
    thumb: card1Thump,
    description:
      'View detailed on-chain data (token info, whale activity) and off-chain insights (social sentiment from key influencers) in an easily digestible format',
  },
  {
    id: 2,
    title: 'Streamlined DeFi Interactions',
    thumb: card2Thump,
    description:
      'Execute transactions using simple prompts like ‘Buy token XXA for 5 Monad’—no technical expertise required.',
  },
  {
    id: 3,
    title: 'Self-Evolving Agent',
    thumb: card3Thump,
    description:
      'Benefit from adaptive trade optimization, proactive insights, and personalized communication that evolve with your expertise.',
  },
];

const Features = () => {
  return (
    <div className="relative mt-20 flex w-full flex-col bg-[#0E100F] lg:mt-16 lg:max-w-[1280px]">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="text-title mt-8 flex w-full flex-col items-center justify-center px-4 text-center lg:px-8">
          Powerful features for
          <span
            style={{
              color: '#826DF9',
              WebkitTextFillColor: '#826DF9',
              fontWeight: 700,
            }}
          >
            Nixus AI &nbsp;
            <span
              style={{
                color: '#999999',
                WebkitTextFillColor: '#999999',
                fontWeight: 400,
              }}
            >
              access
            </span>
          </span>
        </div>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 px-4 lg:grid lg:grid-cols-3 lg:px-8">
          {cardList.map((card) => (
            <AppCard data={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
