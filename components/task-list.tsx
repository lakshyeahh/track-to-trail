'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Play, Pause } from 'lucide-react'
import { useQuery } from '@tanstack/react-query';
import { fetchTasks } from '../utils/fetchTasks';
import { Task } from '@/store/useTaskStore';


interface task {
  id: number;
  title: string;
  project: string;
  isStarred: boolean;
  status: string;
}

export function TaskList() {

  const { data: tasks, isLoading, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });

  if (isLoading) return <div>Loading tasks...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Card className="bg-background/60 backdrop-blur">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Today's tasks</CardTitle>
        <span className="text-muted-foreground">3</span>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks? (tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{task.title}</h3>
                {task.isStarred && <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />}
              </div>
              <p className="text-sm text-muted-foreground">{task.project}</p>
            </div>
            <Button variant="ghost" size="icon">
              {task.status === 'paused' ? (
                <Play className="h-4 w-4" />
              ) : (
                <Pause className="h-4 w-4" />
              )}
            </Button>
          </div>
        ))
      ) : (
        <div>No tasks available.</div> 
      )}
      </CardContent>
    </Card>
  )
}

