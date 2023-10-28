import OtaChip from "../../../../UI-OTA/ota-chip.tsx";
import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../../UI-OTA/ota-row.tsx";
import AppIcons from "../../../../UI/app-icons.tsx";
import classes from "./contact-section.module.css";

const PhoneSection = () => {
  return (
    <OtaCol>
      <OtaRow className="gap-1 mb-0.5" crossAxis="center">
        <AppIcons.Phone className="text-base text-gray-600" />
        <div className="pb-0.5">Phone</div>
      </OtaRow>
      <OtaCol className="text-sm gap-3">
        <OtaRow className="w-full border-b pb-1 text-gray-500" crossAxis="end">
          +62 895 1999 2111
          <OtaChip className="ml-2 !bg-gray-200 !text-gray-400">
            Default
          </OtaChip>
        </OtaRow>
        <OtaRow className="gap-2" crossAxis="center">
          <AppIcons.Minus className={classes.button} />
          <input
            className="w-full outline-none border-b pb-1"
            placeholder="+62 123 456 789"
          />
        </OtaRow>
        <OtaRow className="gap-2" crossAxis="center">
          <AppIcons.Plus className={classes.button} />
          <input
            className="w-full outline-none border-b pb-1"
            placeholder="+62 123 456 789"
          />
        </OtaRow>
      </OtaCol>
    </OtaCol>
  );
};

export default PhoneSection;
