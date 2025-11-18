
export interface roomBorrowListProps {
    id:number;
    name: string;
    note?: string;
    start_date: string;
    meeting_room: string;
    start_time: string;
    end_time: string;
}
export interface RoomBorrowListComponentProps {
    form: roomBorrowListProps[];
    onClickDelete?: (id: number) => void;
    onClickEdit?: (id: number) => void; 
}