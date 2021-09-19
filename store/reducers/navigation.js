export const nativigation = (state = false, action) => {
  switch (action.type) {
    case "SHOW_NAVIGATION":
      return true;
    case "HIDE_NAVIGATION":
      return false;
    default:
      return state;
  }
};
