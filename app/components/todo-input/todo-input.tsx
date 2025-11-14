import type { TodoInputProps } from "./types";
export default function TodoInput({ onClick, onChange,value}: TodoInputProps) {
  return (
    <form>
      <div className="flex gap-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          onChange={onChange}
          id=""
          placeholder="Add a new list "
          value={value}
        />
        <button className="bg-blue-400 px-6 py-2 rounded-md text-white" type="button" onClick={onClick}>
          Add
        </button>
      </div>
    </form>
  );
}
