import { BGLeftIcon } from '@/assets/icons/BgLeft';
import { BGRightIcon } from '@/assets/icons/BgRight';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const BannerBg = ({ children }: Props) => {
  return (
    <div className="relative flex w-full flex-col">
      <div className="absolute left-0 top-0 z-0 h-full w-full">
        <div className="relative flex w-full flex-col justify-between lg:flex-row">
          <div className="width-[600px] -translate-x-[70vw] -translate-y-[10%] lg:w-[auto] lg:-translate-x-[0] lg:-translate-y-[0]">
            <BGLeftIcon />
          </div>
          <div className="light-bubble absolute left-[11.965%] right-[13.07%] top-[320px] h-[300px] lg:left-[40.93%] lg:right-[40.14%] lg:top-[150px] lg:h-[450px]"></div>
          <div className="width-[600px] -translate-y-[65%] translate-x-[35vw] lg:w-[auto] lg:-translate-y-[0] lg:translate-x-[0]">
            <BGRightIcon className="" />
          </div>
        </div>
      </div>
      <div className="z-[5] w-full">{children}</div>
    </div>
  );
};
