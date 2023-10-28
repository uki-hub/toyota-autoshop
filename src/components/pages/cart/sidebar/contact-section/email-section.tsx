import OtaChip from "../../../../UI-OTA/ota-chip.tsx";
import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../../UI-OTA/ota-row.tsx";
import AppIcons from "../../../../UI/app-icons.tsx";
import classes from "./contact-section.module.css";

const EmailSection = () => {
  return (
    <OtaCol>
      <OtaRow className="gap-1" crossAxis="center">
        <AppIcons.Email className="text-lg text-gray-600" />
        <div className="pb-0.5">Email</div>
      </OtaRow>
      <OtaCol className="text-sm gap-3">
        <OtaRow className="w-full border-b pb-1 text-gray-500" crossAxis="end">
          marzukiaslb@gmail.com
          <OtaChip className="ml-2 !bg-gray-200 !text-gray-400">
            Default
          </OtaChip>
        </OtaRow>
        <OtaRow className="gap-2" crossAxis="center">
          <AppIcons.Minus className={classes.button} />
          <input
            className="w-full outline-none border-b pb-1"
            placeholder="email@domain.com"
          />
        </OtaRow>
        <OtaRow className="gap-2" crossAxis="center">
          <AppIcons.Plus className={classes.button} />
          <input
            className="w-full outline-none border-b pb-1"
            placeholder="email@domain.com"
          />
        </OtaRow>
      </OtaCol>
    </OtaCol>
  );
};

export default EmailSection;
