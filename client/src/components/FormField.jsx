import React from "react";

const FormField = ({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  isCategory,
  value,
  handleChange,
  isDisabled = false, // Added `isDisabled` prop
}) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span
          className={`font-epilogue font-medium text-sm leading-[22px] text-[#4d4d4d] dark:text-[#808191] mb-[10px] ${isDisabled ? "opacity-50" : ""
            }`}
        >
          {labelName}
        </span>
      )}
      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          disabled={isDisabled} // Disable textarea if `isDisabled` is true
          type={inputType}
          rows={10}
          placeholder={placeholder}
          className={`py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#8b8b8b] dark:border-[#3a3a43] bg-transparent font-epilogue dark:text-white text-sm placeholder:text-[#6e7682] text-[#4b5264] rounded-xl sm:min-w-[300px] ${isDisabled
              ? "cursor-not-allowed opacity-50"
              : "cursor-text focus:border-[#6f01ec]"
            }`}
        />
      ) : isCategory ? (
        <select
          required
          value={value}
          onChange={handleChange}
          disabled={isDisabled} // Disable select if `isDisabled` is true
          className={`py-[17px] sm:px-[25px] px-[20px] outline-none border-[1px] border-[#8b8b8b] dark:border-[#3a3a43] font-epilogue text-black dark:text-white text-sm rounded-xl sm:min-w-[300px] bg-[#f2f2f2] dark:bg-[#1c1c24] ${isDisabled
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer focus:border-[#6f01ec]"
            }`}
        >
          <option value="">Select any Category</option>
          <option value="Fundraiser">Fundraiser</option>
          <option value="Crisis Relief">Crisis Relief</option>
          <option value="Emergency">Emergency</option>
          <option value="Education">Education</option>
          <option value="Medical">Medical</option>
          <option value="Non-Profit">Non-Profit</option>
          <option value="Personal">Personal</option>
          <option value="Environment">Environment</option>
          <option value="Animals">Animals</option>
          <option value="Other">Other</option>
        </select>
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          disabled={isDisabled} // Disable input if `isDisabled` is true
          type={inputType}
          placeholder={placeholder}
          min={0}
          step="0.01"
          onFocus={(e) =>
            e.target.addEventListener(
              "wheel",
              function (e) {
                e.preventDefault();
              },
              { passive: false }
            )
          }
          className={`py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#8b8b8b] dark:border-[#3a3a43] bg-transparent font-epilogue dark:text-white text-sm placeholder:text-[#6e7682] text-[#4b5264] rounded-xl sm:min-w-[300px] ${isDisabled
              ? "cursor-not-allowed opacity-50"
              : "cursor-text focus:border-[#6f01ec]"
            }`}
        />
      )}
    </label>
  );
};

export default FormField;
