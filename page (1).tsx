import { Suspense } from "react";
import MouseMoveEffect from "@/components/mouse-move-effect";
import Hero from "@/components/hero";
import GlassmorphismCard from "@/components/glassmorphism-card";
import ProjectGrid from "@/components/project-grid";
import { getVideoCategoriesWithCountIncludingAll, getAllVideoProjectsFlattened } from "@/lib/helper";
import { Scissors, Captions, Smartphone, PlaySquare, Megaphone, Sparkles, Wand2 } from "lucide-react";

const services = [
  { title: "Clean Professional Edits", description: "Sharp pacing, clean cuts, balanced sound and polished storytelling.", icon: Scissors },
  { title: "Professional Captions", description: "Readable, engaging captions designed for modern short-form content.", icon: Captions },
  { title: "UGC Ads", description: "UGC-style product creatives built for attention, clarity and conversion.", icon: Smartphone },
  { title: "Faceless Videos", description: "Retention-focused faceless content using visuals, voiceover, graphics and rhythm.", icon: PlaySquare },
  { title: "Promotional Videos", description: "Product and brand edits with strong visual hierarchy and commercial polish.", icon: Megaphone },
  { title: "Motion Graphics", description: "Kinetic typography, transitions and motion systems that support the story.", icon: Sparkles },
  { title: "AI Video Production", description: "Modern AI-assisted workflows for creative concepts, UGC and product videos.", icon: Wand2 },
];

export default function HomePage() {
  const categories = getVideoCategoriesWithCountIncludingAll();
  const allProjects = getAllVideoProjectsFlattened();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <MouseMoveEffect />
      <Hero />

      <section id="projects" className="py-20 px-4 sm:px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />
            <p className="text-red-400 text-xs tracking-[0.3em] uppercase mb-4 relative z-10">Selected Work</p>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight relative z-10">Projects that move.</h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Clean edits, captions, UGC ads, faceless content, promotional videos and motion work — organized so you can keep updating the portfolio over time.
            </p>
          </div>

          <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading projects...</div>}>
            <ProjectGrid initialCategories={categories} initialProjects={allProjects} />
          </Suspense>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-400 text-xs tracking-[0.3em] uppercase mb-4">Services</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Editing built for attention.</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A focused set of creative services for creators, brands and social-first content.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <GlassmorphismCard key={service.title} className="p-8 h-full flex flex-col group hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(220,38,38,0.12)] transition-all duration-300">
                  <div className="w-12 h-12 mb-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-red-400" size={23} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </GlassmorphismCard>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
