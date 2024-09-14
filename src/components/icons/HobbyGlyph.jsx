import * as React from "react"
const HobbyGlyph = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={54}
    fill="none"
    {...props}
  >
    <circle cx={27} cy={27} r={27} fill="#51D289" />
    <g fill="#1E1E1E" clipPath="url(#a)">
      <path d="M41 22.8 27 13l-14 9.8h12.6V41h2.8V22.8H41Zm-14-6.384L32.124 20H21.876L27 16.416Z" />
      <path d="m15.996 27-2.744.518 1.148 6.118V41h2.8l.028-5.6H20V41h2.8v-8.4h-5.74L15.996 27ZM36.94 32.6H31.2V41H34v-5.6h2.772L36.8 41h2.8v-7.364l1.148-6.118L38.004 27l-1.064 5.6Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M11 11h32v32H11z" />
      </clipPath>
    </defs>
  </svg>
)
export default HobbyGlyph
