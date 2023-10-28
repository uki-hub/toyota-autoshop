import OtaCounter from "../../UI-OTA/builder/ota-counter.tsx";
import OtaCol from "../../UI-OTA/ota-col.tsx";
import ProductRow from "./product-row.tsx";

const CartProducts = () => {
  return (
    <OtaCol className="gap-4">
      <OtaCounter count={3}>
        <ProductRow />
      </OtaCounter>
    </OtaCol>
  );
};

export default CartProducts;
