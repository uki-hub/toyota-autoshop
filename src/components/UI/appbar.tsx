import OtaInputIcon from "../UI-OTA/ota-input-icon.tsx";
import OtaLine from "../UI-OTA/ota-line.tsx";
import OtaRow from "../UI-OTA/ota-row.tsx";
import SvgIcons from "./svg-icons.tsx";
import classes from "./appbar.module.css";
import OtaCol from "../UI-OTA/ota-col.tsx";
import { Link } from "react-router-dom";

const Appbar = () => {
  const modalShow = () => {
    document.body.style.overflowY = "hidden";

    document.getElementById("rootBackdrop")!.style.display = "block";
    document.getElementById("modal")!.classList.add(classes["modal-active"]);
  };

  const modalHide = () => {
    document.body.style.overflowY = "auto";

    document.getElementById("rootBackdrop")!.style.display = "none";
    document.getElementById("modal")!.classList.remove(classes["modal-active"]);
  };

  return (
    <OtaCol className={classes.appbar}>
      <ul className={classes.bar}>
        <div className={classes.wrapper}>
          <Link className={classes.logo} to="/">
            Toyota
            <span>shop</span>
          </Link>
          <OtaRow className={classes.searchbar} crossAxis="center">
            <label
              className={classes.category}
              onMouseMove={modalShow}
              onMouseLeave={modalHide}
            >
              Kategori
            </label>
            <OtaLine
              className="!bg-primary-600 !h-[35%] mx-2 mr-4"
              orientation="vertical"
              width={0.8}
            />
            <OtaInputIcon
              boxClassName="!rounded-lg"
              placeholder="Cari barang..."
              leftIcon={<SvgIcons.Search />}
            />
          </OtaRow>

          <ul className={classes.actions}>
            <a>Cart</a>
            <a>Notifications</a>
            <a>Account</a>
          </ul>
        </div>
      </ul>
      <div
        id="modal"
        className={classes.modal}
        onMouseMove={modalShow}
        onMouseLeave={modalHide}
      ></div>
    </OtaCol>
  );
};

export default Appbar;
