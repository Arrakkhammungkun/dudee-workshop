import React from "react";
import { RoomListViewProps } from "./type";
import RoomCard from "../room-card/room-card";

export default function RoomListView({ 
  rooms, 
  onedit ,  
  ondelete, 
  variant, 
  onClickBook
}: RoomListViewProps) {
  return (
    <div className="min-h-screen bg-linear-to-br  py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {rooms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 animate-fadeIn">
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onClickEdit={() => onedit?.(room.id)}
                onClickDelete={() => ondelete?.(room.id)}
                variant={variant}
                onClickBook={() => onClickBook?.(room)}
              />
            ))}
          </div>
        ) : (
            <div className="flex justify-center">
                ไม่มีข้อมูล
            </div>
        )}
      </div>
    </div>
  );
}
