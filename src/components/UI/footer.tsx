import OtaCounter from "../UI-OTA/builder/ota-counter.tsx";
import OtaCol from "../UI-OTA/ota-col.tsx";
import OtaLine from "../UI-OTA/ota-line.tsx";
import OtaRow from "../UI-OTA/ota-row.tsx";
import AppIcons from "./app-icons.tsx";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className="w-full h-[400px] py-10 bg-primaryVariant  text-onPrimary z-[0]">
      <OtaCol className="w-[80%] h-full mx-auto">
        <h1 className="font-bold text-4xl text-gray-300">Toyota</h1>
        <div className={classes["grid-menus"]}>
          <OtaCol>
            <p className="w-[80%] text-sm text-primary-200 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              convallis libero auctor, convallis urna quis, sollicitudin diam.
              Morbi eu arcu nulla. Suspendisse ullamcorper elit nec justo
              scelerisque, sed venenatis ipsum luctus.
            </p>
          </OtaCol>
          <OtaCol>
            <h3>About</h3>
            <ul>
              <a href="/main.html">About us</a>
              <a href="">Career</a>
              <a href="">Contact</a>
            </ul>
          </OtaCol>
          <OtaCol>
            <h3>Services</h3>
            <ul>
              <a href="">Dealer</a>
              <a href="">Repair</a>
              <a href="">Upgrade</a>
              <a href="">Customization</a>
            </ul>
          </OtaCol>
          <OtaCol>
            <h3>Location</h3>
            <OtaCol className="gap-2">
              <OtaCounter count={2}>
                <OtaCol>
                  <p className="font-bold text-primary-200">
                    Indonesia, Jakarta
                  </p>
                  <p className="text-xs text-primary-400">
                    Jl. Intan RSPP Utara No. 5A Jakarta Selatan, DKI Jakarta
                    12430
                  </p>
                </OtaCol>
              </OtaCounter>
            </OtaCol>
          </OtaCol>
        </div>
        <OtaLine className="!bg-primary-700 mt-auto mb-2" />
        <OtaRow className="gap-4 text-xl  ">
          <a href="facebook.com">
            <AppIcons.Facebook />
          </a>
          <a href="instagra.com">
            <AppIcons.Instagram />
          </a>
          <a href="linkedin.com">
            <AppIcons.LinkedIn />
          </a>
          <a href="youtube.com">
            <AppIcons.Youtube />
          </a>
          <div className="ml-auto text-sm">
            ©Copyright 2023 Toyota Inc. All Rights Reserved.
          </div>
        </OtaRow>
      </OtaCol>
    </footer>
  );
};

export default Footer;
