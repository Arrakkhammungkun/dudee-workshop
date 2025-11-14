import type {  MouseEventHandler } from "react"

export interface ModalInputProps{
    name: string;
    note?: string;
    start_date: string;
    end_date: string;
    Meeting_room: string;
    onChange?: (field: string, value: string) => void;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    label:string
    onClose: () => void;
    isOpen: boolean;
}
