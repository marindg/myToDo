import { useState } from "react";

import { connect } from "react-redux";

import SvgFolder from "./svgFolder";
import SvgCalendar from "./svgCalendar";
import SvgFilter from "./svgfilter";
import SvgPlanning from "./svgPlanning";
import SvgArrow from "./svgArrow";
import "./NavigationBar.css";

const NavigationBar = (props) => {
  const [isProjectOpen, setIsProjectOpen] = useState(true);
  const [rotationArrowProject, setRotationArrowProject] = useState(0);
  const [isLeftMenuVisible, setIsLeftMenuVisible] = useState(
    props.getLeftMenuVisible
  );

  const getNavigation = () => {
    console.log("getNavigation");
  };

  const detailProjectVisible = () => {
    setIsProjectOpen(!isProjectOpen);
    isProjectOpen ? setRotationArrowProject(270) : setRotationArrowProject(0);
  };

  console.log("navigationbar : ", isLeftMenuVisible);

  return (
    <div>
      <div className="navigation-bar">
        <ul className="navigation-bar-group">
          <li onClick={() => getNavigation()}>
            <SvgFolder />
            Boite de réception
          </li>
          <li onClick={() => getNavigation()}>
            <SvgCalendar />
            Aujourd'hui
          </li>
          <li onClick={() => getNavigation()}>
            <SvgPlanning />
            Prochainement
          </li>
          <li onClick={() => getNavigation()}>
            <SvgFilter />
            Filtres et étiquettes
          </li>
        </ul>
        <div className="navigation-bar-group">
          <div id="project-list">
            <div
              className="project-list-title"
              onClick={() => detailProjectVisible()}
            >
              <SvgArrow rotation={rotationArrowProject} />
              <div className="project-list-title-project">Projets</div>
            </div>
            <div className="view-project">+</div>
          </div>
          {isProjectOpen ? (
            <ul className="navigation-bar-project-group">
              <li>NameProject</li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

function readingRedux(state) {
  return { getLeftMenuVisible: state.VisibleMenu };
}

export default connect(readingRedux, null)(NavigationBar);
