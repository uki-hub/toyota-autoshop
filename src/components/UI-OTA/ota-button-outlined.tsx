import { ButtonHTMLAttributes } from "react";
import OtaButton from "./ota-button.tsx";

const OtaButtonOutlined = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <OtaButton
      {...props}
      className={`bg-transparent border-[1px] py-1.5 text-primary-700 border-primary-300 hover:!bg-primary-50 active:!bg-primary-100 active:border-primary-400 ${props.className}`}
    >
      {props.children}
    </OtaButton>
  );
};

export default OtaButtonOutlined;
