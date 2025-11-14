import { ChangeEvent, useCallback, useState } from "react";
import { Todotype } from "../type/Todos";
import useLocalStorage from "@/hooks/useLocalStorage";
import { flushSync } from "react-dom";

export default function useTodo() {
  const [todos, setTodos] = useLocalStorage<Todotype[]>("todos", []);
  const [nextId, setNextId] = useLocalStorage<number>("nextTodoId", 1);

  const [value, setValue] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    if (!value.trim()) return;
    const newTodo: Todotype = { id: nextId, text: value.trim() };
    setTodos((prev) => [...prev, newTodo]);
    setNextId(nextId + 1);
    setValue("");

    flushSync(() => {
      setTodos((prev) => [...prev, newTodo]);
      setNextId(nextId + 1);
    });
    setValue("");
  }, [value, nextId, setTodos, setNextId]);

  const handleDelete = useCallback(
    (id: number) => {
      setTodos((prev) => prev.filter((t) => t.id !== id));
    },
    [setTodos]
  );

  const startEdit = useCallback((id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  }, []);

  const handleEditChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  }, []);

  const handleSave = useCallback(() => {
    if (editId === null || !editText.trim()) return;
    setTodos((prev) =>
      prev.map((t) => (t.id === editId ? { ...t, text: editText.trim() } : t))
    );
    setEditId(null);
    setEditText("");
  }, [editId, editText, setTodos]);

  const handleCancel = useCallback(() => {
    setEditId(null);
    setEditText("");
  }, []);

  return {
    todos,
    value,
    editId,
    editText,
    handleChange,
    handleAdd,
    handleDelete,
    startEdit,
    handleEditChange,
    handleSave,
    handleCancel,
  };
}
