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
            {item.render ? (
              item.render(item)
            ) : (
              <a
                className={`"group color-[#FBFAF9] inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:underline lg:px-8 ${
                  item.className
                }`}
                // target={item.target || '_self'}
                // href={`#${item.url}`}
                onClick={() => {
                  const findElement = document.getElementById(item.url);
                  if (findElement) {
                    findElement.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                {item.label}
              </a>
            )}
          </NavigationMenuLink>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
