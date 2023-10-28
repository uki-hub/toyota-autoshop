import { useSearchParams } from "react-router-dom";
import OtaCol from "../components/UI-OTA/ota-col.tsx";
import OtaRow from "../components/UI-OTA/ota-row.tsx";
import OtaCounter from "../components/UI-OTA/builder/ota-counter.tsx";
import ProductCard from "../components/product/product-card.tsx";
import SearchSidebar from "../components/pages/search/sidebar/search-sidebar.tsx";

const SearchPage = () => {
  const [params] = useSearchParams();

  return (
    <OtaRow className="gap-8">
      <SearchSidebar />
      <OtaCol className="w-[80%] gap-5">
        <OtaRow className="text-xs text-gray-400">
          Menampilkan 10 dari 10300 produk
        </OtaRow>
        <div className="grid grid-cols-4 gap-x-3 gap-y-4">
          <OtaCounter count={10}>
            <ProductCard />
          </OtaCounter>
        </div>
      </OtaCol>
    </OtaRow>
  );
};

export default SearchPage;
