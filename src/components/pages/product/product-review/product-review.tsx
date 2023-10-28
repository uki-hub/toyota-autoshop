import OtaCol from "../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../UI-OTA/ota-row.tsx";
import ReviewSidebar from "./review-sidebar.tsx";
import Reviews from "./reviews.tsx";

const ProductReview = () => {
  return (
    <OtaCol className="w-full">
      <h2 className="text-2xl font-semibold mb-2">Review</h2>
      <OtaRow className="w-full gap-6">
        <ReviewSidebar />
        <Reviews />
      </OtaRow>
    </OtaCol>
  );
};

export default ProductReview;
