import * as React from "react";

export function FormInput({ label, type = "text", placeholder, value }) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-sm font-medium leading-none text-white" htmlFor={`${label.toLowerCase()}-input`}>
        {label} *
      </label>
      <input
        type={type}
        id={`${label.toLowerCase()}-input`}
        className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
        placeholder={placeholder}
        value={value}
        aria-label={label}
      />
    </div>
  );
}