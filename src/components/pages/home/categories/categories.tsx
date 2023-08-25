import OtaCounter from "../../../UI-OTA/builder/ota-counter.tsx";
import CategoryCard from "./category-card.tsx";

const Categories = () => {
  return (
    <>
      <h1 id="categories" className="text-2xl font-semibold">
        Categories <span className="font-normal text-gray-400">(8)</span>
      </h1>
      <div className="grid grid-cols-4 gap-x-3 gap-y-4">
        <OtaCounter count={8}>
          <CategoryCard />
        </OtaCounter>
      </div>
      <a className="text-primary-400 hover:text-primary-600" href="categories">
        See more
      </a>
    </>
  );
};

export default Categories;
