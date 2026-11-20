/**
 * App.jsx — ORIGINAL (buggy) version, kept for the debugging exercise.
 * Run it with `npm run dev:buggy` and open React Developer Tools.
 * See DEBUGGING.md for how each problem was found and fixed.
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';
import Stats from './components/Stats';
import './App.css';

const initialTasks = [
  { id: 1, title: 'Install React Developer Tools', done: true },
  { id: 2, title: 'Inspect the component tree', done: false },
  { id: 3, title: 'Fix the bugs', done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const remaining = tasks.filter((t) => !t.done).length;
    document.title = `${remaining} ${remaining === 1 ? 'task' : 'tasks'} left`;
  }, []);

  const addTask = (title) => {
    tasks.push({ id: Date.now(), title, done: false });
    setTasks(tasks);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const visibleTasks = tasks.filter((t) => {
    if (filter === 'active') return !t.done;
    if (filter === 'done') return t.done;
    return filter === 'all';
  });

  return (
    <div className="app">
      <Header taskCount={tasks.length} />

      <AddTaskForm onAdd={addTask} />

      <FilterBar filter={filter} onChange={setFilter} />

      <TaskList tasks={visibleTasks} onToggleTask={toggleTask} onDelete={deleteTask} />

      <Stats tasks={tasks} />
    </div>
  );
}
