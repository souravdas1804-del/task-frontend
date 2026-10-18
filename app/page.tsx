"use client";

import { useEffect, useState } from "react";

interface Task {
  id: number;
  title: str;
  is_completed: boolean;
}

const API_BASE_URL = "http://127.0.0.1:8000";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [loading, setLoading] = useState(true);

  // 1. Fetch tasks on initial load
  const fetchTasks = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/tasks`);
      if (!res.ok) throw new Error("Failed to load tasks");
      const data: Task[] = await res.json();
      setTasks(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // 2. Create Task (POST)
  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    try {
      const res = await fetch(`${API_BASE_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle }),
      });

      if (res.ok) {
        const createdTask: Task = await res.json();
        setTasks((prev) => [...prev, createdTask]);
        setNewTitle("");
      }
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  // 3. Toggle Status (PUT)
  const handleToggleTask = async (id: number) => {
    try {
      const res = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: "PUT",
      });

      if (res.ok) {
        const updatedTask: Task = await res.json();
        setTasks((prev) =>
          prev.map((task) => (task.id === id ? updatedTask : task))
        );
      }
    } catch (err) {
      console.error("Error toggling task:", err);
    }
  };

  // 4. Delete Task (DELETE)
  const handleDeleteTask = async (id: number) => {
    try {
      const res = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setTasks((prev) => prev.filter((task) => task.id !== id));
      }
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold mb-6 text-slate-50 tracking-tight">
          Task Tracker
        </h1>

        {/* Input Form */}
        <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
          >
            Add
          </button>
        </form>

        {/* Tasks List */}
        {loading ? (
          <p className="text-sm text-slate-400">Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p className="text-sm text-slate-500">No tasks yet. Create one above.</p>
        ) : (
          <ul className="space-y-3">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between p-3 bg-slate-800/60 border border-slate-700/50 rounded-lg"
              >
                <div
                  onClick={() => handleToggleTask(task.id)}
                  className="flex items-center gap-3 cursor-pointer select-none flex-1"
                >
                  <input
                    type="checkbox"
                    checked={task.is_completed}
                    readOnly
                    className="h-4 w-4 rounded border-slate-600 text-blue-600 focus:ring-0 cursor-pointer"
                  />
                  <span
                    className={`text-sm ${
                      task.is_completed
                        ? "line-through text-slate-500"
                        : "text-slate-200"
                    }`}
                  >
                    {task.title}
                  </span>
                </div>

                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="text-xs text-rose-400 hover:text-rose-300 px-2 py-1 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}