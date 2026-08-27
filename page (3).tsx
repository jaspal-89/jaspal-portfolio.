"use client";

import { m } from "framer-motion";
import { Clapperboard, Film, Layers3, Sparkles, Wand2 } from "lucide-react";
import CTASection from "@/components/CTASection";

const strengths = [
  { num: "01", title: "Hook-first editing", description: "The first seconds should earn the viewer's attention." },
  { num: "02", title: "Retention-focused pacing", description: "Cuts, captions and visual changes are used with purpose." },
  { num: "03", title: "Clean visual storytelling", description: "Every element supports the message instead of distracting from it." },
  { num: "04", title: "Modern AI workflows", description: "AI tools are combined with traditional editing for faster creative production." },
];

const capabilities = [
  { Icon: Film, title: "Editing", description: "Premiere Pro, clean cuts, pacing, sound and finishing." },
  { Icon: Layers3, title: "Motion", description: "After Effects, kinetic typography, transitions and visual systems." },
  { Icon: Wand2, title: "AI Production", description: "AI-assisted UGC, product videos, faceless content and creative workflows." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <p className="text-red-400 text-xs tracking-[0.3em] uppercase mb-4">About</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">A creative mind built for the timeline.</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
            I'm Jaspal — a Video Editor & Creative Producer focused on clean editing, engaging storytelling, social-first content, AI UGC and modern video production.
          </p>
        </m.div>

        <div className="grid md:grid-cols-12 gap-6 mb-20">
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-7 glass-card p-8 md:p-10 min-h-[340px] flex flex-col justify-between overflow-hidden relative">
            <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-red-500/10 blur-3xl" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-8"><Clapperboard /></div>
              <p className="text-sm uppercase tracking-[0.25em] text-red-300 mb-4">JASPAL</p>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Video Editor<br /><span className="text-red-400">& Creative Producer</span></h2>
            </div>
            <p className="relative z-10 text-gray-400 max-w-2xl mt-10 leading-relaxed">
              I work across YouTube videos, Reels, Shorts, product ads, promotional edits, motion graphics, faceless content and AI-powered creative production.
            </p>
          </m.div>

          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-5 glass-card p-8 min-h-[340px] flex flex-col justify-between">
            <div className="flex items-center justify-between"><span className="text-xs uppercase tracking-[0.25em] text-gray-500">Core focus</span><Sparkles className="text-red-400" size={20} /></div>
            <div className="space-y-4">
              {["Clean professional edits", "Captions & short-form", "UGC & product ads", "Faceless & AI video"].map((item) => <div key={item} className="flex items-center gap-3 text-white"><span className="w-2 h-2 rounded-full bg-red-400" />{item}</div>)}
            </div>
          </m.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {strengths.map(({ num, title, description }) => (
            <m.div key={num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-7 flex gap-6">
              <span className="text-red-400 font-mono text-sm">{num}</span>
              <div><h3 className="text-xl font-semibold text-white mb-2">{title}</h3><p className="text-gray-400 text-sm leading-relaxed">{description}</p></div>
            </m.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {capabilities.map(({ Icon, title, description }) => (
            <div key={title} className="glass-card p-8"><Icon className="text-red-400 mb-6" size={26} /><h3 className="text-xl font-bold text-white mb-2">{title}</h3><p className="text-gray-400 text-sm leading-relaxed">{description}</p></div>
          ))}
        </div>

        <CTASection title="Have footage? Let's make it hit." description="Send your brief, reference style, timeline and budget." buttonText="Contact Me" href="/contact" />
      </div>
    </div>
  );
}
