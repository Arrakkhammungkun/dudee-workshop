// app/container/todo/todo.tsx
"use client";

import useTodo from "@/hooks/useTodos";
import TodoInput from "@/app/components/todo-input";
import TodoItem from "@/app/components/todo-item";
import TodoList from "@/app/components/todo-list";

export default function Todo() {
  const {
    editId,
    editText,
    handleAdd,
    handleCancel,
    handleChange,
    handleDelete,
    handleEditChange, 
    handleSave,
    startEdit,
    todos,
    value
  } = useTodo();
  return (
    <div className="flex flex-col justify-center items-center container mx-auto">
      <div className="mt-24 bg-[#F4EFEF] p-4 rounded-xl w-full sm:max-w-4xl mx-auto">
        <h1 className="font-medium text-2xl mb-4">Todo List</h1>

        <TodoInput value={value} onChange={handleChange} onClick={handleAdd}  />

        <div className="mt-8">
          <TodoList>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                isEditing={editId === todo.id}
                value={editText}
                onClickDelete={() => handleDelete(todo.id)}
                onClickEdit={() => startEdit(todo.id, todo.text)}
                onChange={handleEditChange}
                onClickSave={handleSave}
                onClickCancel={handleCancel}
              />
            ))}
          </TodoList>
        </div>
      </div>
    </div>
  );
}