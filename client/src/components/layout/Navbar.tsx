import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "What We Do", href: "#what-we-do" },
  { name: "Why TALINTEL", href: "#why-talintel" },
  { name: "For Candidates", href: "#for-candidates" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCTA, setShowCTA] = useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = useRef<number>(0);
  const idleTimer = useRef<number | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Mobile CTA show/hide logic (progressive enhancement)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const delta = y - lastScrollY.current;

      // If scrolling downwards, show CTA. If user scrolls up quickly, hide CTA.
      if (delta > 0) {
        setShowCTA(true);
      } else if (delta < -20) {
        setShowCTA(false);
      }

      lastScrollY.current = y;

      // Idle pause: show CTA after brief idle when not hidden by menu
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => {
        if (!mobileMenuOpen) setShowCTA(true);
      }, 900);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-300",
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      )}
      style={{ height: 56 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="group flex items-center md:block w-11 h-11 md:w-auto md:h-auto"
          aria-label="Home"
        >
          {/* Mobile: show square favicon (40-44px, 44px tap target) */}
          <img
            src="/favicon-32x32.png"
            alt="TALINTEL"
            className={cn("w-10 h-10 md:hidden rounded-sm", isScrolled ? "" : "")}
            style={{ width: 40, height: 40 }}
          />

          {/* Desktop: keep wordmark unchanged */}
          <span className={cn("hidden md:inline-block font-logo text-2xl font-bold tracking-tight", isScrolled ? "text-primary" : "text-white")}>
            <span className="text-secondary">TAL</span>
            <span className={cn("transition-colors", isScrolled ? "text-primary" : "text-white group-hover:text-white/90")}>INTEL</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "text-sm font-semibold transition-all relative group/nav",
                isScrolled ? "text-gray-700 hover:text-secondary" : "text-gray-200 hover:text-white"
              )}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover/nav:w-full" />
            </a>
          ))}
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 0px rgba(34, 211, 238, 0)",
                "0 0 15px rgba(34, 211, 238, 0.4)",
                "0 0 0px rgba(34, 211, 238, 0)"
              ] 
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-none"
          >
            <Button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              size="sm"
              className={cn(
                "font-semibold transition-all h-9 px-4 rounded-none border-none",
                "hover:scale-105 active:scale-95 duration-300",
                isScrolled 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "bg-white text-primary hover:bg-white/90"
              )}
            >
              Schedule a consultation
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-[1010] flex items-center justify-center w-11 h-11"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Open navigation"
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Sticky CTA Button - fixed near bottom, auto-hide via transform */}
      <motion.div
        className="fixed left-0 right-0 md:hidden z-[900] px-4 pointer-events-none"
        initial={false}
        animate={{ y: showCTA && !mobileMenuOpen ? 0 : 84, opacity: showCTA && !mobileMenuOpen ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ bottom: 16 }}
      >
        <div className="max-w-xl mx-auto pointer-events-auto">
          <Button
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              setMobileMenuOpen(false);
            }}
            className="w-full font-semibold h-12 max-h-[48px] rounded-full border-none bg-primary text-white hover:bg-primary/90 active:scale-95 transition-all duration-200"
          >
            Schedule a consultation
          </Button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay - Fixed positioning with proper z-index */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[1100] bg-white overflow-auto md:hidden"
          >
            <div className="p-6 pt-20 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <a href="#" onClick={(e) => scrollToSection(e, "#hero")} aria-label="Home">
                  <img src="/favicon-32x32.png" alt="TALINTEL" className="w-10 h-10" style={{ width: 40, height: 40 }} />
                </a>
                <button className="w-11 h-11 flex items-center justify-center" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation">
                  <X />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-lg font-medium text-gray-800 py-3 border-b border-gray-100 last:border-0"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
