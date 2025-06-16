import ProjectList from '@/components/ProjectList';

export default function ProjectsPage() {
  const sampleProjects = [
    {
      title: "E-Commerce Platform",
      websiteLink: "https://mystore-demo.vercel.app",
      youtubeLink: "https://youtube.com/watch?v=demoVideo1",
      githubLink: "https://github.com/username/ecommerce-platform",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
      description: "Full-stack e-commerce platform with cart functionality, payment processing, and admin dashboard",
      image: "/projects/ecommerce-platform.jpg"
    },
    {
      title: "Task Management App",
      websiteLink: "https://taskflow-app.netlify.app",
      youtubeLink: "https://youtube.com/watch?v=demoVideo2",
      githubLink: "https://github.com/username/task-manager",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "Material-UI"],
      description: "Collaborative task management tool with real-time updates, team collaboration, and progress tracking",
      image: "/projects/task-manager.jpg"
    },
    {
      title: "Weather Dashboard",
      websiteLink: "https://weather-dashboard-live.vercel.app",
      youtubeLink: "https://youtube.com/watch?v=demoVideo3",
      githubLink: "https://github.com/username/weather-dashboard",
      technologies: ["Vue.js", "JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      description: "Interactive weather dashboard with 7-day forecasts, interactive maps, and weather alerts",
      image: "/projects/weather-dashboard.jpg"
    },
    {
      title: "Social Media Clone",
      websiteLink: "https://social-app-clone.herokuapp.com",
      youtubeLink: "https://youtube.com/watch?v=demoVideo4",
      githubLink: "https://github.com/username/social-media-clone",
      technologies: ["React", "Firebase", "Redux", "Styled Components", "Cloud Storage"],
      description: "Instagram-inspired social media app with photo sharing, real-time messaging, and user profiles",
      image: "/projects/social-media-clone.jpg"
    },
    {
      title: "Expense Tracker",
      websiteLink: "https://expense-tracker-pro.netlify.app",
      youtubeLink: "https://youtube.com/watch?v=demoVideo5",
      githubLink: "https://github.com/username/expense-tracker",
      technologies: ["React Native", "Expo", "SQLite", "React Navigation", "Recharts"],
      description: "Mobile expense tracking app with budget management, category insights, and spending analytics",
      image: "/projects/expense-tracker.jpg"
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