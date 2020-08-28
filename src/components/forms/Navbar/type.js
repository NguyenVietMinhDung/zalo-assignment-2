import type { Props as Items } from './components/NavbarMenu/type';

export type Props = {
  items: Items,
  logoUrl: string,
  hamburgerIconUrl: string,
  closeIconUrl: string,
  activatedIndex: number,
  isVisible: boolean,
  activateNavigationItem: Function,
  openNavigationMenu: Function,
};
