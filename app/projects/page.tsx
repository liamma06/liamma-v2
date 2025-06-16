import ProjectList from '@/components/ProjectList';

export default function ProjectsPage() {  const sampleProjects = [
    {
      title: "We-Wrapped",
      websiteLink: "https://we-wrapped.vercel.app/",
      youtubeLink: "https://youtube.com/watch?v=demoVideo1",
      githubLink: "https://github.com/liamma06/we-wrapped",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      description: "A simple web app for first-year engineering students to input and visualize progress, and compare their performance to class averages",
      images: ["/projects/Wehome1.png", "/projects/Wehome2.png", "/projects/Weinput.png"]
    },
    {
      title: "Mornings with Lebron",
      websiteLink: "https://mornings-with-lebron.vercel.app/",
      youtubeLink: "https://youtube.com/watch?v=demoVideo3",
      githubLink: "https://github.com/liamma06/mornings-with-lebron",
      technologies: ["Next.js", "TypeScript", "Chart.js", "Express.js", "Tailwind CSS", "Anthropic API"],
      description: "A prototype motivational journaling web app featuring LeBron-themed quotes and emotional insight charts",
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