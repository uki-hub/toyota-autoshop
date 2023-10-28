import OtaButtonOutlined from "../../../UI-OTA/ota-button-outlined.tsx";
import OtaCol from "../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../UI-OTA/ota-row.tsx";

const AddressSection = () => {
  return (
    <>
      <OtaRow className="gap-2" crossAxis="center">
        <h3 className="text-lg">Address</h3>
        <OtaButtonOutlined className="!px-1 !py-0.5 !text-xs !rounded">
          Change
        </OtaButtonOutlined>
      </OtaRow>
      <OtaCol className="pl-2">
        <h4 className="font-semibold text-gray-600">Rumah</h4>
        <p className="text-sm pb-1 text-gray-500">
          In vitae mi commodo, mattis mi vel, dignissim lorem. Nam volutpat ut
          arcu et tincidunt. Nulla facilisi. Fusce eu tempor dolor, eu malesuada
          ante. Cras eu felis convallis, tincidunt eros eget, molestie ligula.
        </p>
      </OtaCol>
    </>
  );
};

export default AddressSection;
