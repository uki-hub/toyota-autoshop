import { PropsWithChildren, ReactNode, useState } from "react";
import OtaRow from "./ota-row.tsx";
import { IoIosArrowUp } from "react-icons/io";
import classes from "./ota-expander-container.module.css";

type Props = {
  headElement: ReactNode;
  IconElement?: ReactNode;
  className?: string;
};

const OtaContainerExpander = (props: PropsWithChildren<Props>) => {
  const [show, setShow] = useState(false);

  return (
    <div className={["w-full", props.className ?? ""].join(" ")}>
      <OtaRow
        className="w-full cursor-pointer"
        mainAxis="space-between"
        crossAxis="center"
        onClick={() => setShow(!show)}
      >
        {props.headElement}
        <div
          className={[classes.icon, show ? classes["icon-active"] : ""].join(
            " "
          )}
        >
          {props.IconElement ?? <IoIosArrowUp />}
        </div>
      </OtaRow>
      <div
        className={[
          classes.container,
          show ? classes["container-active"] : "",
        ].join(" ")}
        style={{ transitionDuration: !show ? "250ms" : "1000ms" }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default OtaContainerExpander;
