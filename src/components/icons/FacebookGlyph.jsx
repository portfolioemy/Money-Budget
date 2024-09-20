import * as React from "react"
const FacebookGlyph = (props) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="#0875E6"
    className="icon flat-color"
    data-name="Flat Color"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={10}
      style={{
        fill: "#0875e6",
      }}
    />
    <path
      d="M17 9a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2h2a1 1 0 0 1 0 2h-2v7c-.33 0-.66.05-1 .05s-.67 0-1-.05v-7H9a1 1 0 0 1 0-2h2v-2a3 3 0 0 1 3-3h2a1 1 0 0 1 1 1Z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
)
export default FacebookGlyph;
