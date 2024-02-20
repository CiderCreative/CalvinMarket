import { ChevronDownIcon } from "@heroicons/react/20/solid";

const DropdownField = ({
  dropdown,
  setDropdown,
  label,
  index,
  value,
  formValues,
  setFormValues,
}) => {
  return (
    <div className="relative my-5">
      <div className="flex items-center space-x-10" id={label}>
        <label className="text-base">{label}</label>

        <div className="click-away relative">
          {/* Display Box */}
          <div
            id="dropdown"
            onClick={() =>
              dropdown === index ? setDropdown(null) : setDropdown(index)
            }
            className="flex cursor-pointer items-center justify-between rounded-xl border-[1px] border-opposite/30 px-5 py-2 hover:bg-opposite/10"
          >
            {formValues[label] || "Select an option"}
            <ChevronDownIcon className="pointer-events-none inset-y-0 right-0 ml-3 aspect-square w-6" />
          </div>

          {/* Dropdown option selection */}
          {dropdown === index && (
            <div
              id="dropdown elements"
              className="absolute left-0  z-10 flex max-h-80 flex-col overflow-y-auto rounded-xl border-2 border-opposite/30 bg-primary"
            >
              {value.options.map((option, index) => (
                <div
                  label={index}
                  value={option}
                  className="cursor-pointer border-y border-opposite/10 px-10 py-3 text-center hover:bg-yellow"
                  onClick={() => {
                    setFormValues({ ...formValues, [label]: option }),
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
};

export default DropdownField;
