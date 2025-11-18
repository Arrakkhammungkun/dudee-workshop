import { useState, useCallback } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { RoomBorrowType } from "@/type/RoomBorrow";

const emptyRoom: RoomBorrowType = {
  id: 0,
  name: "",
  note: "",
  start_date: "",
  end_time: "",
  start_time: "",
  meeting_room: "",
};

export default function useRoomBorrow(onEditStart?: () => void) {
  const [form, setForm] = useLocalStorage<RoomBorrowType[]>("roomBorrowList", []);

  const [nextId, setNextId] = useState(1);

  const [current, setCurrent] = useState<RoomBorrowType>(emptyRoom);

  const resetCurrent = useCallback(() => {
    setCurrent(emptyRoom);
  }, []);

  const handleChange = useCallback((field: string, value: string) => {
    setCurrent((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleAdd = useCallback(() => {
    setForm((prev) => {
      if (current.id === 0) {
        const newItem = { ...current, id: nextId };
        setNextId((prev) => prev + 1);
        return [...prev, newItem];
      } else {
        return prev.map((item) =>
          item.id === current.id ? { ...current } : item
        );
      }
    });

    resetCurrent();
  }, [current, nextId, setForm, resetCurrent]);

  const handleDelete = useCallback(
    (id: number) => {
      setForm((prev) => prev.filter((item) => item.id !== id));
    },
    [setForm]
  );

  const handleEdit = useCallback(
    (id: number) => {
      const item = form.find((i) => i.id === id);
      if (item) {
        setCurrent(item);
        onEditStart?.(); // 🟦 สั่งเปิด modal
      }
    },
    [form, onEditStart]
  );

  return {
    form,
    current,
    handleChange,
    handleAdd,
    setCurrent,
    handleDelete,
    handleEdit,
  };
}
