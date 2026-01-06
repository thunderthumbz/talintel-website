import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/generated_images/dark_blue_geometric_corporate_background.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        
        {/* Animated Grid Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-[0.12]"
          initial={{ scale: 1, opacity: 0.08 }}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            backgroundImage: `linear-gradient(to right, #38b6ff 1px, transparent 1px), linear-gradient(to bottom, #38b6ff 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="mb-8">
             <span className="font-logo text-6xl md:text-8xl font-bold tracking-tight block mb-2 drop-shadow-xl">
              <span className="text-secondary">TAL</span>
              <span className="text-white">INTEL</span>
            </span>
          </div>
          
          <h2 
            className="text-3xl md:text-5xl font-extrabold font-heading uppercase tracking-tighter bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)', letterSpacing: '-0.02em' }}
          >
            Strategic hiring clarity for Europe's tech and gaming leaders
          </h2>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-[1.6] font-light">
            TALINTEL helps CEOs, CTOs, and Heads of Talent de-risk critical leadership hires, build resilient talent pipelines, and turn hiring into a repeatable advantage, not a last-minute fire drill.
          </p>
          
          <div className="text-sm font-medium text-gray-300 uppercase tracking-widest mt-4">
            20+ years leading global talent across tech and gaming industries in North America, Europe, and APAC.
          </div>

          <div className="pt-8 flex flex-col items-center gap-4">
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 0px rgba(34, 211, 238, 0)",
                  "0 0 25px rgba(34, 211, 238, 0.4)",
                  "0 0 0px rgba(34, 211, 238, 0)"
                ] 
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-none"
            >
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 h-auto rounded-none uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(56,182,255,0.6)]"
              >
                Schedule a 30-minute diagnostic
              </Button>
            </motion.div>
            <p className="text-sm text-gray-400 italic">
              No pitch. A focused review of your current hiring risks and decisions.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity: indicatorOpacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => document.querySelector('#what-we-do')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Scroll</span>
          <ChevronDown className="w-6 h-6 text-accent" />
        </div>
      </motion.div>
    </section>
  );
}
