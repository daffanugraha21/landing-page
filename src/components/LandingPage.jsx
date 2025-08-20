"use client";

import Hero from "./Hero";
import About from "./About";

export default function LandingPage() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <About />
      <Benefit />
      <Testimoni />
      <Daftar />
    </main>
  );
}
