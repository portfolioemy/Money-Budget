import * as React from "react"
const SubscriptionGlyph = (props) => (
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
        d="M32.5 23.077 38.055 27 32.5 30.923v-7.846Zm-16.5 0L21.555 27 16 30.923v-7.846ZM28.833 16v22l15.584-11-15.584-11Zm-16.5 0v22l15.584-11-15.584-11Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M5 5h44v44H5z" />
      </clipPath>
    </defs>
  </svg>
)
export default SubscriptionGlyph;