import OtaInputIcon from "../UI-OTA/ota-input-icon.tsx";
import OtaLine from "../UI-OTA/ota-line.tsx";
import OtaRow from "../UI-OTA/ota-row.tsx";
import classes from "./appbar.module.css";
import OtaCol from "../UI-OTA/ota-col.tsx";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import AppIcons from "./app-icons.tsx";
import { useRef } from "react";

const Appbar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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
            <div
              className={classes.category}
              onMouseMove={modalShow}
              onMouseLeave={modalHide}
            >
              Kategori
            </div>
            <OtaLine
              className="!bg-primary-600 !h-[35%] mx-2 mr-4"
              orientation="vertical"
              width={0.8}
            />
            <OtaInputIcon
              inputRef={searchRef}
              placeholder="Cari barang..."
              leftIconElement={<AppIcons.Search />}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  navigate({
                    pathname: "/search",
                    search: createSearchParams({
                      q: searchRef.current?.value ?? "",
                    }).toString(),
                  });

                  searchRef.current?.blur();
                }
              }}
            />
          </OtaRow>

          <ul className={classes.actions}>
            <Link to={"/cart"} className={classes["cart-wrapper"]}>
              <AppIcons.Cart className={classes.cart} />
              <AppIcons.CartFill className={classes["cart-active"]} />
              <div className={classes.badge}>99</div>
            </Link>
            <Link to={"/notification"} className={classes["bell-wrapper"]}>
              <AppIcons.Notification className={classes.bell} />
              <AppIcons.NotificationFill className={classes["bell-active"]} />
              <div className={classes.badge}>99</div>
            </Link>
            <OtaLine
              className="!h-[50%] !bg-primary-700"
              orientation="vertical"
            />
            <Link to={"/me"}>
              <OtaRow className="gap-2" crossAxis="center">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                  <img
                    className="w-full h-full object-fill"
                    src="https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/img-4435.jpeg?1608735521"
                  />
                </div>
                <div className="text-base">Wilton Edmund</div>
              </OtaRow>
            </Link>
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
