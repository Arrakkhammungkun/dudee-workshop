import { TodoListProps } from "./types";

export default function TodoItem({ children }: TodoListProps) {
  return (
    <div className="">
        {children}
    </div>
  );
}
