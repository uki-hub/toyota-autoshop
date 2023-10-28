import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const OtaChip = (props: PropsWithChildren<Props>) => {
  return (
    <div
      className={
        "rounded px-1 py-0.5 text-xs bg-primary text-onPrimary select-none " +
        (props.className ? props.className : "")
      }
    >
      {props.children}
    </div>
  );
};

export default OtaChip;
