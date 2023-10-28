import { Link } from "react-router-dom";
import OtaButtonOutlined from "../../../UI-OTA/ota-button-outlined.tsx";
import OtaButton from "../../../UI-OTA/ota-button.tsx";
import OtaCol from "../../../UI-OTA/ota-col.tsx";
import OtaLine from "../../../UI-OTA/ota-line.tsx";
import AddressSection from "./address-section.tsx";
import ContactSection from "./contact-section/contact-section.tsx";
import SummarySection from "./summary-section.tsx";

const CartSidebar = () => {
  return (
    <OtaCol className="w-[40%] h-min px-4 pt-3 pb-4 rounded border border-secondary">
      <div className="text-lg mb-2">Summary</div>
      <ContactSection />
      <OtaLine className="my-2" />
      <AddressSection />
      <OtaLine className="my-2 mb-4" />
      <SummarySection />
      <Link to="/checkout" className="w-full">
        <OtaButton className="mt-4 w-full !py-3">Checkout</OtaButton>
      </Link>
    </OtaCol>
  );
};

export default CartSidebar;
