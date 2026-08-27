"use client";

import { m } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import GlassmorphismCard from "@/components/glassmorphism-card";

const coreSkills = [
  "Video Editing", "AI UGC Product Videos", "Faceless Video Content Creation", "AI Video Production",
  "Color Grading", "Storytelling", "YouTube Editing", "Instagram Reels & Shorts", "Product Video Editing",
  "Social Media Content Creation", "Content Planning",
];

const editingTools = ["Adobe Premiere Pro", "Adobe After Effects", "CapCut Pro"];
const aiTools = ["Runway", "Higgsfield", "Google Veo", "Flow AI", "Gemini", "ChatGPT", "Grok Imagine", "Kling AI", "HeyGen", "Synthesia", "Claude AI"];

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <p className="text-red-400 text-xs tracking-[0.3em] uppercase mb-4">Toolkit</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Sharp tools. Sharper timing.</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">Editing is not only software. It is timing, taste, story and knowing exactly where a viewer might swipe away.</p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <GlassmorphismCard className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Core Skills</h2>
            <div className="flex flex-wrap gap-3">{coreSkills.map((skill) => <Badge key={skill} variant="outline" className="px-4 py-2 border-white/10 bg-white/[0.03] text-gray-200">{skill}</Badge>)}</div>
          </GlassmorphismCard>
          <GlassmorphismCard className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Editing Tools</h2>
            <div className="grid sm:grid-cols-2 gap-3">{editingTools.map((tool) => <div key={tool} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white">{tool}</div>)}</div>
          </GlassmorphismCard>
        </div>

        <GlassmorphismCard className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6">AI Video & Content Creation</h2>
          <div className="flex flex-wrap gap-3">{aiTools.map((tool) => <Badge key={tool} variant="outline" className="px-4 py-2 border-red-500/20 bg-red-500/5 text-red-200">{tool}</Badge>)}</div>
        </GlassmorphismCard>
      </div>
    </div>
  );
}
