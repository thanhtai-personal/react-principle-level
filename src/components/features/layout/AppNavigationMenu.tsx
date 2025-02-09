import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/common/shadcn/navigation-menu';
import { menuItems } from '@/constant/menuItems';

export const AppNavigationMenu = () => {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuLink key={item.id} asChild>
            <a
              href={item.url}
              className={`"group dark:data-[state=open]:bg-gray-800/50" inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 ${
                item.className
              }`}
              target={item.target || '_self'}
            >
              {item.label}
            </a>
          </NavigationMenuLink>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
