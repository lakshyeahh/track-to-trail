// src/app/api/tasks/route.ts
interface Task {
  id: number;
  title: string;
  project: string;
  isStarred: boolean;
  status: string;
}

export async function GET(): Promise<Response> {
    const tasks: Task[] = [
      {
        id: 1,
        title: 'bhenka pakoda Palette Selection',
        project: 'Over9k: Gamers App',
        isStarred: true,
        status: 'paused'
      },
      {
        id: 2,
        title: 'oink Landing page for v2',
        project: 'Guitar Tuner',
        isStarred: false,
        status: 'active'
      },
      {
        id: 3,
        title: 'oointk & functional analysis',
        project: 'Doctor+',
        isStarred: false,
        status: 'pending'
      }
    ];

  
    return new Response(JSON.stringify(tasks), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
}
  