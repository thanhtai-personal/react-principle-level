import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from '@/components/common/shadcn/sheet';
import { Button } from '@/components/common/shadcn/button';
import { MenuIcon } from '@/assets/icons/MenuIcon';
import { ShirtIcon } from '@/assets/icons/ShirtIcon';
import { menuItems } from '@/constant/menuItems';

export function AppTopMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <a href="#">
          <ShirtIcon className="h-6 w-6" />
          <span className="sr-only">ShadCN</span>
        </a>
        <div className="grid gap-2 py-6">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target={item.target || '_self'}
              className={`flex w-full items-center py-2 text-lg font-semibold ${item.className}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
