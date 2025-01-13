import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Website Redesign",
    description: "Revamp the company website with a modern, responsive design",
    progress: 75,
    dueDate: "Aug 15",
    members: [
      { name: "Alice Johnson", avatar: "https://i.pravatar.cc/150?img=1" },
      { name: "Bob Smith", avatar: "https://i.pravatar.cc/150?img=2" },
      { name: "Charlie Brown", avatar: "https://i.pravatar.cc/150?img=3" },
    ],
  },
  {
    title: "Mobile App Development",
    description: "Create a cross-platform mobile app for task management",
    progress: 40,
    dueDate: "Sep 30",
    members: [
      { name: "Diana Prince", avatar: "https://i.pravatar.cc/150?img=4" },
      { name: "Ethan Hunt", avatar: "https://i.pravatar.cc/150?img=5" },
    ],
  },
  {
    title: "Data Analytics Dashboard",
    description: "Develop a real-time analytics dashboard for business insights",
    progress: 60,
    dueDate: "Oct 15",
    members: [
      { name: "Fiona Gallagher", avatar: "https://i.pravatar.cc/150?img=6" },
      { name: "George Lucas", avatar: "https://i.pravatar.cc/150?img=7" },
      { name: "Hannah Montana", avatar: "https://i.pravatar.cc/150?img=8" },
    ],
  },
  {
    title: "E-commerce Platform",
    description: "Build a scalable e-commerce platform with payment integration",
    progress: 25,
    dueDate: "Nov 30",
    members: [
      { name: "Ian Malcolm", avatar: "https://i.pravatar.cc/150?img=9" },
      { name: "Julia Roberts", avatar: "https://i.pravatar.cc/150?img=10" },
    ],
  },
  {
    title: "AI Chatbot Integration",
    description: "Implement an AI-powered chatbot for customer support",
    progress: 10,
    dueDate: "Dec 31",
    members: [
      { name: "Kevin Hart", avatar: "https://i.pravatar.cc/150?img=11" },
      { name: "Lila Wolfe", avatar: "https://i.pravatar.cc/150?img=12" },
      { name: "Mike Tyson", avatar: "https://i.pravatar.cc/150?img=13" },
    ],
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

