import { TodoItemProps } from "./types";

export default function TodoItem({
  onClickDelete,
  onClickEdit,
  text,
  id,
  isEditing = false,
  onChange,
  onClickSave,
  value = "",
  onClickCancel,
}: TodoItemProps) {
  return (
    <div className="mb-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex justify-between items-center gap-4">
          {isEditing ? (
            <input
              className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={onChange}
              value={value}
              placeholder="แก้ไขรายการ..."
              autoFocus
            />
          ) : (
            <div className="flex-1 flex gap-3 items-center">
              <span className="font-medium">{id}</span>
              <span>{text}</span>
            </div>
          )}

          <div className="flex gap-2">
            {isEditing ? (
              <>
                <button
                  className="bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded-md text-white text-sm transition"
                  type="button"
                  onClick={onClickSave}
                >
                  บันทึก
                </button>
                <button
                  className="bg-red-400 hover:bg-red-500 px-4 py-2 rounded-md text-white text-sm transition"
                  type="button"
                  onClick={onClickCancel}
                >
                  ยกเลิก
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-blue-400 hover:bg-blue-500 px-3.5 py-2 rounded-md text-white text-sm transition"
                  type="button"
                  onClick={onClickEdit}
                >
                  แก้ไข
                </button>
                <button
                  className="bg-red-400 hover:bg-red-500 px-6.5 py-1 rounded-md text-white text-sm transition"
                  type="button"
                  onClick={onClickDelete}
                >
                  ลบ
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}