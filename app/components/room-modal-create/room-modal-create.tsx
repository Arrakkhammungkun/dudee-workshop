"use client";

import React from "react";
import Modal from "../modal";
import FormInput from "../button-input";
import type { RoomModalCreateProps } from "./type";

export default function RoomModalCreate({
  isOpen,
  onClose,
  onChange,
  onClick,
  label,
  name_room,
  desription_room,
  img_room,
}: RoomModalCreateProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="text-lg font-semibold mb-4">{label}</h1>

      <FormInput
        label="Room Name"
        value={name_room}
        onChange={(e) => onChange?.("name_room", e.target.value)}
        placeholder="Enter room name"
      />

      <FormInput
        label="Description"
        value={desription_room}
        onChange={(e) => onChange?.("desription_room", e.target.value)}
        placeholder="Enter description"
      />

      <FormInput
        label="Image URL"
        value={img_room}
        onChange={(e) => onChange?.("img_room", e.target.value)}
        placeholder="Enter image URL"
      />

      <div className="flex justify-end mt-4">
        <button
          onClick={onClick ?? (() => {})}
          className="px-6 py-2 bg-blue-400 text-white rounded-lg"
        >
          Create
        </button>
      </div>
    </Modal>
  );
}
