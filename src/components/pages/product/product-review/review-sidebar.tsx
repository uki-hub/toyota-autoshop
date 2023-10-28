import OtaCounter from "../../../UI-OTA/builder/ota-counter.tsx";
import OtaRepeaterEmpty from "../../../UI-OTA/builder/ota-repeater-empty.tsx";
import OtaCol from "../../../UI-OTA/ota-col.tsx";
import OtaLine from "../../../UI-OTA/ota-line.tsx";
import OtaLoadingBar from "../../../UI-OTA/ota-loading-bar.tsx";
import OtaRow from "../../../UI-OTA/ota-row.tsx";
import AppIcons from "../../../UI/app-icons.tsx";

const ReviewSidebar = () => {
  return (
    <OtaCol className="sticky top-24 w-[30%] h-min rounded border p-2 pb-4 items-center">
      <OtaRow className="gap-1 text-xl items-center">
        <AppIcons.Star />
        <div>
          4.8<span className="ml-0.5 text-sm text-gray-400">(50 Reviews)</span>
        </div>
      </OtaRow>
      <div className="px-2 w-full my-2">
        <OtaLine />
      </div>

      <OtaCol className="gap-1 w-full">
        <OtaRepeaterEmpty
          count={5}
          f={(i) => {
            return (
              <OtaRow
                className="gap-2 p-0.5 px-2 w-full rounded-r-full rounded-l-full cursor-pointer text-sm hover:bg-gray-100"
                crossAxis="center"
              >
                <OtaRow>
                  <OtaCounter count={5 - i}>
                    <AppIcons.Star className="text-primary" />
                  </OtaCounter>
                  <OtaCounter count={i}>
                    <AppIcons.Star className="text-primary-300" />
                  </OtaCounter>
                </OtaRow>
                <OtaLoadingBar value={23} />
                <div className="pb-1 whitespace-nowrap text-gray-400">
                  (10 reviews)
                </div>
              </OtaRow>
            );
          }}
        />
      </OtaCol>
      <div className="w-full px-2.5 mt-3 mb-1">Filter</div>
      <OtaRow className="w-full px-2.5 flex-wrap gap-x-1.5 gap-y-2 text-sm">
        <div className="rounded-lg px-2.5 py-1 border cursor-pointer  font-semibold bg-primary-600 text-onPrimary ">
          Tertinggi
        </div>
        <div className="rounded-lg px-2.5 py-1 border cursor-pointer border-dividerColor hover:bg-primary-50">
          Terendah
        </div>
        <div className="rounded-lg px-2.5 py-1 border cursor-pointer border-dividerColor hover:bg-primary-50">
          Dengan Media
        </div>
        <div className="rounded-lg px-2.5 py-1 border cursor-pointer border-dividerColor hover:bg-primary-50">
          Relevance
        </div>
      </OtaRow>
    </OtaCol>
  );
};

export default ReviewSidebar;
