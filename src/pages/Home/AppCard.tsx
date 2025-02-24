import { FadeLeft } from '@/components/common/framer/FadeLeft';
import { IntersectionObserverView } from '@/components/common/IntersectionObservableView';
import useResponsive from '@/hooks/common/useResponsive';

export const AppCard = ({ data, index }: any) => {
  const { isDesktop } = useResponsive();

  return (
    <IntersectionObserverView
      id={`intersection-${data.id}`}
      isInfinite={false}
      className="flex items-center justify-center lg:h-full"
    >
      <FadeLeft
        duration={0.5}
        off={!isDesktop}
        delay={index * 0.2 + 0.1}
        className={'lg:h-full'}
      >
        <div className="app-card w-full max-w-[500px] lg:h-full lg:justify-end">
          <div className="app-card-thumb">
            <img src={data.thumb} alt="" />
          </div>
          <div className="app-card-title mb-0 mt-4 w-full text-left lg:mb-2">
            {data.title}
          </div>
          <div className="app-card-description text-left lg:flex lg:h-[96px] lg:!items-start lg:justify-start">
            {data.description}
          </div>
        </div>
      </FadeLeft>
    </IntersectionObserverView>
  );
};
