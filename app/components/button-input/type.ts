import { ChangeEventHandler } from "react";

export interface FormInputProps {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}