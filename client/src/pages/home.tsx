import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Candidates } from "@/components/sections/Candidates";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <main>
        <Hero />

        {/* Everything below Hero gets white */}
        <section className="bg-white text-slate-900">
          <Services />
          <WhyUs />
          <Candidates />
          <About />
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
