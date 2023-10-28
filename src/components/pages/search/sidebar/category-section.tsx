import OtaRepeater from "../../../UI-OTA/builder/ota-repeater.tsx";
import OtaCol from "../../../UI-OTA/ota-col.tsx";
import OtaContainerExpander from "../../../UI-OTA/ota-container-expander.tsx";

const CategorySection = () => {
  return (
    <OtaContainerExpander
      className="text-lg"
      headElement={
        <div>
          Brand
          <span className="ml-1.5 text-sm text-gray-400">(Toyota - Supra)</span>
        </div>
      }
    >
      <OtaCol className="text-base">
        <OtaRepeater
          array={["Toyota", "Honda", "Audi", "Porsche"]}
          builder={(d) => (
            <OtaContainerExpander
              className="pl-2"
              headElement={
                <div className="w-full py-1 cursor-pointer hover:font-semibold">
                  {d}
                </div>
              }
            >
              <OtaRepeater
                array={["Supra MK5", "Honda CRV", "Audi R8", "Porsche Rx7"]}
                builder={(d) => (
                  <div className="pl-4 py-1 cursor-pointer hover:font-semibold hover:bg-gray-100">
                    {d}
                  </div>
                )}
              />
            </OtaContainerExpander>
          )}
        />
      </OtaCol>
    </OtaContainerExpander>
  );
};

export default CategorySection;
