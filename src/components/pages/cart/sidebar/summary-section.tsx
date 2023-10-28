import OtaButtonOutlined from "../../../UI-OTA/ota-button-outlined.tsx";
import OtaCol from "../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../UI-OTA/ota-row.tsx";

const SummarySection = () => {
  return (
    <OtaCol className="gap-2">
      <OtaRow
        className="text-sm text-gray-500"
        mainAxis="space-between"
        crossAxis="end"
      >
        <div className="font-semibold shrink-0">Qty Total</div>
        <div className="w-full border-b-[1px] border-dashed mb-1 mx-1"></div>
        <div className="text-lg font-semibold text-black">x6</div>
      </OtaRow>
      <OtaRow
        className="text-sm text-gray-500"
        mainAxis="space-between"
        crossAxis="end"
      >
        <div className="font-semibold shrink-0">Total</div>
        <div className="w-full border-b-[1px] border-dashed mb-1 mx-1"></div>
        <div className="text-xl font-semibold text-black">Rp17.700.000.000</div>
      </OtaRow>
    </OtaCol>
  );
};

export default SummarySection;
