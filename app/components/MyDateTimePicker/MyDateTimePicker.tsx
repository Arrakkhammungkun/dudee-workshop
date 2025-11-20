"use client";

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/th";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Props } from "./type"; // ใช้ type จากไฟล์ของคุณ

// ขยาย Props ให้รองรับ minDateTime
type MyDateTimePickerProps = Props & {
  minDateTime?: Dayjs;
};

export default function MyDateTimePicker({
  value,
  onChange,
  label,
  minDateTime,
}: MyDateTimePickerProps) {
  // บังคับ parse ด้วย format ชัดเจน → แก้ปัญหา timezone และ disable ผิด
  const parsedValue = React.useMemo(() => {
    if (!value) return null;
    return dayjs(value, "YYYY-MM-DDTHH:mm", true); // true = strict mode
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="th">
      <DateTimePicker
        label={label}
        value={parsedValue}
        onChange={(newVal) => {
          if (!newVal) return;
          onChange?.(newVal.format("YYYY-MM-DDTHH:mm"));
        }}
        minDateTime={minDateTime}
        minutesStep={5}
        format="DD/MM/YYYY HH:mm"
        ampm={false}
        slotProps={{
          textField: { size: "small", fullWidth: true },
        }}
      />
    </LocalizationProvider>
  );
}