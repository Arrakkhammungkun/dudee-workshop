import { Dayjs } from "dayjs";

export type Props = {
  value: string; 
  onChange?: (value: string) => void;
  label?: string;
  shouldDisableDate?: (date: Dayjs) => boolean;
}