import React, { useState, useEffect } from "react";
import { apparelType } from "./ItemTypes/apparel.jsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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
    <div className="flex flex-col right-0 inset-y-0 w-full px-5 border-l-2 p-10 overflow-y-scroll">
      <div className="flex items-center text-xl font-bold space-x-5 w-full">
        {/* Title */}
        <input
          type="text"
          placeholder="Item Title"
          value={formValues.title}
          onChange={(e) =>
            setFormValues({ ...formValues, title: e.target.value })
          }
          className="w-3/5 px-5 py-3 input-clear rounded-xl border-[1px] border-opposite/30"
        />

        {/* Price */}
        <div className="relative flex items-center w-2/5">
          <span className="absolute left-4 opacity-50">$</span>
          <input
            type="number"
            placeholder="0"
            value={formValues.price}
            onChange={(e) =>
              setFormValues({ ...formValues, price: e.target.value })
            }
            className="text-center w-full px-5 py-3 rounded-xl input-clear border-[1px] border-opposite/30"
          />
        </div>
      </div>

      <hr className="bg-opposite/5 w-11/12 m-auto h-[2px] my-8" />

      <h3 className="text-xl font-black">Item Details</h3>
      {/* mapping specific tag questions for each item */}
      {Object.keys(apparelType).map((key, index) => {
        let value = apparelType[key];

        {
          // ------------- Radio Button Tags ------------- //
          if (value.type === "button") {
            return (
              <div className="flex space-x-10 my-5" key={index}>
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
                        className={`aspect-square rounded-full w-5 cursor-pointer border-[1px] border-opposite relative ${
                          formValues[key] === option ? "bg-yellow" : ""
                        }`}
                      >
                        {/* Center dot*/}
                        {formValues[key] === option && (
                          <div className="absolute inset-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                        )}
                      </div>

                      {/* Description of option */}
                      <label
                        htmlFor={`${key}-option-${index}`}
                        className="text-base cursor-pointer"
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
                <div className="flex items-center space-x-10">
                  <label className="text-base">{key}</label>

                  <div className="relative click-away">
                    {/* Display Box */}
                    <div
                      onClick={() =>
                        dropdown === index
                          ? setDropdown(null)
                          : setDropdown(index)
                      }
                      className="border-[1px] hover:bg-opposite/10 cursor-pointer border-opposite/30 rounded-xl px-5 py-2 flex justify-between items-center"
                    >
                      {formValues[key] || "Select an option"}
                      <ChevronDownIcon className="inset-y-0 right-0 pointer-events-none aspect-square w-6 ml-3" />
                    </div>

                    {/* Dropdown option selection */}
                    {dropdown === index && (
                      <div className="absolute left-0  flex flex-col bg-primary border-2 border-opposite/30 z-10 rounded-xl max-h-80 overflow-y-auto">
                        {value.options.map((option, index) => (
                          <div
                            key={index}
                            value={option}
                            className="hover:bg-yellow cursor-pointer px-10 py-3 border-y border-opposite/10 text-center"
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
                <p className="text-base mb-3">{key}</p>
                <textarea
                  type="text"
                  placeholder={value.filler}
                  value={formValues[key]}
                  onChange={(e) =>
                    setFormValues({ ...formValues, [key]: e.target.value })
                  }
                  className="w-4/5 px-5 py-3 input-clear border-[1px] border-opposite/30 rounded-xl"
                  rows={3}
                />
              </div>
            );
          }
        }
      })}

      <div>
        <h3 className="text-xl font-black my-10">
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
                  className={`aspect-square rounded-full w-8 cursor-pointer border-[1px] border-opposite relative ${
                    formValues.meetup === option ? "bg-yellow" : ""
                  }`}
                >
                  {/* Center dot*/}
                  {formValues.meetup === option && (
                    <div className="absolute inset-1/2 aspect-square w-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>

                {/* Description of option */}
                <label className="text-base cursor-pointer">{option}</label>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default EditSidebarMenu;
