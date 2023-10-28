import { useReducer, useRef, useState } from "react";
import OtaButton from "../../UI-OTA/ota-button.tsx";
import OtaCol from "../../UI-OTA/ota-col.tsx";
import OtaRow from "../../UI-OTA/ota-row.tsx";
import OtaTextarea from "../../UI-OTA/ota-textarea.tsx";
import AppIcons from "../../UI/app-icons.tsx";
import classes from "./product-row.module.css";
import useAutosizeTextArea from "../../UI-OTA/hooks/useAutosizeTextarea.tsx";
import { RiFilePaperFill } from "react-icons/ri";
import OtaLine from "../../UI-OTA/ota-line.tsx";
import OtaChip from "../../UI-OTA/ota-chip.tsx";

const ProductRow = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [showSR, setShowSR] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, textAreaRef.current?.value ?? "");

  return (
    <OtaCol className={classes.card}>
      <OtaRow className="gap-3">
        <div className="rounded overflow-hidden w-28 h-24">
          <img
            className="w-full h-full object-contain"
            src="https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/car-versions/14098-2020-toyota-supra-premium"
          />
        </div>
        <OtaCol className="gap-1">
          <div className="text-lg">Supra MK5 Premium Red</div>
          <OtaRow className="gap-1">
            <OtaChip className="!text-sm !bg-red-600 !text-white">Red</OtaChip>
            <OtaChip className="!text-sm !bg-blue-800 !text-blue-100">
              Turbo Charged
            </OtaChip>
            <OtaChip className="!text-sm !bg-slate-700 !text-slate-200">
              Ultimate Edition
            </OtaChip>
          </OtaRow>
          <div className="mt-auto text-end text-2xl font-semibold">
            Rp5.900.000.000
            <span className="ml-1 text-sm font-normal text-gray-400">
              (Rp2.950.000.000 × 2 qty)
            </span>
          </div>
        </OtaCol>
      </OtaRow>
      <OtaRow className="gap-1 mt-2 text-sm text-gray-500" crossAxis="end">
        {showSR ? (
          <OtaCol className="gap-1 w-[70%]">
            <OtaRow crossAxis="center">
              <AppIcons.SpecialRequest className="inline mr-1" />
              Special request
            </OtaRow>
            <OtaTextarea
              textareaRef={textAreaRef}
              className="text-gray-600"
              maxLength={500}
              placeholder="Your special request..."
              onChange={forceUpdate}
            />
          </OtaCol>
        ) : (
          <OtaRow
            className="gap-1 cursor-pointer text-gray-500 hover:text-gray-700"
            crossAxis="center"
            onClick={() => setShowSR(!showSR)}
          >
            <AppIcons.Pen />
            Add special request
          </OtaRow>
        )}
        <AppIcons.Trash className="ml-auto text-xl cursor-pointer text-gray-300 hover:text-gray-400" />
        <OtaLine orientation="vertical" className="mx-2 !max-h-[22px]" />
        <OtaRow className="gap-2" crossAxis="end">
          <OtaButton disabled className="!rounded !p-1 min-w-[1.5rem]">
            <AppIcons.Minus className="mx-auto my-auto" />
          </OtaButton>
          <div className="w-10 border-b text-center text-gray-500 border-dividerColor">
            2
          </div>
          <OtaButton className="!rounded !p-1 min-w-[1.5rem]">
            <AppIcons.Plus className="mx-auto my-auto" />
          </OtaButton>
        </OtaRow>
      </OtaRow>
    </OtaCol>
  );
};

export default ProductRow;
