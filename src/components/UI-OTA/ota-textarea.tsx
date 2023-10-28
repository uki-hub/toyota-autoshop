import { InputHTMLAttributes, LegacyRef, RefObject } from "react";
import styles from "./ota-textarea.module.css";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  textareaRef: LegacyRef<HTMLTextAreaElement>;
}

const OtaTextarea = (props: Props) => {
  const valueLength =
    (props.textareaRef as RefObject<HTMLTextAreaElement>).current?.value
      .length ?? 0;

  return (
    <div className="relative">
      <textarea
        ref={props.textareaRef}
        {...props}
        className={`${styles._} ${props.className}`}
      />
      {props.maxLength && (
        <div className="absolute bottom-1.5 right-1 text-xs text-end text-gray-400">
          {valueLength}/{props.maxLength}
        </div>
      )}
    </div>
  );
};

export default OtaTextarea;
