import OtaCounter from "../../UI-OTA/builder/ota-counter.tsx";
import OtaCol from "../../UI-OTA/ota-col.tsx";
import OtaLine from "../../UI-OTA/ota-line.tsx";
import OtaRow from "../../UI-OTA/ota-row.tsx";
import classes from "./product-detail.module.css";

const ProductDetail = () => {
  return (
    <OtaCol className="w-full">
      <label className="text-lg font-semibold mb-2">Detail</label>
      <OtaCol className="rounded border border-b-0 border-gray-200">
        <OtaCounter count={4}>
          <OtaRow className="w-full px-3 py-2.5 bg-gray-100">
            <label className="w-[20%] text-gray-800">Kondisi</label>
            <label className="w-[1%]">:</label>
            <label className="w-[79%] text-gray-500">Baru</label>
          </OtaRow>
          <OtaLine className="!bg-gray-200" />
          <OtaRow className="w-full px-3 py-2.5 bg-gray-50 ">
            <label className="w-[20%] text-gray-800">Berat</label>
            <label className="w-[1%]">:</label>
            <label className="w-[79%] text-gray-500">1092 Kg</label>
          </OtaRow>
          <OtaLine className="!bg-gray-200" />
        </OtaCounter>
      </OtaCol>
    </OtaCol>
  );
};

export default ProductDetail;
