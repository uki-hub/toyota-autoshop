import {
  FlexCrossAxisAlingment,
  FlexMainAxisAlingment,
} from "./_types.tsx";

type Props = {
  mainAxis?: FlexMainAxisAlingment;
  crossAxis?: FlexCrossAxisAlingment;
  className?: string;
  onClick?: () => void;
};

const OtaRow = (
  props: React.PropsWithChildren<Props> = {
    mainAxis: "start",
    crossAxis: "start",
  }
) => {
  const mainAxis = props.mainAxis ? ` justify-${props.mainAxis}` : "";
  const crossAxis = props.crossAxis ? ` items-${props.crossAxis}` : "";

  return (
    <div
      className={`flex flex-row${mainAxis}${crossAxis} ${props.className ?? ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default OtaRow;
