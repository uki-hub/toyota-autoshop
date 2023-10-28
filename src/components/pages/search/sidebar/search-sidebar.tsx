import OtaCol from "../../../UI-OTA/ota-col.tsx";
import OtaLine from "../../../UI-OTA/ota-line.tsx";
import AdvancedSection from "./advanced-section.tsx";
import CategorySection from "./category-section.tsx";
import OrderbySection from "./orderby-section.tsx";

const SearchSidebar = () => {
  return (
    <OtaCol className="w-[20%] text-gray-700 h-min">
      <OrderbySection />
      <OtaLine className="my-2" />
      <CategorySection />
      <OtaLine className="my-2" />
      <AdvancedSection />
    </OtaCol>
  );
};

export default SearchSidebar;
