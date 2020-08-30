import type { Item } from '../type';

export type Ref = {
  current: any
};

export type Props = {
  ...Item,
  className: ?string
};
