"use client";

import { useState } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { ExternalLink, Play, X, Video } from "lucide-react";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VideoProject } from "@/types/videos";
import { getYouTubeEmbedUrl } from "@/lib/helper";

interface ProjectCardProps { project: VideoProject; }

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = getYouTubeEmbedUrl(project.video_link);

  return (
    <GlassmorphismCard className="h-full group hover:shadow-2xl hover:shadow-red-900/10 transition-shadow duration-500 flex flex-col">
      <div className="flex flex-col h-full p-5">
        <div className="relative overflow-hidden rounded-2xl aspect-video mb-5 shadow-lg bg-gradient-to-br from-neutral-950 via-neutral-900 to-red-950/30 border border-white/10 isolate">
          <AnimatePresence mode="wait">
            {isPlaying && embedUrl ? (
              <m.div key="video-player" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20">
                <iframe src={`${embedUrl}?autoplay=1&rel=0&modestbranding=1`} title={project.video_title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full border-0" />
                <button onClick={() => setIsPlaying(false)} className="absolute top-2 right-2 bg-black/70 hover:bg-black/90 text-white p-1.5 rounded-full backdrop-blur-md transition-colors z-30" aria-label="Close preview"><X size={16} /></button>
              </m.div>
            ) : (
              <div key="placeholder" className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(220,38,38,.20), transparent 32%), radial-gradient(circle at 75% 70%, rgba(255,255,255,.06), transparent 30%)" }} />
                <div className="relative z-10 text-center px-6">
                  <div className="mx-auto mb-4 w-14 h-14 rounded-full border border-red-400/30 bg-red-500/10 flex items-center justify-center">
                    <Video className="text-red-300" size={23} />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">{embedUrl ? "Preview available" : "Video URL pending"}</p>
                </div>
                {embedUrl && (
                  <button onClick={() => setIsPlaying(true)} className="absolute inset-0 z-20 cursor-pointer" aria-label={`Play ${project.video_title}`}>
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-110 transition-transform"><Play size={21} fill="currentColor" /></span>
                  </button>
                )}
              </div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {project.category.map((category) => <Badge key={category} variant="outline" className="border-red-500/20 text-red-300 bg-red-500/5">{category}</Badge>)}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.video_title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-grow">{project.video_description}</p>

        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="text-xs text-gray-500">{project.client_name}</div>
          <div className="flex gap-2">
            <Button asChild size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/5">
              <Link href={`/project/${project.id}`}>Details</Link>
            </Button>
            {project.video_link && (
              <Button asChild size="sm" className="bg-white text-black hover:bg-gray-200">
                <a href={project.video_link} target="_blank" rel="noopener noreferrer">Watch <ExternalLink className="ml-1.5" size={14} /></a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </GlassmorphismCard>
  );
}
