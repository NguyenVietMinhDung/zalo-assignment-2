import constants from '../constants';

const {
  actions: {
    ACTIVATE_NAVIGATION_ITEM,
    OPEN_NAVIGATION_MENU,
  },
} = constants;

const initialState = {
  isVisible: false,
  activatedIndex: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_NAVIGATION_ITEM:
      return {
        ...state,
        activatedIndex: action.payload.index,
      };
    case OPEN_NAVIGATION_MENU:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    default:
      return state;
  }
};
