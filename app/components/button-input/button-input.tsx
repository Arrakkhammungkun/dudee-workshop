
import React from "react";
import type { FormInputProps } from "./type";

export default function FormInput({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="
          w-full px-3 py-2 
          border border-gray-300 
          rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition
        "
      />
    </div>
  );
}
