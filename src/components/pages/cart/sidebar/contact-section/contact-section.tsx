import OtaChip from "../../../../UI-OTA/ota-chip.tsx";
import OtaCol from "../../../../UI-OTA/ota-col.tsx";
import OtaContainerExpander from "../../../../UI-OTA/ota-container-expander.tsx";
import OtaRow from "../../../../UI-OTA/ota-row.tsx";
import AppIcons from "../../../../UI/app-icons.tsx";
import classes from "./contact-section.module.css";
import EmailSection from "./email-section.tsx";
import NameReceiverSection from "./name-receiver-section.tsx";
import PhoneSection from "./phone-section.tsx";

const ContactSection = () => {
  return (
    <OtaContainerExpander headElement={<h3 className="text-lg">Contact</h3>}>
      <OtaCol className="pl-2 gap-4 mb-2">
        <NameReceiverSection />
        <PhoneSection />
        <EmailSection />
      </OtaCol>
    </OtaContainerExpander>
  );
};

export default ContactSection;
