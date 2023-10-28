import classes from "./category-card.module.css";

const CategoryCard = () => {
  return (
    <div className={classes.card}>
      <img
        className="absolute w-full h-full object-contain"
        loading="lazy"
        src="https://cdn.rotorint.com/GR_Supra/2022_07_Jul/e/hero/png/lo/907x510/SPN_SUP_011D14LB404X2700B0_compcrop_001.png"
      />
      <div className={classes.shadow}></div>
      <div className={classes.title}>Racing Car</div>
    </div>
  );
};

export default CategoryCard;
