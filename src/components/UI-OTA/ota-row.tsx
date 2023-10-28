import { AriaAttributes, DOMAttributes, HTMLAttributes } from "react";
import { FlexCrossAxisAlingment, FlexMainAxisAlingment } from "./_types.tsx";

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    AriaAttributes,
    DOMAttributes<HTMLDivElement> {
  center?: boolean | undefined;
  mainAxis?: FlexMainAxisAlingment;
  crossAxis?: FlexCrossAxisAlingment;
}

const OtaRow = (props: React.PropsWithChildren<Props>) => {
  return (
    <div
      {...props}
      className={`flex flex-row ${props.className ?? ""}`}
      style={{
        justifyContent: props.mainAxis,
        alignItems: props.crossAxis,
      }}
    >
      {props.children}
    </div>
  );
};

export default OtaRow;
