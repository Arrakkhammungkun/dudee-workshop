// rfce
import React from "react";
import type { ModalInputProps } from "./type";
import FormInput from "../button-input";
import Modal from "../modal/modal";
export default function ModalInput({
  name,
  note,
  start_date,
  end_date,
  Meeting_room,
  onChange,
  onClick,
  label,
  isOpen,
  onClose,

}: ModalInputProps) {


  return (
    <div >
       <Modal isOpen={isOpen} onClose={onClose} >
        <h1>{label}</h1>
        <FormInput
            label="Name"
            value={name}
            onChange={(e) => onChange?.("name", e.target.value)}
            placeholder="Enter your name"
        />
        <FormInput
            label="Note"
            value={note ?? ""}
            onChange={(e) => onChange?.("note", e.target.value)}/>

        <FormInput
            label="Meeting room"
            value={Meeting_room ?? ""}
            onChange={(e) => onChange?.("meeting_room", e.target.value)}
        />
        <FormInput
            type="date"
            label="start date"
            value={start_date ?? ""}
            onChange={(e) => onChange?.("start_date", e.target.value)}
        />
        <FormInput
            type="date"
            label="end date"
            value={end_date ?? ""}
            onChange={(e) => onChange?.("end_date", e.target.value)}
        />
        <div className="flex justify-end">
            <button
                onClick={onClick ?? (() => {})}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg "
            >
                จอง
            </button>
        </div>

       </Modal>


    </div>
  );
}

 
