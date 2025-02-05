import { ScrollArea } from '@/components/common/shadcn/scroll-area';
import { useStore } from '@/store';
import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';
import { Header } from './Header';

type Props = {
  children: ReactNode;
};

export const Layout = observer(function ({ children }: Props) {
  const { ui } = useStore();

  return (
    <ScrollArea className="h-screen w-screen">
      {ui.showHeader && <Header />}
      {children}
    </ScrollArea>
  );
});
