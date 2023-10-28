import { ButtonHTMLAttributes } from "react";

const OtaButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`bg-primary text-onPrimary font-semibold py-2 px-4 rounded-lg text-sm disabled:bg-gray-300 disabled:text-gray-400 hover:bg-primary-700 active:bg-primary-800  ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default OtaButton;
