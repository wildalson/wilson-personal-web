import * as React from "react";

function DivideIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 11h14v2H5v-2zm7-3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        fill="#000"
      />
    </svg>
  );
}

export default DivideIcon;