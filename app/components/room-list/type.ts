

export type Room = {
    id:number;
    name_room:string;
    img_room:string;
    desription_room:string;
}

export interface RoomListViewProps {
  rooms: Room[];
  onedit?:(roomId: string | number) => void;
  ondelete?:(roomId: number) => void;
  variant?: "manage" | "booking";
  onClickBook?: (room: Room) => void;
}