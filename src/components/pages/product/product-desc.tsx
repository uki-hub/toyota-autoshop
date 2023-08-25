import OtaCounter from "../../UI-OTA/builder/ota-counter.tsx";
import OtaRepeater from "../../UI-OTA/builder/ota-repeater.tsx";
import OtaCol from "../../UI-OTA/ota-col.tsx";
import OtaLine from "../../UI-OTA/ota-line.tsx";
import OtaRow from "../../UI-OTA/ota-row.tsx";
import SvgIcons from "../../UI/svg-icons.tsx";

const ProductDesc = () => {
  return (
    <OtaRow className=" gap-4">
      <OtaCol className="gap-[15px] sticky top-24 w-[450px] h-min shrink-0">
        <div className="h-[350px] w-full rounded-md overflow-hidden">
          <img
            className="w-full h-full object-fill"
            src="https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/car-versions/14098-2020-toyota-supra-premium"
          />
        </div>

        <div className="h-[75px] grid grid-cols-4 gap-2 w-full">
          <OtaCounter count={4}>
            <div className="h-full w-full rounded overflow-hidden">
              <img
                className="h-full w-full object-fill"
                src="https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/car-versions/14098-2020-toyota-supra-premium"
              />
            </div>
          </OtaCounter>
        </div>
      </OtaCol>
      <OtaCol className="gap-1 text-sm w-full">
        <OtaRow className="justify-between items-center">
          <h1 className="text-2xl font-semibold">Supra MK5 Premium Red</h1>
          <div>
            <SvgIcons.Info
              fillColor="#d1d1d1"
              className="cursor-pointer hover:fill-gray-50"
            />
          </div>
        </OtaRow>

        <OtaRow className="gap-4">
          <label>
            Terjual&nbsp;<span className="text-gray-500">14</span>
          </label>
          <label>
            Rating&nbsp;<span className="text-gray-500">4.8</span>&nbsp;
            <span className="text-gray-400">(10 Ulasan)</span>
          </label>
        </OtaRow>
        <OtaRow className="justify-between items-center mt-3">
          <h2 className="font-bold text-3xl">Rp2.950.000.000</h2>
          <OtaRow className="gap-2 justify-center stroke-gray-400">
            <SvgIcons.Heart />
            <SvgIcons.QuestionMark />
            <SvgIcons.Share />
          </OtaRow>
        </OtaRow>
        <OtaRow className="gap-2 mt-3 mb-2">
          <OtaRepeater
            array={["Red", "Black", "Grey", "Blue"]}
            f={(d, i) => {
              const disabledClass =
                i == 3
                  ? " bg-gray-100 !text-gray-400 border-gray-100 cursor-default hover:bg-gray-100"
                  : "";

              return (
                <div
                  className={`min-w-[3rem] px-2 py-1 border rounded-lg text-center font-semibold cursor-pointer text-gray-800 border-gray-200 hover:bg-gray-50 ${disabledClass}`}
                >
                  {d}
                </div>
              );
            }}
          />
        </OtaRow>
        <OtaLine className="mb-3" />
        <p className="line-clamp-[] ">
          Vestibulum rhoncus varius mattis. Donec a augue tristique, pulvinar
          nibh vel, sagittis nulla. Sed nec nulla at tellus hendrerit volutpat.
          Ut tristique ullamcorper neque, mattis hendrerit nisi dapibus
          vestibulum. In non mattis massa. Sed eget rutrum odio, quis volutpat
          mauris. Donec eu magna commodo, malesuada dui quis, tincidunt elit.
          Duis sapien nunc, elementum in egestas nec, vehicula a magna.
          <br />
          <br />
          Vestibulum rhoncus varius mattis. Donec a augue tristique, pulvinar
          nibh vel, sagittis nulla. Sed nec nulla at tellus hendrerit volutpat.
          Ut tristique ullamcorper neque, mattis hendrerit nisi dapibus.
          Vestibulum rhoncus varius mattis. Donec a augue tristique, pulvinar
          nibh vel, sagittis nulla. Sed nec nulla at tellus hendrerit volutpat.
          mauris. Donec eu magna commodo, malesuada dui quis, tincidunt elit.
          Duis sapien nunc, elementum in egestas nec, vehicula a magna.
          <label className="font-semibold cursor-pointer text-primary-500 hover:text-primary-700">
            &nbsp;Load more...
          </label>
        </p>
      </OtaCol>
    </OtaRow>
  );
};

export default ProductDesc;
