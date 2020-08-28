import constants from '../constants';

const {
  actions: {
    ACTIVATE_NAVIGATION_ITEM,
    OPEN_NAVIGATION_MENU,
  },
} = constants;

export const activateNavigationItem = index => ({
  type: ACTIVATE_NAVIGATION_ITEM,
  payload: {
    index,
  },
});

export const openNavigationMenu = () => ({
  type: OPEN_NAVIGATION_MENU,
});
