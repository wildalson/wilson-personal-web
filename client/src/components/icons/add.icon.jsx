import * as React from "react";

function AddIcon(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z" fill="#000" />
    </svg>
  );
}

export default AddIcon;