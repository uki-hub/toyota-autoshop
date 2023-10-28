// import { useParams } from "react-router-dom";
import OtaCol from "../components/UI-OTA/ota-col.tsx";
import OtaRow from "../components/UI-OTA/ota-row.tsx";
import ProductDesc from "../components/pages/product/product-desc.tsx";
import OtaLine from "../components/UI-OTA/ota-line.tsx";
import ProductDetail from "../components/pages/product/product-detail.tsx";
import ProductSidebar from "../components/pages/product/product-sidebar.tsx";
import ProductReview from "../components/pages/product/product-review/product-review.tsx";
import ProductRecommendation from "../components/pages/product/product-recommandation.tsx";

const ProductPage = () => {
  // const { id } = useParams();

  return (
    <OtaCol>
      <OtaRow className="gap-8">
        <OtaCol className="w-[80%]">
          <ProductDesc />
          <OtaLine className="mt-8 mb-4" />
          <ProductDetail />
        </OtaCol>
        <ProductSidebar />
      </OtaRow>
      <OtaLine className="mt-8 mb-4" />
      <ProductReview />
      <OtaLine className="mt-8 mb-4" />
      <ProductRecommendation />
    </OtaCol>
  );
};

export default ProductPage;
