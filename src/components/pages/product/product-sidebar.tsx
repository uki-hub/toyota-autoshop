import OtaButtonOutlined from "../../UI-OTA/ota-button-outlined.tsx";
import OtaButton from "../../UI-OTA/ota-button.tsx";
import OtaCol from "../../UI-OTA/ota-col.tsx";
import OtaInputIcon from "../../UI-OTA/ota-input-icon.tsx";
import OtaRow from "../../UI-OTA/ota-row.tsx";
import OtaSelect from "../../UI-OTA/ota-select.tsx";
import AppIcons from "../../UI/app-icons.tsx";

const ProductSidebar = () => {
  return (
    <OtaCol className="gap-2 sticky top-24 w-[20%] h-min p-4 pt-3 rounded border border-dividerColor">
      <h3 className="font-semibold">Shooping Bar</h3>
      <OtaCol className="gap-2.5">
        <OtaCol className="gap-1">
          <label className="text-sm text-gray-500">Warna :</label>
          <OtaSelect />
        </OtaCol>
        <OtaCol className="gap-1 mb-3">
          <label className="text-sm text-gray-500">Jumlah :</label>
          <OtaInputIcon
            placeholder="Qty"
            rightIconElement={
              <OtaRow className="gap-1" crossAxis="center">
                <OtaButton disabled className="!rounded !p-1 min-w-[1.5rem]">
                  <AppIcons.Minus className="mx-auto my-auto" />
                </OtaButton>
                <OtaButton className="!rounded !p-1 min-w-[1.5rem]">
                  <AppIcons.Plus className="mx-auto my-auto" />
                </OtaButton>
              </OtaRow>
            }
          />
        </OtaCol>
      </OtaCol>
      <OtaRow className="justify-between items-end border-b pb-1 mb-1 border-gray-200">
        <div className="pb-0.5 text-sm text-gray-500">Total</div>
        <div className="text-lg font-bold text-gray-800">
          Rp2.950.000.000
        </div>
      </OtaRow>

      <OtaButton>Buy</OtaButton>
      <OtaButtonOutlined>+ Add To Cart</OtaButtonOutlined>
    </OtaCol>
  );
};

export default ProductSidebar;
