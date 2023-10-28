import OtaCounter from "../../../UI-OTA/builder/ota-counter.tsx";
import OtaCol from "../../../UI-OTA/ota-col.tsx";
import OtaRow from "../../../UI-OTA/ota-row.tsx";
import AppIcons from "../../../UI/app-icons.tsx";
import { ImArrowUp } from "react-icons/im";

const Reviews = () => {
  return (
    <OtaCol className="gap-4 w-[70%]">
      <OtaCounter count={3}>
        <OtaCol className="rounded-lg border p-4 shadow">
          <OtaRow className="h-10 gap-2 mb-2">
            <div className="w-10 h-full rounded overflow-hidden">
              <img
                className="w-full h-full object-fill"
                src="https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/img-4435.jpeg?1608735521"
              />
            </div>
            <OtaCol className="h-full" mainAxis="space-between">
              <OtaRow
                className="gap-2 text-lg font-semibold leading-4 mb-1 text-gray-800"
                crossAxis="center"
              >
                Wilton Edmund
                <OtaRow
                  className="gap-0.5 text-sm cursor-pointer text-gray-300 hover:text-gray-500"
                  crossAxis="center"
                >
                  <ImArrowUp />
                  12
                </OtaRow>
              </OtaRow>
              <div className="text-sm text-gray-500">
                Jakarta, Indonesia at 14 Jan 2023
              </div>
            </OtaCol>
            <AppIcons.Info className="text-lg ml-auto cursor-pointer text-gray-300 hover:text-gray-400" />
          </OtaRow>
          <OtaRow className="mb-2" crossAxis="center">
            <OtaCounter count={3}>
              <AppIcons.Star className="text-primary" />
            </OtaCounter>
            <OtaCounter count={2}>
              <AppIcons.Star className="text-primary-300" />
            </OtaCounter>
            <div className="ml-1 text-sm text-gray-400">(Good)</div>
          </OtaRow>
          <OtaRow className="gap-2 mb-1">
            <OtaCounter count={4}>
              <div className="w-16 h-14 rounded overflow-hidden">
                <img
                  className="w-full h-full object-fill"
                  src="https://i1.wp.com/rightfootdown.com/wp-content/uploads/2020/12/PXL_20201210_183956225-scaled.jpg?ssl=1"
                />
              </div>
            </OtaCounter>
            <div className="relative w-16 h-14 rounded overflow-hidden cursor-pointer text-white hover:text-gray-200">
              <img
                className="w-full h-full object-fill"
                src="https://i1.wp.com/rightfootdown.com/wp-content/uploads/2020/12/PXL_20201210_183956225-scaled.jpg?ssl=1"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 " />
              <OtaCol
                className="absolute top-0 left-0 w-full h-full text-2xl"
                mainAxis="center"
                crossAxis="center"
              >
                +2
              </OtaCol>
            </div>
          </OtaRow>
          <p className="text-sm text-gray-800">
            In dignissim ut mauris egestas dictum. Duis rhoncus elit ac
            porttitor euismod. Mauris in auctor diam, eu mattis massa. Maecenas
            in felis velit. Cras at suscipit tortor, eget euismod dui. Sed
            lacinia lacus felis, id vulputate urna aliquet eu. Etiam bibendum
            nisl a lectus tincidunt ullamcorper. In ipsum dolor, commodo sed
            mattis nec, porta quis justo. Maecenas ultricies convallis ante non
            fermentum.&nbsp;
            <label className="font-semibold text-sm cursor-pointer text-primary-500 hover:text-primary-700">
              Load more...
            </label>
          </p>
        </OtaCol>
      </OtaCounter>
    </OtaCol>
  );
};

export default Reviews;
