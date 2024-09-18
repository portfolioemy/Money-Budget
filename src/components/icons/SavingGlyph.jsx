import * as React from "react"
const SavingGlyph = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={54}
    fill="none"
    {...props}
  >
    <circle cx={27} cy={27} r={27} fill="#51D289" />
    <g fill="#1E1E1E" clipPath="url(#a)">
      <path d="M39.75 20.313v-3.23a2.842 2.842 0 0 0-2.833-2.833H17.083a2.833 2.833 0 0 0-2.833 2.833v19.834a2.833 2.833 0 0 0 2.833 2.833h19.834a2.842 2.842 0 0 0 2.833-2.833v-3.23c.836-.496 1.417-1.389 1.417-2.437v-8.5c0-1.048-.581-1.94-1.417-2.437Zm-1.417 2.437v8.5h-9.916v-8.5h9.916Zm-21.25 14.167V17.083h19.834v2.834h-8.5a2.842 2.842 0 0 0-2.834 2.833v8.5a2.842 2.842 0 0 0 2.834 2.833h8.5v2.834H17.083Z" />
      <path d="M32.667 29.125a2.125 2.125 0 1 0 0-4.25 2.125 2.125 0 0 0 0 4.25Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M10 10h34v34H10z" />
      </clipPath>
    </defs>
  </svg>
)
export default SavingGlyph;
