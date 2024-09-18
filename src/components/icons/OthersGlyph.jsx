import * as React from "react"
const OtherGlyph = (props) => (
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
        d="M35.8 37H39v2.667h-8v-8h2.667v3.64c2.44-1.96 4-4.947 4-8.307 0-5.427-4.08-9.92-9.334-10.573v-2.694c6.734.667 12 6.347 12 13.267 0 3.987-1.76 7.56-4.533 10ZM16.333 27c0-3.36 1.56-6.36 4-8.307v3.64H23v-8h-8V17h3.2c-2.773 2.44-4.533 6.013-4.533 10 0 6.92 5.266 12.6 12 13.267v-2.694c-5.254-.653-9.334-5.146-9.334-10.573Zm16.32-5.187-7.546 7.547-3.774-3.773-1.88 1.88 5.654 5.653 9.426-9.427-1.88-1.88Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M11 11h32v32H11z" />
      </clipPath>
    </defs>
  </svg>
)
export default OtherGlyph;
