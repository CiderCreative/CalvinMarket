import React, { useState, useEffect } from "react";
import types from "../../constants/ItemTypes/itemTypes.jsx";
import DropDownField from "./DropdownField.jsx";

const EditSidebarMenu = ({ formValues, setFormValues, isEditing }) => {
  // State to manage form values
  const [dropdown, setDropdown] = useState();
  // Close Dropdown on click away (outside of menu)
  useEffect(() => {
    const clickAway = (event) => {
      if (dropdown !== false && !event.target.closest(".click-away"))
        setDropdown(false);
    };
    document.addEventListener("mousedown", clickAway);
    return () => {
      document.removeEventListener("mousedown", clickAway);
    };
  }, [dropdown]);

  return (
    <div className="inset-y-0 right-0 flex w-full flex-col overflow-y-auto p-10 px-5">
      <div className="mb-12 flex w-full text-lg font-bold max-sm:flex-col max-sm:space-y-5 md:text-xl lg:items-center lg:space-x-5">
        {/* Title */}
        <input
          type="text"
          placeholder="Item Title"
          value={formValues.title}
          disabled={isEditing}
          onChange={(e) =>
            setFormValues({ ...formValues, title: e.target.value })
          }
          className="input-clear w-full border-b-[1px] border-dark/30 bg-transparent px-2 py-3 dark:border-light/30 sm:w-3/5 sm:px-5"
        />

        {/* Price */}
        <div className="relative flex w-2/3 items-center sm:w-2/5">
          <span className="absolute left-4 opacity-50">$</span>
          <input
            type="number"
            placeholder="0"
            value={formValues.price}
            onChange={(e) =>
              setFormValues({ ...formValues, price: e.target.value })
            }
            className="input-clear w-full border-b-[1px] border-dark/30 bg-transparent px-2 py-3 text-center text-lg dark:border-light/30 sm:px-5"
          />
        </div>
      </div>

      <h3 className="text-base font-bold xl:text-lg">Item Details</h3>

      {/* item type drop-down */}
      <DropDownField
        dropdown={dropdown}
        setDropdown={setDropdown}
        label={"type"}
        index={0}
        value={{ options: Object.keys(types) }}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      {/* mapping specific tag questions for each item */}
      {Object.keys(types[formValues["type"]]).map((key, index) => {
        let value = types[formValues["type"]][key];

        {
          // ------------- Radio Button Tags ------------- //
          if (value.type === "button") {
            return (
              <div
                className="my-5 flex max-sm:flex-col max-sm:space-y-5 sm:space-x-10"
                key={index}
              >
                {/* Tag title */}
                <p className="text-sm lg:text-base">{key}</p>

                <div className="flex space-x-5">
                  {value.options.map((option, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center"
                      onClick={() =>
                        setFormValues((prevFormValues) => ({
                          ...prevFormValues,
                          [key]: option,
                          ...(prevFormValues[key] === option && {
                            [key]: null,
                          }),
                        }))
                      }
                    >
                      {/* Button */}
                      <div
                        className={`border-secondary/30 relative aspect-square w-5 cursor-pointer rounded-full border-[1px] ${
                          formValues[key] === option ? "bg-yellow" : ""
                        }`}
                      >
                        {/* Center dot*/}
                        {formValues[key] === option && (
                          <div className="absolute inset-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black" />
                        )}
                      </div>

                      {/* Description of option */}
                      <label
                        htmlFor={`${key}-option-${index}`}
                        className="mt-1 cursor-pointer text-xs text-subtle md:text-sm"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          // ------------- Drop Down Tags ------------- //
          else if (value.type === "drop-down") {
            return (
              <DropDownField
                dropdown={dropdown}
                setDropdown={setDropdown}
                label={key}
                index={index + 1}
                value={value}
                formValues={formValues}
                setFormValues={setFormValues}
              />
            );
          }

          // ------------- Text Input Tags ------------- //
          else if (value.type === "text") {
            return (
              <div key={index}>
                <p className="mb-3 text-sm lg:text-base">{key}</p>
                <textarea
                  type="text"
                  placeholder={value.filler}
                  value={formValues[key]}
                  onChange={(e) =>
                    setFormValues({ ...formValues, [key]: e.target.value })
                  }
                  className="input-clear w-full rounded-xl border-[1px] border-dark/30 bg-transparent px-5 py-3 text-xs dark:border-light/30 md:w-4/5 lg:text-sm"
                  rows={3}
                />
              </div>
            );
          }
        }
      })}

      <div>
        <h3 className="my-10 text-lg font-bold xl:text-xl">
          Exchange Preferences (Optional)
        </h3>

        {/* Radio buttons */}
        <div className="flex space-x-10">
          {["Dorm pickup", "K.E. pickup", "Campus meetup"].map(
            (option, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
                onClick={() =>
                  setFormValues((prevFormValues) => ({
                    ...prevFormValues,
                    meetup: prevFormValues.meetup === option ? null : option,
                  }))
                }
              >
                {/* Button */}
                <div
                  className={`relative aspect-square w-7 cursor-pointer rounded-full border-[1px] border-dark/30 dark:border-light/30 ${
                    formValues.meetup === option ? "bg-yellow" : ""
                  }`}
                >
                  {/* Center dot*/}
                  {formValues.meetup === option && (
                    <div className="absolute inset-1/2 aspect-square w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black" />
                  )}
                </div>

                {/* Description of option */}
                <label className="mt-2 cursor-pointer text-sm text-subtle">
                  {option}
                </label>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default EditSidebarMenu;
