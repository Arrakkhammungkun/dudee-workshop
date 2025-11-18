import { MouseEventHandler } from "react";

export interface RoomModalCreateProps{
    label?:string
    isOpen: boolean;
    name_room:string;
    img_room:string;
    desription_room:string;
    onClose: () => void;
    onCreate?: MouseEventHandler<HTMLButtonElement>;
    oncalcel?: MouseEventHandler<HTMLButtonElement>;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onChange?: (field: string, value: string) => void;
}