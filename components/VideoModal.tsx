"use client";

import { useState } from "react";
import { FiPlay, FiX } from "react-icons/fi";

interface VideoModalProps {
  videoUrl: string;
  projectTitle: string;
}

export default function VideoModal({ videoUrl, projectTitle }: VideoModalProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>      <button
        onClick={() => setShowVideo(true)}
        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-all duration-200 hover:scale-110 hover:rotate-12"
        aria-label={`Watch ${projectTitle} demo`}
      >
        <FiPlay size={20} />
      </button>

      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              aria-label="Close video"
            >
              <FiX size={20} />
            </button>
            
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`${projectTitle} demo video`}
            />
          </div>
        </div>
      )}
    </>
  );
}