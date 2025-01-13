'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const reminders = [
  {
    time: '09:30',
    title: 'Check test results',
    priority: 'low'
  },
  {
    time: '10:00',
    title: 'Client Presentation',
    priority: 'high'
  },
  {
    time: '04:15',
    title: 'Add new Node.js Developer position',
    priority: 'high'
  }
]

export function RemindersList() {
  return (
    <Card className="bg-background/60 backdrop-blur">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Reminders</CardTitle>
        <Button variant="link" className="text-blue-500">
          Manage
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {reminders.map((reminder, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold">{reminder.time}</span>
                <span className="text-xs uppercase">
                  {reminder.time.includes(':') ? 'AM' : 'PM'}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{reminder.title}</p>
            </div>
            <div
              className={`h-2 w-2 rounded-full ${
                reminder.priority === 'high' ? 'bg-red-500' : 'bg-green-500'
              }`}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

