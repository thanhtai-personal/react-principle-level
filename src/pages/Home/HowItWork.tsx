import howItWorksPng from '@/assets/images/howitworks.png';
import howItWorksPngHorizontal from '@/assets/images/howitworks-hor.png';
import arrowSvg from '@/assets/images/arrow.svg';
import roadmapBg from '@/assets/images/roadmap-bg.svg';

const HowItWork = () => {
  return (
    <div className="light-bg relative mt-20 lg:pb-16 flex w-full flex-col bg-[#0E100F] px-4 lg:px-8 lg:max-w-[1280px]">
      <div className="hidden lg:flex absolute bottom-0 left-0">
        <img src={roadmapBg} />
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="text-title mt-8 flex w-full flex-col items-center justify-center px-4 lg:px-8 text-center">
          How Nixus AI Works
        </div>
        <div className="text-description-secondary lg:app-card-description mt-4 flex w-full flex-col items-center justify-center px-4 lg:px-8 text-center font-[500]">
          Monai integrates vast amounts of data and processes it through
          cutting-edge AI to deliver actionable insights and execute
          transactions through natural language commands
        </div>
        <div className="mt-4 w-full">
          <div className="card-secondary relative">
            <div className="flex absolute w-full h-full justify-center items-center">
              <div className="light-bubble -translate-y-[50px] lg:-translate-y-0 h-[350px] w-[350px]"></div>
            </div>
            <img className="flex lg:hidden" src={howItWorksPng} alt="How it works" />
            <img className="hidden lg:flex" src={howItWorksPngHorizontal} alt="How it works" />
            <div className="w-full flex flex-col justify-start items-start lg:flex-row lg:items-center">
              <div className="mt-6 lg:mt-0 w-full lg:w-auto text-left lg:h-6">
                <div className="text-step">
                  <div className="label">STEP 01:</div>
                  <div className="value">Data Aggregation</div>
                </div>
              </div>
              <div className="w-[12vw] hidden lg:flex justify-center items-center mx-4">
                <img className="w-full" src={arrowSvg} />
              </div>
              <div className="mt-4 lg:mt-0 w-full lg:w-auto text-left lg:h-6">
                <div className="text-step">
                  <div className="label">STEP 02:</div>
                  <div className="value">AI Processing</div>
                </div>
              </div>
              <div className="w-[15vw] hidden lg:flex justify-center items-center mx-4">
                <img className="w-full" src={arrowSvg} />
              </div>
              <div className="mt-4 lg:mt-0 w-full lg:w-auto text-left lg:h-6">
                <div className="text-step">
                  <div className="label">STEP 03:</div>
                  <div className="value">User Action</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
