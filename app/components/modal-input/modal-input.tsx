import React from "react";
import dayjs from "dayjs";
import type { ModalInputProps } from "./type";
import FormInput from "../button-input";
import Modal from "../modal/modal";
import MyDateTimePicker from "../MyDateTimePicker/MyDateTimePicker";

export default function ModalInput({
  name,
  note,
  start_date,
  Meeting_room,
  onChange,
  onClick,
  label,
  isOpen,
  onClose,
  start_time,
  end_time,
  end_date,
}: ModalInputProps) {
  React.useEffect(() => {
    if (start_date && !end_date) {
      onChange?.("end_date", start_date);
    }
  }, [start_date, end_date, onChange]);

  const startValue = start_date && start_time ? `${start_date}T${start_time}` : "";

  const endValue = React.useMemo(() => {
    if (end_date && end_time) return `${end_date}T${end_time}`;
    if (start_date && start_time) {
      const [h, m] = start_time.split(":");
      const endHour = (parseInt(h, 10) + 1) % 24;
      return `${start_date}T${String(endHour).padStart(2, "0")}:${m}`;
    }
    return "";
  }, [end_date, end_time, start_date, start_time]);

const minDateTimeForEnd = React.useMemo(() => {
  if (!start_date || !start_time) return undefined;

 
  if (!end_date) {
    return dayjs(`${start_date}T${start_time}`);
  }

   if (end_date === start_date) {
    return dayjs(`${start_date}T${start_time}`);
  }

   return dayjs(`${end_date}T00:00`);
}, [start_date, start_time, end_date]);

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <h1 className="text-xl font-semibold mb-4">{label}</h1>

        <FormInput label="ชื่อ-สกุล" value={name || ""} onChange={(e) => onChange?.("name", e.target.value)} placeholder="กรอกชื่อผู้จอง" />
        <FormInput label="หมายเหตุ" value={note ?? ""} onChange={(e) => onChange?.("note", e.target.value)} />
        <FormInput label="ห้องประชุม" value={Meeting_room ?? ""} onChange={(e) => onChange?.("meeting_room", e.target.value)} />

        {/* START */}
        <div className="mt-4">
          <MyDateTimePicker
            label="วันและเวลาเริ่มต้น"
            value={startValue}
            onChange={(val) => {
              const [date, time] = val.split("T");
              onChange?.("start_date", date);
              onChange?.("start_time", time);
            }}
          />
        </div>

         <div className="mt-4">
          <MyDateTimePicker
            label="วันและเวลาสิ้นสุด"
            value={endValue}
            minDateTime={minDateTimeForEnd}
            onChange={(val) => {
              const [date, time] = val.split("T");
              onChange?.("end_date", date);
              onChange?.("end_time", time);
            }}
          />
        </div>

        <div className="flex justify-end mt-6">
          <button onClick={onClick} className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-medium">
            จองห้องประชุม
          </button>
        </div>
      </Modal>
    </div>
  );
}