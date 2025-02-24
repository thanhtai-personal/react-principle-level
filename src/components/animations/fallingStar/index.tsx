import { ReactNode } from 'react';
import './index.style.css';

type Props = {
  children: ReactNode;
  className?: string;
};

export const FallingStarBg = ({ children, className }: Props) => {
  return (
    <div className={`relative ${className}`}>
      <section className="falling-star absolute z-0 h-full w-full">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </section>
      {children}
    </div>
  );
};

export default FallingStarBg;
