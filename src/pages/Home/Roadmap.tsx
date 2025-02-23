import circleRoundedIcon from '../../assets/images/circle-rounded.svg';
import triangleRoundedIcon from '../../assets/images/triangle-rounded.svg';
import quadrilateralRoundedIcon from '../../assets/images/quadrilateral-rounded.svg';
import pentagonRoundedIcon from '../../assets/images/pentagon-rounded.svg';
import { ArrowProgressBar } from "@/components/common/ArrowProgress";

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
    <div className="relative mt-6 flex w-full flex-col justify-center px-4 lg:px-8 py-6 lg:max-w-[1280px]">
      <div className="absolute -bottom-[225px] flex w-full items-center justify-center">
        <div className="light-bubble h-[450px] w-[100vw] lg:w-[500px]"></div>
      </div>
      <div className="text-title w-full whitespace-nowrap text-center flex justify-center">
        Roadmap
      </div>
      <ArrowProgressBar className={"w-full h-4 hidden lg:flex"} value={50} id="hor-arrow-progress" />
      <div className="flex h-full">
        <ArrowProgressBar className={"flex lg:hidden w-12 h-full"} value={50} vertical id="ver-arrow-progress" />
        <div className="mt-8 flex w-full flex-col items-center lg:justify-center gap-4 lg:grid lg:grid-cols-4 lg:gap-6">
          {roadMapItems.map((item) => {
            return (
              <div
                key={item.id}
                className={`road-map-card w-full lg:h-full ${item.active ? 'active' : ''}`}
              >
                <div className="flex lg:flex-col items-center lg:items-start">
                  {item.icon && (
                    <img src={item.icon} alt="icon" className="road-map-icon" />
                  )}
                  <div className="text-card-title ml-8 lg:ml-0 justify-center text-center lg:mt-4">
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
