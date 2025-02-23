import circleRoundedIcon from '../../assets/images/circle-rounded.svg';
import triangleRoundedIcon from '../../assets/images/triangle-rounded.svg';
import quadrilateralRoundedIcon from '../../assets/images/quadrilateral-rounded.svg';
import pentagonRoundedIcon from '../../assets/images/pentagon-rounded.svg';
import { ArrowProgressBar } from '@/components/common/ArrowProgress';

const roadMapItems = [
  {
    id: 1,
    icon: circleRoundedIcon,
    title: 'Q2 2025',
    active: true,
    description: (
      <ul>
        <li>Beta Launch on Monad Testnet</li>
      </ul>
    ),
  },
  {
    id: 2,
    icon: triangleRoundedIcon,
    title: 'Q3 2025',
    active: false,
    description: (
      <ul>
        <li>Mainnet Integration and Live Data Feeds</li>
      </ul>
    ),
  },
  {
    id: 3,
    icon: quadrilateralRoundedIcon,
    title: 'Q4 2025',
    active: false,
    description: (
      <ul>
        <li>Ecosystem Partnerships and UX Enhancements</li>
      </ul>
    ),
  },
  {
    id: 4,
    icon: pentagonRoundedIcon,
    title: '2026+',
    active: false,
    description: (
      <ul>
        <li>Continuous AI Advancements and Global Adoption Initiatives</li>
      </ul>
    ),
  },
];

const Roadmap = () => {
  return (
    <div className="relative mt-6 flex w-full flex-col justify-center px-4 py-6 lg:max-w-[1280px] lg:px-8">
      <div className="absolute -bottom-[225px] flex w-full items-center justify-center">
        <div className="light-bubble h-[450px] w-[100vw] lg:w-[500px]"></div>
      </div>
      <div className="text-title flex w-full justify-center whitespace-nowrap text-center">
        Roadmap
      </div>
      <ArrowProgressBar
        className={'hidden h-4 w-full lg:flex'}
        value={50}
        id="hor-arrow-progress"
      />
      <div className="flex h-full">
        <ArrowProgressBar
          className={'flex h-full w-12 lg:hidden'}
          value={50}
          vertical
          id="ver-arrow-progress"
        />
        <div className="mt-8 flex w-full flex-col items-center gap-4 lg:grid lg:grid-cols-4 lg:justify-center lg:gap-6">
          {roadMapItems.map((item) => {
            return (
              <div
                key={item.id}
                className={`road-map-card w-full lg:h-full ${item.active ? 'active' : ''}`}
              >
                <div className="flex items-center lg:flex-col lg:items-start">
                  {item.icon && (
                    <img src={item.icon} alt="icon" className="road-map-icon" />
                  )}
                  <div className="text-card-title ml-8 justify-center text-center lg:ml-0 lg:mt-4">
                    {item.title}
                  </div>
                </div>
                <div className="text-card-des pl-6 text-left">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
