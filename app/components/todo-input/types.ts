import type { ChangeEventHandler, MouseEventHandler } from "react"

export interface TodoInputProps{
    value: string
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    
}
