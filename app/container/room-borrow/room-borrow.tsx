"use client";

import { useState } from "react";
import ModalInput from "@/app/components/modal-input";
import useRoomBorrow from "@/hooks/useRoomBorrow";

export default function RoomBorrow() {
  const [open, setOpen] = useState(false);
  const { form, current, handleChange, handleAdd } = useRoomBorrow();

  return (
    <div className="p-6">
      <div className="flex justify-center">
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Add
        </button>
      </div>

      <ModalInput
        isOpen={open}
        onClose={() => setOpen(false)}
        name={current.name}
        note={current.note ?? ""}
        Meeting_room={current.meeting_room}
        start_date={current.start_date}
        end_date={current.end_date}
        onChange={handleChange}
        onClick={() => {
          handleAdd();
          setOpen(false);
        }}
        label="สร้างห้อง"
      />

      <div className="mt-6">
        <h2 className="font-medium text-lg">รายการจองห้อง</h2>
        {form.map((item, index) => (
          <div key={index} className="border p-2 rounded mb-2">
            <p>ชื่อ: {item.name}</p>
            <p>หมายเหตุ: {item.note}</p>
            <p>ห้อง: {item.meeting_room}</p>
            <p>วันที่: {item.start_date} - {item.end_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
