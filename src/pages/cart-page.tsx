import OtaCol from "../components/UI-OTA/ota-col.tsx";
import OtaRow from "../components/UI-OTA/ota-row.tsx";
import AppIcons from "../components/UI/app-icons.tsx";
import CartProducts from "../components/pages/cart/cart-products.tsx";
import CartSidebar from "../components/pages/cart/sidebar/cart-sidebar.tsx";

const CartPage = () => {
  return (
    <OtaCol className="w-full">
      <OtaRow className="gap-6">
        <OtaCol className="w-[60%] gap-4">
          <h1 className="flex flex-row items-center gap-1 text-2xl font-semibold text-primary-600">
            <AppIcons.CartFill className="inline text-primary-700" />
            Cart
          </h1>
          <CartProducts />
        </OtaCol>
        <CartSidebar />
      </OtaRow>
    </OtaCol>
  );
};

export default CartPage;
