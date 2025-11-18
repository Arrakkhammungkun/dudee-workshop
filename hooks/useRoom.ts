"use client";

import { useState, useCallback } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import type { Room } from "@/type/Room";
import type { RoomBorrowType } from "@/type/RoomBorrow";

export default function useRoom() {
  // ห้อง
  const [rooms, setRooms] = useLocalStorage<Room[]>("roomList", []);
  const [current, setCurrent] = useState({
    name_room: "",
    desription_room: "",
    img_room: "",
  });
  const [editingRoomId, setEditingRoomId] = useState<number | null>(null);

  // modal ของ room
  const [modalOpen, setModalOpen] = useState(false);

  // ห้องสำหรับการจอง (แยกจาก current)
  const [bookingCurrent, setBookingCurrent] = useState<RoomBorrowType>({
    id: 0,
    name: "",
    note: "",
    meeting_room: "",
    start_date: "",
    start_time: "",
    end_time: "",
  });
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookings, setBookings] = useLocalStorage<RoomBorrowType[]>("roomBorrowList", []);

  const nextRoomId = rooms.length > 0 ? Math.max(...rooms.map(r => r.id)) + 1 : 1;
  const nextBookingId = bookings.length > 0 ? Math.max(...bookings.map(b => b.id)) + 1 : 1;

  // --- ROOM HANDLERS (เดิม) ---
  const handleChange = useCallback((field: string, value: string) => {
    setCurrent(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleAdd = useCallback(() => {
    const newRoom: Room = { id: nextRoomId, ...current };
    setRooms(prev => [...prev, newRoom]);
    setCurrent({ name_room: "", desription_room: "", img_room: "" });
  }, [current, nextRoomId, setRooms]);

  const handleUpdate = useCallback((id: number) => {
    setRooms(prev =>
      prev.map(room => (room.id === id ? { ...room, ...current } : room))
    );
    setCurrent({ name_room: "", desription_room: "", img_room: "" });
  }, [current, setRooms]);

  const handleEditClick = (id: string | number) => {
    const roomId = typeof id === "string" ? parseInt(id, 10) : id;
    const room = rooms.find((r) => r.id === roomId);
    if (!room) return;

    setCurrent(room);
    setEditingRoomId(roomId);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (editingRoomId !== null) {
      handleUpdate(editingRoomId);
    } else {
      handleAdd();
    }
    setEditingRoomId(null);
    setModalOpen(false);
  };

  const handleDelete = useCallback(
    (id: number) => {
      setRooms(prev => prev.filter(r => r.id !== id));
    },
    [setRooms]
  );

  // --- BOOKING HANDLERS (ใหม่) ---
  const handleBookRoom = useCallback((room: Room) => {
    // preload ชื่อห้องใน bookingCurrent
    setBookingCurrent(prev => ({ ...prev, meeting_room: room.name_room }));
    setBookingModalOpen(true);
  }, []);

  const handleBookingChange = useCallback((field: string, value: string) => {
    setBookingCurrent(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmitBooking = useCallback(() => {
    setBookings(prev => [...prev, { ...bookingCurrent, id: nextBookingId }]);
    setBookingCurrent({
      id: 0,
      name: "",
      note: "",
      meeting_room: "",
      start_date: "",
      start_time: "",
      end_time: "",
    });
    setBookingModalOpen(false);
  }, [bookingCurrent, nextBookingId, setBookings]);

  const handleDeleteBooking = useCallback((id: number) => {
    setBookings(prev => prev.filter(b => b.id !== id));
  }, [setBookings]);

  return {
 
    rooms,
    current,
    modalOpen,
    setModalOpen,
    handleChange,
    handleAdd,
    handleUpdate,
    handleEditClick,
    handleSave,
    handleDelete,

    bookings,
    bookingCurrent,
    bookingModalOpen,
    setBookingModalOpen,
    handleBookRoom,
    handleBookingChange,
    handleSubmitBooking,
    handleDeleteBooking,
  };
}
