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

const OtaCol = (props: React.PropsWithChildren<Props>) => {
  return (
    <div
      {...props}
      className={`flex flex-col ${props.className ?? ""}`}
      style={{
        justifyContent: props.mainAxis,
        alignItems: props.crossAxis,
      }}
    >
      {props.children}
    </div>
  );
};

export default OtaCol;
