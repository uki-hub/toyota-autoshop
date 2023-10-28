import { InputHTMLAttributes, LegacyRef, ReactNode } from "react";
import styles from "./ota-input.module.css";
import { Sizing } from "./_types.tsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: LegacyRef<HTMLInputElement>;
  leftIconElement?: ReactNode;
  rightIconElement?: ReactNode;
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
      {props.leftIconElement && props.leftIconElement}
      <input
        ref={props.inputRef}
        {...props}
        className={props.inputClassName + ""}
      />
      {props.rightIconElement && props.rightIconElement}
    </div>
  );
};

export default OtaInputIcon;
