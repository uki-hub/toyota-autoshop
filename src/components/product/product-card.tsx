import { Link } from "react-router-dom";
import OtaCol from "../UI-OTA/ota-col.tsx";
import OtaRow from "../UI-OTA/ota-row.tsx";
import SvgIcons from "../UI/svg-icons.tsx";
import classes from './product-card.module.css';

const ProductCard = () => {
  return (
    <Link to="product/abc123" preventScrollReset={false} className={classes.card}>
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
          <SvgIcons.Search fillColor="white" size={{ height: 36, width: 36 }} />
          <SvgIcons.Heart fillColor="white" size={{ height: 36, width: 36 }} />
          <SvgIcons.Cart fillColor="white" size={{ height: 36, width: 36 }} />
        </OtaRow>
      </div>

      <OtaCol className="h-[35%] px-2.5 justify-between">
        <h2 className="line-clamp-2">Supra MK5 2023, Premium Red</h2>
        <OtaRow className="gap-2" crossAxis="center">
          <label className="font-bold">Rp2.950.000.000</label>
          <OtaRow className="gap-0.5 text-sm text-gray-400" crossAxis="center">
            {"("}
            <SvgIcons.Star
              size={{ height: 14, width: 14 }}
              fillColor="#b3b3b3"
            />
            <span>4.9</span>
            {")"}
          </OtaRow>
        </OtaRow>
      </OtaCol>
    </Link>
  );
};

export default ProductCard;
