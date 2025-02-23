import { Graphic1 } from '@/assets/icons/Graphic1';
import { RoundedStarIcon } from '@/assets/icons/RoundedStar';

const WhatIsNixusAIContent = (
  <div className="mt-[270px] flex w-full flex-col items-center justify-center lg:mt-4">
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center">
        <RoundedStarIcon />
      </div>

      <div className="text-title mt-8 flex w-full items-center justify-center px-4 lg:px-8 text-center"
        style={{
          fontSize: "36px",
          lineHeight: "44px",
        }}
      >
        What is Nixus AI
      </div>
      <div className="text-description-secondary mt-6 flex w-full items-center justify-center px-4 lg:px-8 text-center lg:max-w-[1080px] lg:!text-[#FFFFFF]">
        <span>
          <strong>Nixus AI</strong>&nbsp;is an intelligent AI agent built on the high-performance Monad
          blockchain. It empowers users with comprehensive data insights,
          simplified DeFi interactions, and personalized trading experiences—all
          using natural language.
        </span>
      </div>
    </div>
  </div>
);

const WhatIsNixusAI = () => {
  return (
    <div className="relative flex w-full flex-col bg-[#0E100F] lg:px-4 lg:justify-center lg:items-center">
      <div className="absolute w-full flex justify-center z-10 left-0 top-2 lg:top-[-270px] mt-4 justify-center]">
        <Graphic1 />
      </div>
      <div className="mt-[200px] w-full flex-col bg-transparent lg:mt-[60px] lg:max-w-[1280px]">
        <div className="light-border-top flex min-h-[530px] w-full flex-col bg-transparent lg:hidden">
          {WhatIsNixusAIContent}
        </div>
        <div className="light-border-top hidden h-[375px] w-full flex-col bg-transparent lg:flex">
          <div className="w-full h-full light-border-bg"></div>
        </div>
        <div className="hidden w-full flex-col bg-transparent lg:flex">
          {WhatIsNixusAIContent}
        </div>
      </div>
    </div>
  );
};

export default WhatIsNixusAI;
