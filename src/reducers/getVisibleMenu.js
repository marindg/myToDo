export default function (isVisibleLeftMenu = true, action) {
  if (action.type === "leftMenuVisible") {
    return action.isVisibleLeftMenu;
  } else {
    return isVisibleLeftMenu;
  }
}
