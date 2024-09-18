import * as React from "react"
const DebtsGlyph = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={54}
    fill="none"
    {...props}
  >
    <circle cx={27} cy={27} r={27} fill="#51D289" />
    <path
      fill="#1E1E1E"
      d="M39 15H15a2.977 2.977 0 0 0-2.985 3L12 36c0 1.665 1.335 3 3 3h24c1.665 0 3-1.335 3-3V18c0-1.665-1.335-3-3-3Zm0 21H15v-9h24v9Zm0-15H15v-3h24v3Z"
    />
  </svg>
)
export default DebtsGlyph;
