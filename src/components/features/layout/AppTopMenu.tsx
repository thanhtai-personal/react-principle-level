import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from '@/components/common/shadcn/sheet';
import { Button } from '@/components/common/shadcn/button';
import { MenuIcon } from '@/assets/icons/MenuIcon';
import { menuItems } from '@/constant/menuItems';
import { LogoIcon } from '@/assets/icons/LogoIcon';

export function AppTopMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex w-full items-center justify-between lg:w-auto lg:min-w-40">
          <a href="#" className="mr-6 flex items-center justify-center">
            <LogoIcon className="mr-2 flex h-6 w-6 items-center justify-center" />
            <div className="flex h-6 items-center justify-center">
              <span className="font-inter whitespace-nowrap text-center">
                Nixus AI
              </span>
            </div>
          </a>
          <Button variant="link" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent side="top">
        <div className="shadow-header absolute left-0 top-0 flex w-full items-center justify-between px-4 py-4 lg:px-8">
          <a href="#" className="mr-6 flex items-center justify-center">
            <LogoIcon className="mr-2 flex h-6 w-6 items-center justify-center" />
            <div className="flex h-6 items-center justify-center">
              <span className="font-inter whitespace-nowrap text-center">
                Nixus AI
              </span>
            </div>
          </a>
        </div>
        <div className="mt-10 grid gap-2 py-6">
          {menuItems.map((item) => {
            if (item.renderMobile) return item.renderMobile(item, {});
            return (
              <a
                key={item.id}
                href={item.url}
                target={item.target || '_self'}
                className={`flex w-full items-center justify-center py-2 text-lg font-semibold ${item.className}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
