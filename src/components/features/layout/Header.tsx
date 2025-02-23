import { AppNavigationMenu } from './AppNavigationMenu';
import { AppTopMenu } from './AppTopMenu';

export function Header({ fixed = false }: any) {
  return (
    <div
      className={`${fixed ? 'absolute' : 'relative'} shadow-header left-0 top-0 z-50 flex w-full items-center justify-center`}
    >
      <div className="container mx-auto">
        <header className="wrap-header flex w-full shrink-0 items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <div className="flex w-full items-center justify-between">
            <AppTopMenu />
            <AppNavigationMenu />
            <a
              className={`join-btn hidden cursor-pointer items-center py-2 text-lg font-semibold lg:flex`}
              onClick={() => {}}
            >
              Join for free
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}
