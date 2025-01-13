import { TaskList } from '@/components/task-list'
import { MeetingsList } from '@/components/meetings-list'
import { ActivityChart } from '@/components/activity-chart'
import { ProjectsChart } from '@/components/projects-chart'
import { RemindersList } from '@/components/reminders-list'
import { Timeline } from '@/components/timeline'

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <TaskList />
        </div>
        <div className="space-y-4">
          <ActivityChart />
          <ProjectsChart />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <Timeline />
        </div>
        <div className="space-y-4">
          <MeetingsList />
          <RemindersList />
        </div>
      </div>
    </div>
  )
}

