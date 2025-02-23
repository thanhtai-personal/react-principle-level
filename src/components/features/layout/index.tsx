import { ScrollArea } from '@/components/common/shadcn/scroll-area';
import { useStore } from '@/store';
import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type Props = {
  children: ReactNode;
};

export const Layout = observer(function ({ children }: Props) {
  const { ui } = useStore();

  return (
    <ScrollArea className="h-screen w-screen bg-[#0E100F]">
      {ui.showHeader && <Header fixed={ui.fixedHeader} />}
      {children}
      {ui.showFooter && <Footer fixed={ui.fixedFooter} />}
    </ScrollArea>
  );
});
