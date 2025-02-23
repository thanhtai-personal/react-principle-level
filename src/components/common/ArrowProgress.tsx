import React, { useEffect, useRef, useState } from 'react';

type ArrowProgressBarProps = {
  value: number;
  id: string;
  vertical?: boolean;
  className?: string;
};

export const ArrowProgressBar: React.FC<ArrowProgressBarProps> = ({
  value,
  vertical = false,
  className,
  id,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<number>(0);

  const progress = Math.min(100, Math.max(0, value));

  useEffect(() => {
    if (containerRef.current) {
      setContainerSize(
        vertical
          ? containerRef.current.parentElement?.clientHeight || 0
          : containerRef.current.clientWidth
      );
    }
  }, [vertical]);

  const handleResize = () => {
    if (containerRef.current) {
      setContainerSize(
        vertical
          ? containerRef.current.parentElement?.clientHeight || 0
          : containerRef.current.clientWidth
      );
    }
  };

  useEffect(() => {
    document.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('resize', handleResize);
    };
  }, []);

  const percentPixel = (containerSize * progress) / 100;

  console.log('percentPixel', percentPixel);
  console.log('containerSize', containerSize);

  return (
    <div id={id} className={className} ref={containerRef}>
      {vertical ? (
        <svg
          width="20"
          height={containerSize}
          viewBox="0 0 20 593"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.29289 592.693C9.68342 593.084 10.3166 593.084 10.7071 592.693L17.0711 586.329C17.4616 585.939 17.4616 585.306 17.0711 584.915C16.6805 584.524 16.0474 584.524 15.6569 584.915L10 590.572L4.34315 584.915C3.95262 584.524 3.31946 584.524 2.92893 584.915C2.53841 585.306 2.53841 585.939 2.92893 586.329L9.29289 592.693ZM11 591.986L11 157.282H9L9 591.986H11Z"
            fill="#3C3D3F"
          />
          <path
            d={`M10 ${percentPixel}L10 0`}
            stroke="url(#gradient-bg-vertical)"
            strokeWidth="4"
          />
          <circle
            cx="10"
            cy={percentPixel}
            r="7.5"
            fill="white"
            stroke="#826DF9"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="gradient-bg-vertical"
              x1="9.5"
              y1="0"
              x2="9.5"
              y2={containerSize}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#826DF9" stopOpacity="0" />
              <stop offset="1" stopColor="#826DF9" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width={containerSize}
          height="28"
          viewBox="0 0 1201 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1200.71 14.7071C1201.1 14.3166 1201.1 13.6834 1200.71 13.2929L1194.34 6.92893C1193.95 6.53841 1193.32 6.53841 1192.93 6.92893C1192.54 7.31946 1192.54 7.95262 1192.93 8.34315L1198.59 14L1192.93 19.6569C1192.54 20.0474 1192.54 20.6805 1192.93 21.0711C1193.32 21.4616 1193.95 21.4616 1194.34 21.0711L1200.71 14.7071ZM1200 13H0V15H1200V13Z"
            fill="#3C3D3F"
          />
          <path
            d={`M0 14H${percentPixel}`}
            stroke="url(#gradient-bg-hor)"
            strokeWidth="4"
          />
          <circle
            cx={percentPixel}
            cy="14"
            r="7.5"
            fill="white"
            stroke="#826DF9"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="gradient-bg-hor"
              x1="0"
              y1="14.5"
              x2={containerSize}
              y2="14.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#826DF9" stopOpacity="0" />
              <stop offset="1" stopColor="#826DF9" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default ArrowProgressBar;
