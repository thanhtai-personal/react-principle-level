import { Button } from '@/components/common/shadcn/button';
import { ShirtIcon } from '@/assets/icons/ShirtIcon';
import { AppTopMenu } from './AppTopMenu';
import { AppNavigationMenu } from './AppNavigationMenu';
import { ThemeToggle } from '@/components/features/theme/ThemeToggle';

export function Header() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <a href="#" className="mr-6 hidden lg:flex">
          <ShirtIcon className="h-6 w-6" />
          <span className="sr-only">ShadCN</span>
        </a>
        <AppTopMenu />
        <AppNavigationMenu />
        <div className="ml-auto flex gap-2">
          <Button variant="outline">Sign in</Button>
          <Button>Sign Up</Button>
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}
