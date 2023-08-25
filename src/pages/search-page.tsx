import OtaCol from "../components/UI-OTA/ota-col.tsx";
import OtaRow from "../components/UI-OTA/ota-row.tsx";

const SearchPage = () => {
  return (
    <OtaRow className="gap-4">
      <OtaCol className="w-[25%]">
        <div className="p-2 w-full rounded h-10 border border-secondary "></div>
      </OtaCol>
      <OtaCol className="w-[75%] bg-secondary">{}</OtaCol>
    </OtaRow>
  );
};

export default SearchPage;
