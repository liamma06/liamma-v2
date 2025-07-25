'use client'

import { useState } from 'react';
import Image from 'next/image';
import { FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import AnimatedLink from './AnimatedLink';
import VideoModal from "./VideoModal";

export interface Project {
  title: string;
  websiteLink: string;
  youtubeLink: string;
  githubLink: string;
  technologies: string[];
  description: string;
  images: string[]; // Changed from 'image' to 'images' array
}

export default function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const hasMultipleImages = project.images.length > 1;

  return (
    <div className="bg-zinc-200/30 dark:bg-zinc-900/30 border border-zinc-300 dark:border-zinc-700 rounded-lg overflow-hidden hover:bg-zinc-300/40 dark:hover:bg-zinc-800/40 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-sm transition-all duration-200">
      {/* Project Image Carousel */}
      <div className="w-full h-48 relative bg-zinc-400 dark:bg-zinc-700 flex items-center justify-center overflow-hidden group">
        {project.images.length > 0 ? (
          <>            
          {/* Main Image */}
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-all duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => {
                // Note: Next.js Image component handles errors differently
                // We'll need to use a state-based approach for fallback
              }}
            />
            
            {/* Fallback placeholder (hidden by default) */}
            <div className="absolute inset-0 bg-zinc-400 dark:bg-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 text-sm" style={{ display: 'none' }}>
              📸 Project Screenshot
            </div>            
            {/* Navigation Arrows - Only show if multiple images */}
            {hasMultipleImages && (
              <>                
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 hover:scale-105 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                    <FiChevronLeft size={18} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 hover:scale-105 backdrop-blur-sm"
                  aria-label="Next image"
                >
                    <FiChevronRight size={18} />
                </button>
                
                {/* Image indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          // Default placeholder when no images
          <div className="text-zinc-600 dark:text-zinc-300 text-sm">
            📸 Project Screenshot
          </div>
        )}
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
                    {project.youtubeLink && (
                      <VideoModal 
                        videoUrl={project.youtubeLink} 
                        projectTitle={project.title}
                      />
                    )}
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
                    className="px-2 py-1 text-xs rounded-md font-medium bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
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