import React, { useState, useEffect } from "react";
import { apparelType } from "./ItemTypes/apparel.jsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ItemSubmit, ItemCancelEdit } from "../../components/EditListing";

const EditSidebarMenu = ({ formValues, setFormValues }) => {
  // State to manage form values
  const [dropdown, setDropdown] = useState();
  // Close Dropdown on click away (outside of menu)
  useEffect(() => {
    const clickAway = (event) => {
      if (dropdown && !event.target.closest(".click-away")) setDropdown(false);
    };
    document.addEventListener("mousedown", clickAway);
    return () => {
      document.removeEventListener("mousedown", clickAway);
    };
  }, [dropdown]);

  return (
    <div className="inset-y-0 right-0 flex w-full flex-col overflow-y-auto p-10 px-5">
      <div className="mb-12 flex w-full text-lg font-bold max-lg:space-y-5 max-sm:flex-col md:text-xl lg:items-center lg:space-x-5">
        {/* Title */}
        <input
          type="text"
          disabled
          placeholder="Item Title"
          value={formValues.title}
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

      <h3 className="text-lg font-bold xl:text-xl">Item Details</h3>
      {/* mapping specific tag questions for each item */}
      {Object.keys(apparelType).map((key, index) => {
        let value = apparelType[key];

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
              <div className="relative my-5">
                <div className="flex items-center space-x-10 text-xs lg:text-sm">
                  <label className="text-sm lg:text-base">{key}</label>

                  <div className="click-away relative">
                    {/* Display Box */}
                    <div
                      onClick={() =>
                        dropdown === index
                          ? setDropdown(null)
                          : setDropdown(index)
                      }
                      className="flex cursor-pointer items-center justify-between rounded-xl border-[1px] border-dark/30 px-5 py-2 hover:bg-dark/10 dark:border-light/30 hover:dark:border-light/20"
                    >
                      {formValues[key] || "Select an option"}
                      <ChevronDownIcon className="pointer-events-none inset-y-0 right-0 ml-3 aspect-square w-6" />
                    </div>

                    {/* Dropdown option selection */}
                    {dropdown === index && (
                      <div className="absolute left-0  z-10 flex max-h-80 flex-col overflow-y-auto rounded-xl border-2 border-opposite/30 bg-primary">
                        {value.options.map((option, index) => (
                          <div
                            key={index}
                            value={option}
                            className="cursor-pointer border-y border-dark/10 px-10 py-3 text-center hover:bg-yellow hover:text-dark dark:border-light/20"
                            onClick={() => {
                              setFormValues({ ...formValues, [key]: option }),
                                setDropdown(false);
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          }

          // ------------- Text Input Tags ------------- //
          else if (value.type === "text") {
            return (
              <div>
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
