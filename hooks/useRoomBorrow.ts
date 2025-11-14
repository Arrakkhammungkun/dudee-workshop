// hooks/useRoomBorrow.ts
"use client";
import { useState, useCallback } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

export interface RoomBorrowType {
  name: string;
  note?: string;
  start_date: string;
  end_date: string;
  meeting_room: string;
}

export default function useRoomBorrow() {
  const [form, setForm] = useLocalStorage<RoomBorrowType[]>("roomBorrowList", []);

  const [current, setCurrent] = useState<RoomBorrowType>({
    name: "",
    note: "",
    start_date: "",
    end_date: "",
    meeting_room: "",
  });

  const handleChange = useCallback((field: string, value: string) => {
    setCurrent(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleAdd = useCallback(() => {
    setForm(prev => [...prev, current]);
    setCurrent({
      name: "",
      note: "",
      start_date: "",
      end_date: "",
      meeting_room: "",
    });
  }, [current, setForm]);

  return { form, current, handleChange, handleAdd, setCurrent };
}
