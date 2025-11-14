import type { ChangeEventHandler, MouseEventHandler } from "react";

export interface TodoItemProps {
    id:number;
    text: string;
    onClickDelete?: MouseEventHandler<HTMLButtonElement>;
    onClickEdit?: MouseEventHandler<HTMLButtonElement>;
    isEditing?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onClickSave?: MouseEventHandler<HTMLButtonElement>;
    value?:string
    onClickCancel?: MouseEventHandler<HTMLButtonElement>;
}
