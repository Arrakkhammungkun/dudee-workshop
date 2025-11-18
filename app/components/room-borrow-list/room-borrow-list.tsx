// components/room-borrow-list.tsx
import { RoomBorrowListComponentProps } from "./type";

export default function RoomBorrowList({
  form,
  onClickDelete,
  onClickEdit,        // รับ props นี้มา
}: RoomBorrowListComponentProps) {
  return (
    <div className="mt-6 flex flex-col gap-4">
      <h2 className="font-medium text-lg">รายการจองห้องประชุม</h2>

      {form.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center"
        >
          <div>
            <p className="font-medium">ชื่อ: {item.name}</p>
            <p>หมายเหตุ: {item.note || "-"}</p>
            <p>ห้อง: {item.meeting_room}</p>
            <p>วันที่: {item.start_date}</p>
            <p>เวลา: {item.start_time} - {item.end_time}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onClickEdit?.(item.id)}   // เรียกจริงแล้ว!
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white text-sm"
            >
              แก้ไข
            </button>
            <button
              onClick={() => onClickDelete?.(item.id)}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white text-sm"
            >
              ลบ
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}