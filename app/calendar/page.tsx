'use client'

import { useState } from 'react'
import { Calendar } from '@/components/calendar-view'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Event {
  date: Date
  title: string
}

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [events, setEvents] = useState<Event[]>([])
  const [newEventTitle, setNewEventTitle] = useState('')

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
  }

  const handleAddEvent = () => {
    if (selectedDate && newEventTitle) {
      setEvents([...events, { date: selectedDate, title: newEventTitle }])
      setNewEventTitle('')
    }
  }

  const eventsForSelectedDate = events.filter(
    (event) => event.date.toDateString() === selectedDate?.toDateString()
  )

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Calendar</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2 bg-glass backdrop-blur">
          <CardHeader>
            <CardTitle>Monthly View</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <Card className="bg-glass backdrop-blur">
          <CardHeader>
            <CardTitle>Events for {selectedDate?.toDateString()}</CardTitle>
          </CardHeader>
          <CardContent>
            {eventsForSelectedDate.length > 0 ? (
              <ul className="space-y-2">
                {eventsForSelectedDate.map((event, index) => (
                  <li key={index} className="bg-muted p-2 rounded-md">
                    {event.title}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No events for this date.</p>
            )}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full mt-4">Add Event</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Event</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="event-title" className="text-right">
                      Title
                    </Label>
                    <Input
                      id="event-title"
                      value={newEventTitle}
                      onChange={(e) => setNewEventTitle(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <Button onClick={handleAddEvent}>Add Event</Button>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

