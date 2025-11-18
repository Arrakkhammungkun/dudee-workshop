"use client";

import React from "react";
import RoomModalCreate from "@/app/components/room-modal-create";
import useRoom from "@/hooks/useRoom";
import RoomListView from "@/app/components/room-list/room-list";

export default function RoomList() {
  const {
    rooms,
    current,
    modalOpen,
    setModalOpen,
    handleChange,
    handleEditClick,
    handleSave,
    handleDelete
  } = useRoom();

  return (
    <div className="p-4 container mx-auto flex flex-col">
      <div className="" >
        <div className="flex justify-end">
            <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-blue-400 text-white rounded-lg mb-6 "
          >
            Add Room
          </button>
        </div>


        <RoomModalCreate
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          name_room={current.name_room}
          desription_room={current.desription_room}
          img_room={current.img_room}
          onChange={handleChange}
          onClick={handleSave}
          label={current.name_room ? "Edit Room" : "Create New Room"}
        />

        <RoomListView rooms={rooms} onedit={handleEditClick} ondelete={handleDelete}  variant="manage" />
      </div>
    </div>
  );
}
