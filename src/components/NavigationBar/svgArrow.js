import React from "react";

const svgArrow = (props) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <g transform={`rotate(${props.rotation},8,8)`}>
        <path
          d="M14 5.758L13.156 5 7.992 9.506l-.55-.48.002.002-4.588-4.003L2 5.77 7.992 11 14 5.758"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
};

export default svgArrow;
