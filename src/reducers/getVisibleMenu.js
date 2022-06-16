export default function (isVisibleLeftMenu = true, action) {
  if (action.type === "leftMenuVisible") {
    console.log("redux :", action.isVisibleLeftMenu);
    return action.isVisibleLeftMenu;
  } else {
    return isVisibleLeftMenu;
  }
}
