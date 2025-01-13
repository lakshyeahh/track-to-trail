// Define a Task type to represent the structure of a task object
import { Task } from "@/store/useTaskStore";

// The function's return type will be a promise that resolves to an array of Task objects
export const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch('/api/tasks');
  
  // If the response is not OK, throw an error
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  
  // Return the response data as JSON, which will be an array of tasks
  return response.json();
};
