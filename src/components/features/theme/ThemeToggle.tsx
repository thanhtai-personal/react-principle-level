import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/common/shadcn/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/common/shadcn/dropdown-menu';
import { useTheme } from '@/hooks/logics/useTheme';
import { THEME, Theme, themeValues } from '@/types/Theme';

type Props = {
  useDropDown?: boolean;
};

export function ThemeToggle({ useDropDown }: Props) {
  const { theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            theme.value = themeValues.at(
              (themeValues.findIndex((t) => t === theme.value) + 1) %
                themeValues.length
            ) as Theme;
          }}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      {useDropDown && (
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => {
              theme.value = THEME.light;
            }}
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              theme.value = THEME.dark;
            }}
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              theme.value = THEME.system;
            }}
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}
