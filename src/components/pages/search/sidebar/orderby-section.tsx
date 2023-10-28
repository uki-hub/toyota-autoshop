import OtaRepeater from "../../../UI-OTA/builder/ota-repeater.tsx";
import OtaCol from "../../../UI-OTA/ota-col.tsx";
import OtaContainerExpander from "../../../UI-OTA/ota-container-expander.tsx";

const OrderbySection = () => {
  return (
    <OtaContainerExpander
      className="text-lg"
      headElement={
        <div>
          Order
          <span className="ml-1.5 text-sm text-gray-400">(Rating)</span>
        </div>
      }
    >
      <OtaCol className="text-base">
        <OtaRepeater
          array={["Relevance", "Rating", "Lowest", "Highest"]}
          builder={(d) => (
            <div className="pl-2 py-1 cursor-pointer hover:font-semibold hover:bg-gray-100">
              {d}
            </div>
          )}
        />
      </OtaCol>
    </OtaContainerExpander>
  );
};

export default OrderbySection;
