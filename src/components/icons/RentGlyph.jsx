import * as React from "react";

const RentGlyph = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={54}
    fill="none"
    {...props}  
  >
    <circle cx={27} cy={27} r={27} fill="#51D289" />
    <g clipPath="url(#a)">
      <path
        fill="#1E1E1E"
        d="m27 17.798 7 6.353v11.025h-2.8v-8.47h-8.4v8.47H20V24.151l7-6.353ZM27 14 13 26.706h4.2V38h8.4v-8.47h2.8V38h8.4V26.706H41L27 14Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M8 8h38v38H8z" />
      </clipPath>
    </defs>
  </svg>
);

export default RentGlyph;
