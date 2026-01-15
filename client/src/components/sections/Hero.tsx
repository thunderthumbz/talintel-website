import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/generated_images/dark_blue_geometric_corporate_background.webp";

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Responsive grid sizes
  const backgroundSize =
    typeof window !== "undefined" && window.innerWidth < 768 ? "40px 40px" : "60px 60px";
  const animationDuration =
    typeof window !== "undefined" && window.innerWidth < 768 ? 14 : 10;

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Parallax Background — UNCHANGED */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          y,
          opacity,
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Gradient blend behind the grid — subtle ambient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/20 to-primary/30 pointer-events-none z-0" />

      {/* Ambient Animated Grid Overlay — RESPONSIVE */}
      <motion.div
        className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none"
        initial={{ scale: 1, opacity: 0.08 }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "linear-gradient(to right, #38b6ff 1px, transparent 1px), linear-gradient(to bottom, #38b6ff 1px, transparent 1px)",
          backgroundSize: backgroundSize,
        }}
      />

      {/* Content Layer — UNCHANGED */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-14 text-center text-white">
        <div className="max-w-4xl space-y-8">
          <h1 className="font-logo text-6xl md:text-8xl font-bold">
            <span className="text-secondary">TAL</span>INTEL
          </h1>

          <h2 className="text-3xl md:text-5xl font-extrabold">
            Clear, Strategic Hiring for Tech and Gaming Leaders
          </h2>

          <p className="text-lg text-gray-200">
            TALINTEL partners with executive and talent leaders to de-risk
            critical hires and build durable talent advantage.
          </p>

          {/* CTA Button — ENHANCED WITH SCALE */}
          <Button
            size="lg"
            onClick={scrollToContact}
            className="rounded-none bg-accent text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Schedule a consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
