'use client';

import { Todo } from "@/models/todo";
import { TodoService } from "@/services/todoService";
import { useEffect, useState } from "react";

export default function Home() {
  const todoService = new TodoService();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    updateTodos();
  }, []);

  const updateTodos = () => {
    const fetchTodos = async () => {
      const fetchedTodos = await todoService.getAllTodos();
      setTodos(fetchedTodos);
    };

    fetchTodos();
  }

  const handleDelete = async (id: string) => {
    await todoService.deleteTodoById(id);
    updateTodos();
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <header className="flex items-center justify-between w-full mb-8">
        <div className="text-2xl font-bold">Todo Frontend</div>
        <div className="flex items-center">
          {/* Logo goes here */}
        </div>
      </header>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{todo.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{todo.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a href="#" className="text-red-600 hover:text-red-900" onClick={() => handleDelete(todo.id)}>
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
