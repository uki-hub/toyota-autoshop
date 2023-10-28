import { useState } from "react";
import OtaCounter from "./builder/ota-counter.tsx";
import OtaCol from "./ota-col.tsx";
import classes from "./ota-select.module.css";
import { IoIosArrowUp } from "react-icons/io";

const OtaSelectBuilder = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={classes.wrapper + (show ? " !border-gray-400" : "")}
      onClick={() => setShow(!show)}
    >
      <div>Red</div>
      <IoIosArrowUp
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

export default OtaSelectBuilder;
