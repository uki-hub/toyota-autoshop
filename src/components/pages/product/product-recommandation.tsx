import OtaCounter from "../../UI-OTA/builder/ota-counter.tsx";
import OtaCol from "../../UI-OTA/ota-col.tsx";
import ProductCard from "../../product/product-card.tsx";

const ProductRecommendation = () => {
  return (
    <OtaCol className="w-full">
      <h2 className="text-2xl font-semibold mb-2">Recommendation</h2>
      <div className="grid grid-cols-5 gap-x-3 gap-y-4">
        <OtaCounter count={10}>
            <ProductCard />
        </OtaCounter>
      </div>
    </OtaCol>
  );
};

export default ProductRecommendation;
