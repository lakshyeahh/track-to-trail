'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Over9k', value: 44, color: '#3b82f6' },
  { name: 'MagnumShop', value: 24, color: '#22c55e' },
  { name: 'Doctor+', value: 18, color: '#eab308' },
  { name: 'AfterMidnight', value: 14, color: '#ef4444' },
]

export function ProjectsChart() {
  return (
    <Card className="bg-background/60 backdrop-blur">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Projects worked</CardTitle>
        <span className="text-red-500">-5%</span>
      </CardHeader>
      <CardContent>
        <div className="flex">
          <div className="h-[160px] w-[160px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="ml-4 space-y-2">
            {data.map((item) => (
              <div key={item.name} className="flex items-center">
                <div
                  className="h-3 w-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                />
                <div className="space-x-2">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-sm text-muted-foreground">{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

