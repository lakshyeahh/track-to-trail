'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const timelineData = [
  {
    day: 'TUE 19',
    tasks: [
      {
        title: 'Typography & Layout Design',
        description: 'Help with choose fonts and layout elements for the design',
        priority: 'medium',
        assignees: ['JD', 'AR']
      }
    ]
  },
  {
    day: 'WED 20',
    tasks: [
      {
        title: 'Color Palette Selection',
        description: 'Create a harmonious color scheme',
        priority: 'medium',
        assignees: ['JD']
      }
    ]
  },
  {
    day: 'THU 21',
    tasks: [
      {
        title: 'User Interface (UI) Design',
        description: 'Create an appealing and visually engaging interface',
        priority: 'high',
        assignees: ['JD', 'AR', 'MK']
      }
    ]
  }
]

export function Timeline() {
  return (
    <Card className="bg-background/60 backdrop-blur">
      <CardHeader>
        <CardTitle>Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {timelineData.map((day) => (
            <div key={day.day} className="space-y-4">
              <div className="font-semibold text-sm">{day.day}</div>
              {day.tasks.map((task, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-muted/50 space-y-2"
                >
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {task.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {task.assignees.map((assignee, i) => (
                        <Avatar key={i} className="border-2 border-background">
                          <AvatarFallback>{assignee}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <div
                      className={`px-2 py-1 rounded text-xs ${
                        task.priority === 'high'
                          ? 'bg-red-500/20 text-red-500'
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}
                    >
                      {task.priority}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

