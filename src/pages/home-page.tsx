import OtaCol from "../components/UI-OTA/ota-col.tsx";
import OtaLine from "../components/UI-OTA/ota-line.tsx";
import Categories from "../components/pages/home/categories/categories.tsx";
import RecentProducts from "../components/pages/home/recent-products/recent-products.tsx";
import WelcomeMessage from "../components/pages/home/welcome-message.tsx";

const HomePage = () => {
  return (
    <OtaCol className="gap-4 over">
      <WelcomeMessage />
      <OtaLine width={0.8} />
      <Categories />
      <OtaLine width={0.8} />
      <RecentProducts />
      <OtaLine width={0.8} />
    </OtaCol>
  );
};

export default HomePage;
