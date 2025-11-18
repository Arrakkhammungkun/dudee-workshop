"use client";

import { useState } from "react";
import ModalInput from "@/app/components/modal-input";
import useRoomBorrow from "@/hooks/useRoomBorrow";
import RoomBorrowList from "@/app/components/room-borrow-list";
export default function RoomBorrow() {
  const [open, setOpen] = useState(false);
  const { form, current, handleChange, handleAdd ,handleDelete} = useRoomBorrow();

  return (  
    <div className="p-6 bg-[#F4EFEF]">
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
        start_time={current.start_time}
        end_time={current.end_time}
        onChange={handleChange}
        onClick={() => {
          handleAdd();
          setOpen(false);
        }}
        
        label="จองห้องประชุม"
      />
      <RoomBorrowList onClickDelete={handleDelete} form={form}/>
    </div>
  );
}
