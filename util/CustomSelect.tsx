"use client";

import { Listbox } from "@headlessui/react";
import { Fragment } from "react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface Option {
  value: string;
  label: string;
}

interface SearchTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const options: Option[] = [
  { value: "", label: "Search all" },
  { value: "AX", label: "Articles" },
  { value: "AU", label: "Authors" },
  { value: "TG", label: "Tags" },
];

export default function SearchTypeSelect({
  value,
  onChange,
  className = "",
  placeholder = "Select type..."
}: SearchTypeSelectProps) {
  const selected = options.find((o) => o.value === value) || options[0];
  return null;
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button className="form-control w-full px-4 py-2 text-left nice-select first_null not_chosen">
          <span>{selected.label}</span>
        </Listbox.Button>

        <Listbox.Options className="list position-absolute mt-1 bg-white border rounded shadow-md max-h-60">
          {options.map((opt) => (
            <Listbox.Option key={opt.value} value={opt.value} as={Fragment}>
              {({ selected, active }) => (
                <li className={`cursor-pointer select-none py-2 px-4 ${active ? "bg-gray-100" : ""}`}>
                  <div className="flex justify-between">
                    <span>{opt.label}</span>
                    {selected}
                  </div>
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
