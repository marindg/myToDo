import React, { useState } from "react";
import "./inputSearch.css";

import SvgLoupe from "./svgLoupe";

const InputSearch = () => {
  // const [isClicked, setIsClicked] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="quick_find">
      <SvgLoupe className="loupe" />
      <input
        className="search_input"
        placeholder="Recherche"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputSearch;
