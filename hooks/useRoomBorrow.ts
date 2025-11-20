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
  end_date: "",
};

export default function useRoomBorrow(onEdit?: () => void) {
  const [form, setForm] = useLocalStorage<RoomBorrowType[]>("roomBorrowList", []);
  const [nextId, setNextId] = useState(1);
  const [current, setCurrent] = useState<RoomBorrowType>(emptyRoom);
  const [isEditing, setIsEditing] = useState(false); 

  const handleChange = useCallback((field: string, value: string) => {
    setCurrent((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleAdd = useCallback(() => {
    const newItem = { ...current, id: nextId };
    setForm((prev) => [...prev, newItem]);
    setNextId((prev) => prev + 1);
    setCurrent(emptyRoom);
    setIsEditing(false);
  }, [current, nextId, setForm]);

  const handleUpdate = useCallback(() => {
    if (!current.id) return;

    setForm((prev) =>
      prev.map((item) => (item.id === current.id ? current : item))
    );
    setCurrent(emptyRoom);
    setIsEditing(false);
  }, [current, setForm]);

  const handleDelete = useCallback(
    (id: number) => {
      setForm((prev) => prev.filter((item) => item.id !== id));
    },
    [setForm]
  );

  const handleEdit = useCallback(
    (id: number) => {
      const found = form.find((i) => i.id === id);
      if (found) {
        setCurrent(found);
        setIsEditing(true);      
        onEdit?.();              
      }
    },
    [form, onEdit]
  );

  return {
    form,
    current,
    handleChange,
    handleAdd,
    handleUpdate,    
    handleDelete,
    handleEdit,
    setCurrent,
    isEditing,       
  };
}