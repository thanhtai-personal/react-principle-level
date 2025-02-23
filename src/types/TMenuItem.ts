import { ReactElement } from 'react';

export type TMenuItem = {
  id: number | string;
  name: string;
  label: string;
  url: string;
  className: string;
  target?: string;
  renderMobile?: (item: TMenuItem, actions?: any) => ReactElement;
  render?: (item: TMenuItem, actions?: any) => ReactElement;
};
