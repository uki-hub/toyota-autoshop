import {
  AriaAttributes,
  DOMAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    AriaAttributes,
    DOMAttributes<HTMLDivElement> {
  center?: boolean | undefined;
}

const OtaCircle = (props: PropsWithChildren<Props>) => {
  let circleClass = "rounded-full overflow-hidden";

  if (props.center ?? true)
    circleClass += " flex flex-row items-center justify-center";

  if (props.className) circleClass += " " + props.className;

  return (
    <div {...props} className={circleClass}>
      {props.children}
    </div>
  );
};

export default OtaCircle;
