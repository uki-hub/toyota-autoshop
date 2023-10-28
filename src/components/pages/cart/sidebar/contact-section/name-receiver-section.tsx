import { useState } from "react";
import OtaChip from "../../../../UI-OTA/ota-chip.tsx";
import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../../UI-OTA/ota-row.tsx";
import AppIcons from "../../../../UI/app-icons.tsx";
import classes from "./contact-section.module.css";

const NameReceiverSection = () => {
  const [count, setCount] = useState(1);

  return (
    <OtaCol>
      <OtaRow className="gap-1" crossAxis="center">
        <AppIcons.IDCard className="text-lg text-gray-600" />
        <div className="pb-0.5">Name Receiver</div>
      </OtaRow>
      <OtaCol className="text-sm gap-3">
        <OtaRow className="w-full border-b pb-1 text-gray-500" crossAxis="end">
          Uki
          <OtaChip className="ml-2 !bg-gray-200 !text-gray-400">
            Default
          </OtaChip>
        </OtaRow>

        {Array(count)
          .fill(null)
          .map((_, i) => (
            <OtaRow className="gap-2 " crossAxis="center">
              {i < count - 1 ? (
                <AppIcons.Minus
                  className={classes.button}
                  onClick={() => setCount(count - 1)}
                />
              ) : (
                <AppIcons.Plus
                  className={classes.button}
                  onClick={() => setCount(count + 1)}
                />
              )}
              <input
                className="w-full outline-none border-b pb-1"
                placeholder="name"
              />
            </OtaRow>
          ))}
      </OtaCol>
    </OtaCol>
  );
};

export default NameReceiverSection;
