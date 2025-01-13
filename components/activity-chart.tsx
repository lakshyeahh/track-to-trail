'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  { name: 'Mon', value: 92 },
  { name: 'Tue', value: 41 },
  { name: 'Wed', value: 78 },
  { name: 'Thu', value: 0 },
  { name: 'Fri', value: 0 },
]

export function ActivityChart() {
  return (
    <Card className="bg-background/60 backdrop-blur">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Activity</CardTitle>
        <span className="text-green-500">+12%</span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">70%</div>
        <div className="h-[120px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Bar
                dataKey="value"
                fill="currentColor"
                radius={[4, 4, 0, 0]}
                className="fill-primary"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

