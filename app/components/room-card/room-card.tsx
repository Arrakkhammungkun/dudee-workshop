import Image from "next/image";
import type { RoomCardProps } from "./type";

const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export default function RoomCard({ room, onClickEdit, onClickDelete,variant ,onClickBook }: RoomCardProps) {
  const safeImage = room.img_room && isValidUrl(room.img_room);

  return (
<div className="group relative flex flex-col sm:flex-row bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
  {/* Image */}
  <div className="relative w-full sm:w-40 h-40 sm:h-40 shrink-0 rounded-2xl overflow-hidden">
    {safeImage ? (
      <Image
        src={room.img_room!}
        alt={room.name_room || "room-image"}
        fill
        className="object-cover"
      />
    ) : (
      <div className="flex items-center justify-center h-full bg-gray-100">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    )}
  </div>

  {/* Content */}
  <div className="flex-1 p-4 md:p-5 flex flex-col justify-between min-w-0">
    <div className="mb-3">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 line-clamp-1">
        {room.name_room}
      </h3>
      <p className="text-sm md:text-base text-gray-600 line-clamp-2 min-h-8">
        {room.desription_room || "ไม่มีคำอธิบาย"}
      </p>
    </div>

    <div className="flex flex-col sm:flex-row sm:justify-start gap-2">
                {variant === "manage" && (
            <>
      <button
        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
        type="button"
        onClick={onClickEdit}
      >
        แก้ไขข้อมูล
      </button>
      <button
        className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
        type="button"
        onClick={() => onClickDelete?.(room.id)}
      >
        ลบ
      </button>
      </>
                )}
          {variant === "booking" && (
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              onClick={() => onClickBook?.(room)}
            >
              จองห้อง
            </button>
          )}
    </div>
  </div>  
</div>

  );
}
