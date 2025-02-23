import { Graphic1 } from '@/assets/icons/Graphic1';
import { RoundedStarIcon } from '@/assets/icons/RoundedStar';

const WhatIsNixusAIContent = (
  <div className="mt-[270px] flex w-full flex-col items-center justify-center lg:mt-4">
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center">
        <RoundedStarIcon className="h-16 w-16 lg:h-20 lg:w-20" />
      </div>

      <div
        className="text-title mt-8 flex w-full items-center justify-center px-4 text-center lg:px-8"
        style={{
          fontSize: '36px',
          lineHeight: '44px',
        }}
      >
        What is Nixus AI
      </div>
      <div className="text-description-secondary mt-6 flex w-full items-center justify-center px-4 text-center lg:max-w-[1080px] lg:px-8 lg:!text-[#FFFFFF]">
        <span>
          <strong>Nixus AI</strong>&nbsp;is an intelligent AI agent built on the
          high-performance Monad blockchain. It empowers users with
          comprehensive data insights, simplified DeFi interactions, and
          personalized trading experiences—all using natural language.
        </span>
      </div>
    </div>
  </div>
);

const WhatIsNixusAI = () => {
  return (
    <div className="relative flex w-full flex-col bg-[#0E100F] lg:items-center lg:justify-center lg:px-4">
      <div className="justify-center] absolute left-0 top-2 z-10 mt-4 flex w-full justify-center lg:top-[-270px]">
        <Graphic1 className={'max-w-[730px]'} />
      </div>
      <div className="mt-[50vw] w-full flex-col bg-transparent lg:mt-[60px] lg:max-w-[1280px]">
        <div className="light-border-top flex min-h-[530px] w-full flex-col bg-transparent lg:hidden">
          {WhatIsNixusAIContent}
        </div>
        <div className="light-border-top hidden h-[375px] w-full flex-col bg-transparent lg:flex">
          <div className="light-border-bg h-full w-full"></div>
        </div>
        <div className="hidden w-full flex-col bg-transparent lg:flex">
          {WhatIsNixusAIContent}
        </div>
      </div>
    </div>
  );
};

export default WhatIsNixusAI;
