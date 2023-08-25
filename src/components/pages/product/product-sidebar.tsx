import OtaButtonOutlined from "../../UI-OTA/ota-button-outlined.tsx";
import OtaButton from "../../UI-OTA/ota-button.tsx";
import OtaCol from "../../UI-OTA/ota-col.tsx";
import OtaInputIcon from "../../UI-OTA/ota-input-icon.tsx";
import OtaRow from "../../UI-OTA/ota-row.tsx";
import OtaSelect from "../../UI-OTA/ota-select.tsx";
import SvgIcons from "../../UI/svg-icons.tsx";

const ProductSidebar = () => {
  return (
    <OtaCol className="gap-2 sticky top-24 w-[20%] h-min">
      <OtaCol className="gap-2 p-4 rounded border border-dividerColor">
        <label className="font-semibold">Shooping Bar</label>
        <OtaCol className="gap-2.5">
          <OtaCol className="gap-1">
            <label className="text-sm text-gray-500">Warna :</label>
            <OtaSelect />
          </OtaCol>
          <OtaCol className="gap-1 mb-3">
            <label className="text-sm text-gray-500">Jumlah :</label>
            <OtaInputIcon
              placeholder="Qty"
              rightIcon={
                <OtaRow className="gap-1" crossAxis="center">
                  <OtaButton disabled className="!rounded !p-1 min-w-[2rem]">
                    -
                  </OtaButton>
                  <OtaButton className="!rounded !p-1 min-w-[2rem]">+</OtaButton>
                </OtaRow>
              }
            />
          </OtaCol>
        </OtaCol>
        <OtaRow className="justify-between items-end border-b pb-1 mb-1 border-gray-200">
          <label className="pb-0.5 text-sm text-gray-500">Total</label>
          <label className="text-lg font-bold text-gray-800">
            Rp2.950.000.000
          </label>
        </OtaRow>

        <OtaButton>Buy</OtaButton>
        <OtaButtonOutlined>+ Add To Cart</OtaButtonOutlined>
      </OtaCol>
      {/* <OtaRow className="gap-2 justify-center stroke-gray-400">
        <SvgIcons.Heart />
        <SvgIcons.QuestionMark />
        <SvgIcons.Share />
      </OtaRow> */}
    </OtaCol>
  );
};

export default ProductSidebar;
