"use client";

import { useState } from "react";
import ModalInput from "@/app/components/modal-input";
import useRoomBorrow from "@/hooks/useRoomBorrow";
import RoomBorrowList from "@/app/components/room-borrow-list";
export default function RoomBorrow() {
  const [open, setOpen] = useState(false);
  const { form, 
    current, 
    handleChange, 
    handleAdd ,
    handleDelete,
    handleUpdate,
    isEditing,
    handleEdit
  } = useRoomBorrow(() => setOpen(true));

  return (  
    <div className="p-6 bg-[#F8F9FA] h-screen ">
      <div className="flex justify-center">
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
        end_date={current.end_date ?? ""}
        onClick={() => {
          if (isEditing) {
            handleUpdate();   
          } else {
            handleAdd();      
          }
          setOpen(false);
        }}
        
        label={isEditing ? "แก้ไขการจอง" : "จองห้องประชุม"}
      />
      <RoomBorrowList onClickDelete={handleDelete} form={form} onClickEdit={handleEdit}/>
    </div>
  );
}
