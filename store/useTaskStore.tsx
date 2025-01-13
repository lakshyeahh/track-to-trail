'use client';

import { create } from "zustand";

// Define the shape of a Task
export interface Task {
    id: number;
    title: string;
    project: string;
    isStarred: boolean; // Ensure this property is included
    status: string;
}

// Define the shape of the store state
interface TaskStore {
    tasks: Task[];
    addTask: (task: Task) => void; // Function to add a task
}

// Create the Zustand store with type annotations
const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));

export default useTaskStore;