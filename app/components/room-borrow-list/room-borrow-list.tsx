import { RoomBorrowListComponentProps } from "./type";

export default function RoomBorrowList({
  form,
  onClickDelete,
  onClickEdit,
}: RoomBorrowListComponentProps) {
  return (
    <div className="mt-6 flex flex-col gap-4">
      <h2 className="font-medium text-lg">รายการจองห้องประชุม</h2>

      {form.map((item, index) => (
        <div key={index} className=" bg-white  p-2 rounded-lg shadow-sm mb-2 flex justify-between items-center bg-">
          <div className="p-2">
            <p>ชื่อ: {item.name}</p>
            <p>หมายเหตุ: {item.note || "-"}</p>
            <p>ห้อง: {item.meeting_room}</p>
            <p>
              วันที่: {item.start_date} 
            </p>
            <p>
              เวลา: {item.start_time} 
            </p>
            <p>
              ถึง: {item.end_time} 
            </p>
          </div>

          <div className="flex gap-2 ">
            <button
              className="bg-blue-400 hover:bg-blue-500 px-3.5 py-2 rounded-md text-white text-sm transition"
              type="button"
              onClick={() => onClickEdit?.(item.id)}
            >
              แก้ไข
            </button>
            <button
              className="bg-red-400 hover:bg-red-500 px-6.5 py-2 rounded-md text-white text-sm transition"
              type="button"
               onClick={() => onClickDelete?.(item.id)}
            >
              ลบ
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
