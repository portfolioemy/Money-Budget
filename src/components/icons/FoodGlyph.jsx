import * as React from "react"
const FoodGlyph = (props) => (
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
      d="M12 36.702c0 .712.573 1.285 1.286 1.285h16.532c.713 0 1.286-.573 1.286-1.285v-1.247H12v1.247Zm9.546-16.533c-4.773 0-9.546 2.558-9.546 7.65h19.09c0-5.092-4.772-7.65-9.544-7.65Zm-6.211 5.104c1.412-1.973 4.416-2.558 6.21-2.558 1.795 0 4.799.585 6.211 2.558H15.335ZM12 30.363h19.09v2.546H12v-2.545Zm21.636-15.272V10h-2.545v5.09h-6.364l.293 2.546h12.167l-1.781 17.819h-1.77V38h2.19c1.069 0 1.947-.827 2.074-1.87L40 15.09h-6.364Z"
    />
  </svg>
)
export default FoodGlyph;
