"use client";

import React from "react";
import useRoom from "@/hooks/useRoom";
import RoomListView from "@/app/components/room-list/room-list";
import ModalInput from "@/app/components/modal-input";

export default function RoomBookingList() {
  const {
    rooms,
    bookingCurrent,
    bookingModalOpen,
    setBookingModalOpen,
    handleBookRoom,
    handleBookingChange,
    handleSubmitBooking,
    handleDelete,
    handleEditClick

  } = useRoom();
  
  return (
    <div className="p-4 container mx-auto flex flex-col">
      <div className="" >
        <div className="flex justify-end">

        </div>


      <ModalInput
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        name={bookingCurrent.name}
        note={bookingCurrent.note ?? ""}
        Meeting_room={bookingCurrent.meeting_room}
        start_date={bookingCurrent.start_date ?? ""}
        start_time={bookingCurrent.start_time ?? ""}
        end_time={bookingCurrent.end_time ?? ""}
        onChange={handleBookingChange}
        onClick={handleSubmitBooking}
        label="จองห้องประชุม"
      />


        <RoomListView rooms={rooms} onedit={handleEditClick} ondelete={handleDelete} onClickBook={handleBookRoom} variant="booking" />
      </div>
    </div>
  );
}
