import { Link } from "react-router-dom";
import OtaCol from "../UI-OTA/ota-col.tsx";
import OtaRow from "../UI-OTA/ota-row.tsx";
import classes from "./product-card.module.css";
import AppIcons from "../UI/app-icons.tsx";

const ProductCard = () => {
  const r = (Math.random() + 1).toString(36).substring(7);

  return (
    <Link
      to={`/product/${r}`}
      preventScrollReset={false}
      className={classes.card}
    >
      <div className={classes.image}>
        <img
          className="absolute h-full w-full object-contain"
          src="https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/car-versions/14098-2020-toyota-supra-premium"
        />
        <div className={classes.shadow}></div>
        <OtaRow
          className={classes.actions}
          crossAxis="center"
          mainAxis="center"
        >
          <AppIcons.Search />
          <AppIcons.HeartOutline />
          <AppIcons.CartAdd />
        </OtaRow>
      </div>

      <OtaCol className="h-[35%] px-3 pb-2.5 justify-between">
        <h2 className="line-clamp-2">Supra MK5 2023, Premium Red</h2>
        <OtaRow className="gap-2 w-full" crossAxis="center">
          <div className="font-bold">Rp2.950.000.000</div>
          <OtaRow className="ml-auto gap-0.5 text-sm text-gray-400" crossAxis="center">
            <AppIcons.Star />
            4.9
          </OtaRow>
        </OtaRow>
      </OtaCol>
    </Link>
  );
};

export default ProductCard;
