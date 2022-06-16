import { useState } from "react";
import { connect } from "react-redux";

import "./NavigationTop.css";

const NavigationTop = (props) => {
  const [isLeftMenuVisible, setIsLeftMenuVisible] = useState(
    props.getLeftMenuVisible
  );

  const listBoxClicked = () => {
    props.leftMenuVisible(!isLeftMenuVisible);
    setIsLeftMenuVisible(!isLeftMenuVisible);
  };

  return (
    <div className="navigation-top">
      <div className="navigation-top-left" onClick={listBoxClicked}>
        hello
      </div>
      <div className="navigation-top-right">world</div>
    </div>
  );
};

function readingRedux(state) {
  return { getLeftMenuVisible: state.VisibleMenu };
}

// permet d'envoyer l'ID de la session sélectionnée par le user dans le store
function writtingRedux(dispatch) {
  return {
    leftMenuVisible: function (isLeftMenuVisible) {
      dispatch({
        type: "leftMenuVisible",
        isVisibleLeftMenu: isLeftMenuVisible,
      });
    },
  };
}

export default connect(readingRedux, writtingRedux)(NavigationTop);
