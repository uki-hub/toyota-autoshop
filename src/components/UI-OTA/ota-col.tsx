import { FlexCrossAxisAlingment, FlexMainAxisAlingment } from "./_types.tsx";

type Props = {
  mainAxis?: FlexMainAxisAlingment;
  crossAxis?: FlexCrossAxisAlingment;
  className?: string;
};

const OtaCol = (
  props: React.PropsWithChildren<Props> = {
    mainAxis: "start",
    crossAxis: "start",
  }
) => {
  const mainAxis = props.mainAxis ? ` justify-${props.mainAxis}` : "";
  const crossAxis = props.crossAxis ? ` items-${props.crossAxis}` : "";

  return (
    <div
      className={`flex flex-col${mainAxis}${crossAxis} ${props.className ?? ""}`}
    >
      {props.children}
    </div>
  );
};

export default OtaCol;
