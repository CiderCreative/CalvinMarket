import React, { useState, useEffect } from "react";
import types from "../../constants/ItemTypes/itemTypes.jsx";
import { ItemSubmit, ItemCancelEdit } from "../../components/EditListing";
import DropDownField from "./DropdownField.jsx";

const EditSidebarMenu = ({ formValues, setFormValues }) => {
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
    <div className="inset-y-0 right-0 flex w-full flex-col overflow-y-scroll border-l-2 p-10 px-5">
      <div className="flex w-full items-center space-x-5 text-xl font-bold">
        {/* Title */}
        <input
          type="text"
          placeholder="Item Title"
          value={formValues.title}
          onChange={(e) =>
            setFormValues({ ...formValues, title: e.target.value })
          }
          className="input-clear w-3/5 rounded-xl border-[1px] border-opposite/30 px-5 py-3"
        />

        {/* Price */}
        <div className="relative flex w-2/5 items-center">
          <span className="absolute left-4 opacity-50">$</span>
          <input
            type="number"
            placeholder="0"
            value={formValues.price}
            onChange={(e) =>
              setFormValues({ ...formValues, price: e.target.value })
            }
            className="input-clear w-full rounded-xl border-[1px] border-opposite/30 px-5 py-3 text-center"
          />
        </div>
      </div>

      <hr className="m-auto my-8 h-[2px] w-11/12 bg-opposite/5" />

      <h3 className="text-xl font-black">Item Details</h3>

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
              <div className="my-5 flex space-x-10" key={index} id={key}>
                {/* Tag title */}
                <p className="text-base">{key}</p>

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
                        className={`relative aspect-square w-5 cursor-pointer rounded-full border-[1px] border-opposite ${
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
                        className="cursor-pointer text-base"
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
              <div id={key}>
                <p className="mb-3 text-base">{key}</p>
                <textarea
                  type="text"
                  placeholder={value.filler}
                  value={formValues[key]}
                  onChange={(e) =>
                    setFormValues({ ...formValues, [key]: e.target.value })
                  }
                  className="input-clear w-4/5 rounded-xl border-[1px] border-opposite/30 px-5 py-3"
                  rows={3}
                />
              </div>
            );
          }
        }
      })}

      <div>
        <h3 className="my-10 text-xl font-black">
          Exchange Preferences (Optional)
        </h3>

        {/* Radio buttons */}
        <div className="flex space-x-10">
          {["Dorm pickup", "K.E. pickup", "Campus meetup"].map(
            (option, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                onClick={() =>
                  setFormValues((prevFormValues) => ({
                    ...prevFormValues,
                    meetup: prevFormValues.meetup === option ? null : option,
                  }))
                }
              >
                {/* Button */}
                <div
                  className={`relative aspect-square w-8 cursor-pointer rounded-full border-[1px] border-opposite ${
                    formValues.meetup === option ? "bg-yellow" : ""
                  }`}
                >
                  {/* Center dot*/}
                  {formValues.meetup === option && (
                    <div className="absolute inset-1/2 aspect-square w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black" />
                  )}
                </div>

                {/* Description of option */}
                <label className="cursor-pointer text-base">{option}</label>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default EditSidebarMenu;
