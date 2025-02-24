import { TMenuItem } from '@/types/TMenuItem';
import { topElementIds } from './topElementIds';

export const menuItems: TMenuItem[] = [
  {
    id: 1,
    name: 'home',
    label: 'Home',
    url: topElementIds.banner,
    className: 'menu-item',
  },
  {
    id: 2,
    name: 'about',
    label: 'About',
    url: topElementIds.what,
    className: 'menu-item',
  },
  {
    id: 3,
    name: 'features',
    label: 'Features',
    url: topElementIds.features,
    className: 'menu-item',
  },
  {
    id: 4,
    name: 'how-it-works',
    label: 'How it works',
    url: topElementIds.how,
    className: 'menu-item',
  },
  {
    id: 5,
    name: 'roadmap',
    label: 'Roadmap',
    url: topElementIds.roadnap,
    className: 'menu-item',
  },
  {
    id: 6,
    name: 'join-for-free',
    label: 'Join for free',
    url: '#sign-up',
    className: '',
    renderMobile: (item: TMenuItem, actions: any) => {
      return (
        <a
          key={item.id}
          // href={item.url}
          // target={item.target || '_self'}
          className={`join-btn my-6 flex w-full items-center py-2 text-lg font-semibold duration-200 hover:-translate-y-[5px] ${item.className}`}
          onClick={() => {
            actions?.onClick?.(item);
          }}
        >
          {item.label}
        </a>
      );
    },
    render: (item: TMenuItem, actions: any) => {
      return <div></div>;
    },
  },
];
