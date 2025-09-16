import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import React from "react";

const ListBoxComponent = ({
  options,
  value,
  onChange,
  label,
  labelHidden,
  zIndex = "1",
}) => {
  const [selected, setSelected] = useState(value);

  const handleSelectionChange = (selectedOption) => {
    setSelected(selectedOption);
    onChange(selectedOption?.value);
  };

  useEffect(() => {
    if (!value) {
      setSelected(options[0]);
      return;
    }
    const selectedValue = options.find((option) => option.value === value);
    setSelected(selectedValue);
  }, []);

  return (
    <div className={`flex flex-col gap-2 relative`} style={{ zIndex: zIndex }}>
      {label && (
        <div
          className={`text-darkBlue font-semibold ${labelHidden && "sr-only"}`}
        >
          {label}
        </div>
      )}
      <Listbox value={selected} onChange={handleSelectionChange}>
        <ListboxButton
          className={`relative z-0 block w-full rounded-2xl bg-transparent text-left border-[#DAE6EE] border-2 py-2 mb-2 lg:py-3 px-4 lg:px-5`}
        >
          {selected?.label}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          style={{ zIndex: zIndex }}
          className={`w-[var(--button-width)] rounded-xl border border-lightBlue bg-lightBlue p-2 
                        [--anchor-gap:var(--spacing-1)] focus:outline-none
                        transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0`}
        >
          {options.map((option) => (
            <ListboxOption
              key={option.value}
              value={option}
              className={`group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 lg:py-3 lg:px-5 select-none
                            data-[focus]:bg-black/10`}
            >
              <CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
              <div className=" text-black">{option.label}</div>{" "}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default ListBoxComponent;
