import './index.style.css';
import bg1 from '@/assets/images/graphic/eclipse6.png';
import bg2 from '@/assets/images/graphic/eclipse3.png';
import bg3 from '@/assets/images/graphic/eclipse2.png';
import bg4 from '@/assets/images/graphic/eclipse1.png';
import bg5 from '@/assets/images/graphic/eclipse8.png';
import bg6 from '@/assets/images/graphic/center_shadow.png';
import bg7 from '@/assets/images/graphic/center_ball2.png';
import bg8 from '@/assets/images/graphic/center_ball.png';
import bg9 from '@/assets/images/graphic/firely_logo_2.png';
import bubble1 from '@/assets/images/graphic/bubble1.png';
import bubble2 from '@/assets/images/graphic/bubble2.png';
import bubble3 from '@/assets/images/graphic/bubble3.png';
import bubble4 from '@/assets/images/graphic/bubble4.png';
import e1 from '@/assets/images/graphic/eclipse4.png';
import e2 from '@/assets/images/graphic/eclipse5.png';
import e3 from '@/assets/images/graphic/eclipse7.png';
import { IntersectionObserverView } from '@/components/common/IntersectionObservableView';
import { FadeIn } from '@/components/common/framer/FadeIn';

const Graphic1 = ({ className }: any) => {
  return (
    <div
      className={`graphic-1 relative z-50 h-full w-full text-[8px] lg:text-[16px] ${className}`}
    >
      <div className="absolute right-[12%] top-[9%]">
        <IntersectionObserverView id="intersect-bubble-1">
          <FadeIn duration={0.8} value={0.2}>
            <img src={bubble1} className="h-[7.5em] w-[7.5em]" />
          </FadeIn>
        </IntersectionObserverView>
      </div>

      <div className="absolute bottom-[10%] left-[15%]">
        <IntersectionObserverView id="intersect-bubble-2">
          <FadeIn duration={0.8} value={0.2}>
            <img src={bubble2} className="h-[7.5em] w-[7.5em]" />
          </FadeIn>
        </IntersectionObserverView>
      </div>

      <div className="absolute left-[5%] top-[5%]">
        <IntersectionObserverView id="intersect-bubble-3">
          <FadeIn duration={0.8} value={0.2}>
            <img src={bubble3} className="h-[8.125em] w-[8.125em]" />
          </FadeIn>
        </IntersectionObserverView>
      </div>

      <div className="absolute bottom-[18%] right-[18%]">
        <IntersectionObserverView id="intersect-bubble-4">
          <FadeIn duration={0.8} value={0.2}>
            <img src={bubble4} className="h-[6.25em] w-[6.25em]" />
          </FadeIn>
        </IntersectionObserverView>
      </div>

      <div className="bg-1 relative flex h-full w-full items-center justify-center">
        <img src={bg1} className="h-full w-full" />
        <div className="absolute z-0 flex h-full w-full items-center justify-center">
          <div className="bg-2 relative flex h-[85%] w-[85%] items-center justify-center">
            <img src={bg2} className="h-full w-full" />
            <div className="absolute z-0 flex h-full w-full items-center justify-center">
              <div className="bg-3 relative flex h-[85%] w-[85%] items-center justify-center">
                <div className="absolute h-full w-full">
                  <div
                    className="rotating relative h-full w-full"
                    style={{ animationDuration: '25s' }}
                  >
                    <div className="absolute -top-[3%] left-[45%]">
                      <img src={e1} className="h-[2.5em] w-[2.5em]" />
                    </div>

                    <div className="absolute -left-[3%] bottom-[45%]">
                      <img src={e2} className="h-[2em] w-[2em]" />
                    </div>

                    <div className="absolute -right-[1.5%] top-[38%]">
                      <img src={e3} className="h-[1.75em] w-[1.75em]" />
                    </div>
                  </div>
                </div>

                <img src={bg3} className="h-full w-full" />
                <div className="absolute z-0 flex h-full w-full items-center justify-center">
                  <div className="bg-4 relative flex h-[80%] w-[80%] items-center justify-center">
                    <img src={bg4} className="h-full w-full" />
                    <div className="absolute z-0 flex h-full w-full items-center justify-center">
                      <div className="bg-5 relative flex h-[98%] w-[98%] items-center justify-center">
                        <img
                          src={bg5}
                          className="rotating h-full w-full"
                          style={{ animationDuration: '30s' }}
                        />
                        <div className="absolute z-0 flex h-full w-full items-center justify-center">
                          <div className="bg-6 relative flex h-[85%] w-[85%] items-center justify-center">
                            <img src={bg6} className="h-full w-full" />
                            <div className="absolute z-0 flex h-full w-full items-center justify-center">
                              <div className="bg-7 relative flex h-[95%] w-[95%] items-center justify-center">
                                <img
                                  src={bg7}
                                  className="rotating h-full w-full"
                                  style={{ animationDuration: '5s' }}
                                />
                                <div className="absolute z-0 flex h-full w-full items-center justify-center">
                                  <div className="bg-8 relative flex h-[100%] w-[100%] items-center justify-center">
                                    <img
                                      src={bg8}
                                      className="rotating h-full w-full"
                                      style={{ animationDuration: '8s' }}
                                    />
                                    <div className="absolute z-0 flex h-full w-full items-center justify-center">
                                      <div className="bg-9 relative flex h-[100%] w-[100%] items-center justify-center">
                                        <img
                                          src={bg9}
                                          className="h-full w-full"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphic1;
