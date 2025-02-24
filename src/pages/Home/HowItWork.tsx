import howItWorksPng from '@/assets/images/howitworks.png';
import howItWorksPngHorizontal from '@/assets/images/howitworks-hor.png';
import arrowSvg from '@/assets/images/arrow.svg';
import roadmapBg from '@/assets/images/roadmap-bg.svg';
import { FadeIn } from '@/components/common/framer/FadeIn';
import { IntersectionObserverView } from '@/components/common/IntersectionObservableView';
import { FadeLeft } from '@/components/common/framer/FadeLeft';
import useResponsive from '@/hooks/common/useResponsive';

const HowItWork = () => {
  const { isDesktop } = useResponsive();

  return (
    <div className="light-bg relative mt-20 flex w-full flex-col bg-[#0E100F] px-4 lg:max-w-[1280px] lg:px-8 lg:pb-16">
      <div className="absolute bottom-0 left-0 hidden lg:flex">
        <img src={roadmapBg} />
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="text-title mt-8 flex w-full flex-col items-center justify-center px-4 text-center lg:px-8">
          How Nixus AI Works
        </div>
        <div className="text-description-secondary lg:app-card-description mt-4 flex w-full flex-col items-center justify-center text-center lg:max-w-[1000px] lg:font-[500]">
          Monai integrates vast amounts of data and processes it through
          cutting-edge AI to deliver actionable insights and execute
          transactions through natural language commands
        </div>
        <div className="mt-4 w-full lg:mt-8">
          <div className="card-secondary relative flex items-center justify-center">
            <div className="absolute flex h-full w-full items-center justify-center">
              <div className="light-bubble h-[350px] w-[350px] -translate-y-[50px] lg:-translate-y-0"></div>
            </div>
            <IntersectionObserverView
              id={`intersection-how-it-work-image-mobile`}
              className="flex items-center justify-center"
              isInfinite={false}
            >
              <FadeIn
                off={!isDesktop}
                duration={0.3}
                className="flex items-center justify-center"
              >
                <img
                  className="flex lg:hidden"
                  src={howItWorksPng}
                  alt="How it works"
                />
              </FadeIn>
            </IntersectionObserverView>
            <IntersectionObserverView
              id={`intersection-how-it-work-image`}
              className="flex items-center justify-center"
              isInfinite={false}
            >
              <FadeIn
                off={!isDesktop}
                duration={0.3}
                delay={0.1}
                value={0.9}
                className="flex items-center justify-center"
              >
                <img
                  className="hidden lg:flex"
                  src={howItWorksPngHorizontal}
                  alt="How it works"
                />
              </FadeIn>
            </IntersectionObserverView>

            <div className="flex w-full flex-col items-start justify-start lg:flex-row lg:items-center">
              <IntersectionObserverView
                id={`intersection-how-it-work-step-1`}
                className="flex items-center justify-center"
                isInfinite={false}
              >
                <FadeLeft
                  off={!isDesktop}
                  duration={0.3}
                  delay={0}
                  className="flex items-center justify-center"
                >
                  <div className="mt-6 w-full text-left lg:mt-0 lg:h-6 lg:w-auto">
                    <div className="text-step">
                      <div className="label">STEP 01:</div>
                      <div className="value">Data Aggregation</div>
                    </div>
                  </div>
                </FadeLeft>
              </IntersectionObserverView>

              <IntersectionObserverView
                id={`intersection-how-it-work-arrow-1`}
                className="flex items-center justify-center"
                isInfinite={false}
              >
                <FadeLeft
                  off={!isDesktop}
                  duration={0.3}
                  delay={0.5}
                  className="flex items-center justify-center"
                >
                  <div className="hidden w-[12vw] items-center justify-center px-2 lg:flex">
                    <img className="w-full" src={arrowSvg} />
                  </div>
                </FadeLeft>
              </IntersectionObserverView>
              <IntersectionObserverView
                className="flex items-center justify-center"
                id={`intersection-how-it-work-step-2`}
                isInfinite={false}
              >
                <FadeLeft
                  off={!isDesktop}
                  duration={0.3}
                  delay={1}
                  className="flex items-center justify-center"
                >
                  <div className="mt-4 w-full text-left lg:mt-0 lg:h-6 lg:w-auto">
                    <div className="text-step">
                      <div className="label">STEP 02:</div>
                      <div className="value">AI Processing</div>
                    </div>
                  </div>
                </FadeLeft>
              </IntersectionObserverView>
              <IntersectionObserverView
                id={`intersection-how-it-work-arrow-2`}
                className="flex items-center justify-center"
                isInfinite={false}
              >
                <FadeLeft
                  off={!isDesktop}
                  duration={0.3}
                  delay={1.5}
                  className="flex items-center justify-center"
                >
                  <div className="hidden w-[15vw] items-center justify-center px-2 lg:flex">
                    <img className="w-full" src={arrowSvg} />
                  </div>
                </FadeLeft>
              </IntersectionObserverView>
              <IntersectionObserverView
                className="flex items-center justify-center"
                id={`intersection-how-it-work-step-3`}
                isInfinite={false}
              >
                <FadeLeft
                  off={!isDesktop}
                  duration={0.3}
                  delay={2}
                  className="flex items-center justify-center"
                >
                  <div className="mt-4 w-full text-left lg:mt-0 lg:h-6 lg:w-auto">
                    <div className="text-step">
                      <div className="label">STEP 03:</div>
                      <div className="value">User Action</div>
                    </div>
                  </div>
                </FadeLeft>
              </IntersectionObserverView>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
