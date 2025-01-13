import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProjectCardProps {
  title: string
  description: string
  progress: number
  dueDate: string
  members: { name: string; avatar: string }[]
}

export function ProjectCard({ title, description, progress, dueDate, members }: ProjectCardProps) {
  return (
    <Card className="bg-glass backdrop-blur">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Due {dueDate}</span>
          <div className="flex -space-x-2">
            {members.map((member, index) => (
              <Avatar key={index} className="border-2 border-background w-8 h-8">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

