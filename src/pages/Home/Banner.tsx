import { GetStartIcon } from '@/assets/icons/GetStart';
import { BannerBg } from './BannerBg';
import { JoinBetaIcon } from '@/assets/icons/JoinBeta';

export const Banner = () => {
  return (
    <div className="w-full overflow-hidden">
      <BannerBg>
        <div className="flex min-h-[800px] w-full flex-col items-center justify-center px-8 py-6">
          <div className="text-title max-w-[900px] text-center">
            Your AI-Driven Gateway to High-Performance DeFi
          </div>
          <div className="text-description mt-10 max-w-[280px] text-center lg:max-w-[640px]">
            Experience seamless blockchain insights and natural language
            transactions on the Monad network.
          </div>
          <div className="mt-10 flex w-full items-center justify-center">
            <button className="btn-primary mr-4 flex items-center justify-center px-4 py-2 duration-200 hover:-translate-y-[3px] lg:px-8">
              <GetStartIcon />
              Get Started
            </button>
            <button className="btn-secondary flex items-center justify-center px-4 py-2 duration-200 hover:-translate-y-[3px] lg:px-8">
              <JoinBetaIcon />
              Join the Beta
            </button>
          </div>
        </div>
      </BannerBg>
    </div>
  );
};
