import OtaCol from "../../../UI-OTA/ota-col.tsx";
import OtaContainerExpander from "../../../UI-OTA/ota-container-expander.tsx";
import OtaInput from "../../../UI-OTA/ota-input.tsx";
import OtaRow from "../../../UI-OTA/ota-row.tsx";

const AdvancedSection = () => {
  return (
    <OtaContainerExpander headElement={<div>Advanced</div>}>
      <OtaCol className="mt-2 pl-2 gap-3 h-min text-sm">
        <div>
          Price Range
          <OtaCol className="pl-2 gap-2 mt-1">
            <OtaRow className="mt-1" crossAxis="center">
              <div className="w-12 pb-1">From</div>
              <OtaInput placeholder="Rp1.000.000.000" />
            </OtaRow>
            <OtaRow crossAxis="center">
              <div className="w-12 pb-1">To</div>
              <OtaInput placeholder="Rp2.950.000.000" />
            </OtaRow>
          </OtaCol>
        </div>
      </OtaCol>
    </OtaContainerExpander>
  );
};

export default AdvancedSection;
