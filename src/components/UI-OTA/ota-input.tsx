import { InputHTMLAttributes } from "react";
import styles from "./ota-input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  boxclassname?: string;
}

const OtaInput = (props: Props) => {
  return (
    <div className={` ${styles._} ${props.boxclassname}`}>
      <input {...props} />
    </div>
  );
};

export default OtaInput;
