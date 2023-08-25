import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./ota-input.module.css";
import { Sizing } from "./_types.tsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  gap?: Sizing;
  inputClassName?: string;
  boxClassName?: string;
  disableFocus?: boolean;
}
const OtaInputIcon = (props: Props) => {
  return (
    <div
      className={`${
        !props.disableFocus && "focus-within:focus-border"
      } flex flex-row items-center gap-${props.gap ?? 1} ${styles._} ${
        props.boxClassName
      }`}
    >
      {props.leftIcon && props.leftIcon}
      <input {...props} className={props.inputClassName + ""} />
      {props.rightIcon && props.rightIcon}
    </div>
  );
};

export default OtaInputIcon;
