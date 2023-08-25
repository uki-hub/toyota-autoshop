import { ButtonHTMLAttributes } from "react";
import OtaButton from "./ota-button.tsx";

const OtaButtonOutlined = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <OtaButton {...props} className={`bg-transparent text-primary border-[1px] py-1.5 border-primary-400 active:!bg-primary-50 active:border-primary-700 ${props.className}`}>{props.children}</OtaButton>;
}
 
export default OtaButtonOutlined;