"use client";

import { m } from "framer-motion";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const honeypot = formData.get("honeypot") as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return toast("Please enter a valid email address.");
    if (!message || message.length < 20) return toast("Message should be at least 20 characters long.");
    const res = await fetch("/api/send-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, message, projectType: "Portfolio inquiry", timeline: "", honeypot }) });
    const result = await res.json();
    if (res.ok) { toast("Message sent successfully!"); form.reset(); } else toast(result.error || "Something went wrong.");
  };

  return (
    <div className="min-h-screen py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20 relative">
          <p className="text-red-400 text-xs tracking-[0.3em] uppercase mb-4">Contact</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Have footage? Let's make it hit.</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">Send your brief, reference style, timeline and budget. Let's shape it into a clean, engaging edit.</p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <GlassmorphismCard className="p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white mb-8">Contact Information</h2>
            <div className="space-y-7">
              <div className="flex gap-4 items-start"><div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20"><Mail className="text-red-300" size={20} /></div><div><p className="text-gray-500 text-sm">Email</p><a href="mailto:gamerolast47@gmail.com" className="text-white hover:text-red-300 transition-colors">gamerolast47@gmail.com</a></div></div>
              <div className="flex gap-4 items-start"><div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20"><MessageCircle className="text-red-300" size={20} /></div><div><p className="text-gray-500 text-sm">Phone / WhatsApp</p><a href="https://wa.me/919317621164" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300 transition-colors">+91 93176 21164</a></div></div>
              <div className="flex gap-4 items-start"><div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20"><MapPin className="text-red-300" size={20} /></div><div><p className="text-gray-500 text-sm">Location</p><p className="text-white">Bilaspur, Himachal Pradesh, India</p></div></div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10"><p className="text-gray-400 text-sm leading-relaxed">For project inquiries, include the type of video, platform, reference style, expected duration and timeline.</p></div>
          </GlassmorphismCard>

          <GlassmorphismCard className="p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-white mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="hidden" aria-hidden="true"><input id="honeypot" name="honeypot" type="text" tabIndex={-1} autoComplete="off" /></div>
              <div><label htmlFor="name" className="text-sm text-gray-400 mb-2 block">Name *</label><Input id="name" name="name" required /></div>
              <div><label htmlFor="email" className="text-sm text-gray-400 mb-2 block">Email *</label><Input id="email" name="email" type="email" required /></div>
              <div><label htmlFor="message" className="text-sm text-gray-400 mb-2 block">Project Brief *</label><Textarea id="message" name="message" rows={7} required placeholder="Tell me about the video, platform, style and timeline..." /></div>
              <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 h-12 rounded-full"><Send className="mr-2" size={16} /> Send Message</Button>
            </form>
          </GlassmorphismCard>
        </div>
      </div>
    </div>
  );
}
