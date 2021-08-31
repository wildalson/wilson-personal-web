import * as React from "react";

function SubmitIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 19a7 7 0 117-7 7.008 7.008 0 01-7 7zm0-12a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"
        fill="#2E3A59"
      />
    </svg>
  );
}

export default SubmitIcon;