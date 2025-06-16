import { FiGithub, FiPlay } from 'react-icons/fi';
import AnimatedLink from './AnimatedLink';

interface Project {
  title: string;
  websiteLink: string;
  youtubeLink: string;
  githubLink: string;
  technologies: string[];
  description: string;
  image: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-zinc-200/30 dark:bg-zinc-900/30 border border-zinc-300 dark:border-zinc-700 rounded-lg overflow-hidden hover:bg-zinc-300/40 dark:hover:bg-zinc-800/40 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-sm transition-all duration-200">
      {/* Project Image Placeholder */}      
      <div className="w-full h-48 bg-zinc-400 dark:bg-zinc-700 flex items-center justify-center">
        <div className="text-zinc-600 dark:text-zinc-300 text-sm">
          📸 Project Screenshot
        </div>
      </div>
        {/* Content Container */}
        <div className="p-4">
            {/* Project Title with Icons */}
            <div className="flex items-center justify-between mb-2">
                <AnimatedLink 
                href={project.websiteLink}
                external={true}
                className="text-xl font-semibold text-zinc-900 dark:text-zinc-100"
                >
                    {project.title}
                </AnimatedLink>
          
                <div className="flex items-center gap-3">
                    <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-all duration-200 hover:scale-110 hover:rotate-12"
                    aria-label="GitHub Repository"
                    >
                        <FiGithub size={20} />
                    </a>            
                    <a 
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-all duration-200 hover:scale-110 hover:rotate-12"
                    aria-label="Demo Video"
                    >
                        <FiPlay size={20} />
                    </a>
                </div>        
            </div>        

            {/* Description */}
            <p className="text-zinc-600 dark:text-zinc-400 mb-3 text-sm leading-relaxed">
                {project.description}
            </p>
        
            {/* Technologies */}
            <div className="mb-2">
                <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (            
                    <span 
                    key={index}
                    className="px-2 py-1 text-xs rounded-md font-medium bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                        {tech}
                    </span>
                ))}
                </div>
            </div>
        </div>
    </div>
  );
}