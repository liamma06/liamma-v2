import ProjectList from '@/components/ProjectList';
import AnimatedLink from '@/components/AnimatedLink';

export default function ProjectsPage() {  const sampleProjects = [
    {
      title: "Care Bridge",
      websiteLink: "https://github.com/liamma06/Spark",
      //youtubeLink: "https://www.youtube.com/embed/n_jLcT6Ld4I",
      githubLink: "https://github.com/liamma06/Spark",      
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Python", "Cohere"],
      description: "A full-stack healthcare platform that transforms unstructured patient conversations into clinical timelines to streamline rural care coordination. Won at Spark Hacks 2026",
      images: ["/projects/Spark-1-image.jpg", "/projects/Spark-2-image.png", "/projects/Spark-3-image.png"]
    },
    {
      title: "Trash To Impress",
      websiteLink: "https://github.com/liamma06/trashtoimpress",
      youtubeLink: "https://www.youtube.com/embed/QQ1ePIDMNyg",
      githubLink: "https://github.com/liamma06/trashtoimpress",      
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "Gemini API", "LangChain","LangGraph"],
      description: "Product designing tool for reusing waste materials, powered by Gemini and LangChain workflow. Submitted to Hack the Campus",
      images: ["/projects/TTIhomepage.png", "/projects/TTIinput.png","/projects/TTI4ideas.png", "/projects/TTIedit.png", "/projects/TTILamp.png", "/projects/TTIfinal.png"]
    },
        {
      title: "We-Wrapped",
      websiteLink: "https://we-wrapped.vercel.app/",
      youtubeLink: "https://www.youtube.com/embed/n_jLcT6Ld4I",
      githubLink: "https://github.com/liamma06/we-wrapped",      
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      description: "A simple web app for first-year engineering students to input and visualize progress, and compare their performance to class averages",
      images: ["/projects/Wehome1.png", "/projects/Wehome2.png", "/projects/Weinput.png"]
    },
    {
      title: "Mornings with Lebron",
      websiteLink: "https://mornings-with-lebron.vercel.app/",
      youtubeLink: "https://www.youtube.com/embed/Sri6EJDq8gE",
      githubLink: "https://github.com/liamma06/mornings-with-lebron",      
      technologies: ["Next.js", "TypeScript", "Chart.js", "Express.js", "Tailwind CSS", "Anthropic API"],
      description: "A prototype motivational journaling web app featuring LeBron-themed quotes and emotional insight charts",
      images: ["/projects/lebronhome.png", "/projects/lebronstats.png"]
    },
    {
      title: "SQL Query",
      websiteLink: "https://askql-bt0x99yab-liamma06s-projects.vercel.app/",
      youtubeLink: "https://www.youtube.com/embed/mFFeuv-W9BI",
      githubLink: "https://github.com/liamma06/askql/tree/main",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SQLite","Redis", "Anthropic API", "GCP", "GO"],
      description: "web app for querying a csv file using natural language or SQL",
      images:["/projects/askqlMain.jpeg", "/projects/askqlDash.png", "/projects/askHistory.png"]
    }
  ];
    return (
    <div className="flex flex-col w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">Hopefully I can look back at the cool stuff I made</p>
      </div>
      
      <ProjectList projects={sampleProjects} />
      
      {/* GitHub Link */}
      <div className="flex justify-center mt-3 pt-3 dark:border-gray-700">
        <AnimatedLink 
          href="https://github.com/liamma06" 
          external={true}
          className="text-gray-700 dark:text-gray-300"
        >
          Check out my other projects
        </AnimatedLink>
      </div>
    </div>
  );
}