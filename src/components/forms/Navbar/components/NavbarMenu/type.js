export type Item = {
  name: string,
  url: string,
};

export type Props = {
  items: Array<Item>,
  activatedIndex: number,
  isVisible: boolean,
  activateNavigationItem: Function,
};
