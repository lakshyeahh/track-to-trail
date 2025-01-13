'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Video } from 'lucide-react'

const meetings = [
  {
    id: 1,
    time: '10:00',
    title: 'Present the project and gather feedback',
    hasVideo: true
  },
  {
    id: 2,
    time: '01:00',
    title: 'Meeting with UX team',
    hasVideo: true
  },
  {
    id: 3,
    time: '03:00',
    title: 'Onboarding of the project',
    hasVideo: false
  }
]

export function MeetingsList() {
  return (
    <Card className="bg-background/60 backdrop-blur">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Today's meetings</CardTitle>
        <span className="text-muted-foreground">6</span>
      </CardHeader>
      <CardContent className="space-y-4">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{meeting.time}</span>
                {meeting.hasVideo && <Video className="h-4 w-4 text-blue-500" />}
              </div>
              <p className="text-sm text-muted-foreground">{meeting.title}</p>
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          Schedule meeting
        </Button>
      </CardContent>
    </Card>
  )
}

