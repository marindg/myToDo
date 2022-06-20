import { useState } from "react";
import { connect } from "react-redux";

import "./NavigationTop.css";

import Avatar from "react-avatar";

import SvgLeftMenu from "./svgLeftMenu";
import SvgHome from "./svgHome";
import InputSearch from "./inputSearch";
import SvgPlus from "./svgPlus";
import SvgChart from "./svgChart";
import SvgQuestion from "./svgQuestion";
import SvgBell from "./svgBell";

const NavigationTop = (props) => {
  const [isLeftMenuVisible, setIsLeftMenuVisible] = useState(
    props.getLeftMenuVisible
  );

  const listBoxClicked = () => {
    props.leftMenuVisible(!isLeftMenuVisible);
    setIsLeftMenuVisible(!isLeftMenuVisible);
  };

  const homeClicked = () => {
    console.log("home clicked");
  };

  return (
    <div className="navigation-top">
      <div className="navigation-top-left">
        <div onClick={() => listBoxClicked()}>
          <SvgLeftMenu />
        </div>
        <div onClick={() => homeClicked()}>
          <SvgHome />
        </div>
        <div>
          <InputSearch />
        </div>
      </div>
      <div className="navigation-top-right">
        <div>
          <SvgPlus />
        </div>
        <div>
          <SvgChart />
          <span>0/5</span>
        </div>
        <div>
          <SvgQuestion />
        </div>
        <div>
          <SvgBell />
        </div>
        <div>
          <Avatar name="Marin" size="28" round={true} />
        </div>
      </div>
    </div>
  );
};

function readingRedux(state) {
  return { getLeftMenuVisible: state.VisibleMenu };
}

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
