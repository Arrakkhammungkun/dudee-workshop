import { MouseEventHandler } from "react";

export type Room = {
    id:number;
    name_room:string;
    img_room:string;
    desription_room:string;
}

export type RoomCardProps ={
  room: Room;
  onClickEdit:MouseEventHandler<HTMLButtonElement>;
  onClickDelete?:(id: number) => void;
  variant?: "manage" | "booking"; 
  onClickBook?: (room: Room) => void;
}
