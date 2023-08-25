import { useState } from "react";
import SvgIcons from "../UI/svg-icons.tsx";
import OtaCounter from "./builder/ota-counter.tsx";
import OtaCol from "./ota-col.tsx";
import classes from "./ota-select.module.css";

const OtaSelect = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={classes.wrapper + (show ? " !border-gray-400" : "")} onClick={() => setShow(!show)}>
      <label>Red</label>
      <SvgIcons.Arrow
        className={`${classes.arrow} ${show ? classes["arrow-active"] : ""}`}
      />
      <OtaCol
        className={`${classes.options} ${
          show ? classes["options-active"] : ""
        }`}
      >
        <OtaCounter count={8}>
          <div className="p-2 border-b hover:bg-gray-100">Red</div>
        </OtaCounter>
      </OtaCol>
    </div>
  );
};

export default OtaSelect;
