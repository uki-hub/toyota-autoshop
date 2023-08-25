import OtaCounter from "../../../UI-OTA/builder/ota-counter.tsx";
import ProductCard from "../../../product/product-card.tsx";

const RecentProducts = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Recent Products</h1>
      <div className="grid grid-cols-5 gap-x-3 gap-y-4">
        <OtaCounter count={8}>
          <ProductCard />
        </OtaCounter>
      </div>
      <a className="text-primary-400 hover:text-primary-600" href="categories">
        See more
      </a>
    </>
  );
};

export default RecentProducts;
