import ProjectList from '@/components/ProjectList';

export default function ProjectsPage() {  const sampleProjects = [
    {
      title: "E-Commerce Platform",
      websiteLink: "https://mystore-demo.vercel.app",
      youtubeLink: "https://youtube.com/watch?v=demoVideo1",
      githubLink: "https://github.com/username/ecommerce-platform",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
      description: "Full-stack e-commerce platform with cart functionality, payment processing, and admin dashboard",
      images: ["/projects/ecommerce-platform.jpg", "/projects/ecommerce-platform-2.jpg"]
    },
    {
      title: "Task Management App",
      websiteLink: "https://taskflow-app.netlify.app",
      youtubeLink: "https://youtube.com/watch?v=demoVideo2",
      githubLink: "https://github.com/username/task-manager",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Material-UI"],
      description: "Collaborative task management tool with real-time updates, team collaboration, and progress tracking",
      images: ["/projects/task-manager.jpg"]
    },
    {
      title: "Mornings with Lebron",
      websiteLink: "https://mornings-with-lebron.vercel.app/",
      youtubeLink: "https://youtube.com/watch?v=demoVideo3",
      githubLink: "https://github.com/liamma06/mornings-with-lebron",
      technologies: ["Next.js", "TypeScript", "Chart.js", "Express.js", "Tailwind CSS", "Anthropic API"],
      description: "A prototype motivational journaling web app featuring LeBron-themed quotes and emotional insight charts.",
      images: ["/projects/lebronhome.png", "/projects/lebronstats.png"]
    },
  ];
  
  return (
    <div className="flex flex-col w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">Hopefully I can look back at the cool stuff I made</p>
      </div>
      
      <ProjectList projects={sampleProjects} />
    </div>
  );
}