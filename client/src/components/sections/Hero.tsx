import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/dark_blue_geometric_corporate_background.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
             <span className="font-logo text-6xl md:text-8xl font-bold tracking-tight block mb-2">
              <span className="text-secondary">TAL</span>
              <span className="text-white">INTEL</span>
            </span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-light italic text-accent font-heading">
            Talent. Intelligence. Clarity that scales.
          </h2>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
            We help companies hire better by providing data-driven insights and strategic hiring solutions. 
            Whether you're scaling a team or navigating a critical hire, we help you make smarter decisions.
          </p>

          <div className="pt-8">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 h-auto rounded-none uppercase tracking-wide transition-all hover:translate-y-[-2px] hover:shadow-lg"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
