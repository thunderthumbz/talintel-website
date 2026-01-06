import { useState } from "react";
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
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" onClick={(e) => scrollToSection(e, "#hero")} className="group">
          <span className={cn("font-logo text-2xl font-bold tracking-tight", isScrolled ? "text-primary" : "text-white")}>
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
          className="md:hidden p-2 relative z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Sticky CTA Button - Fixed at top of viewport */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-white border-t border-gray-200 p-4 safe-area-inset-bottom"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Button
          onClick={() => {
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
          }}
          className="w-full font-semibold py-3 rounded-sm border-none bg-primary text-white hover:bg-primary/90 active:scale-95 transition-all duration-300"
        >
          Schedule a consultation
        </Button>
      </motion.div>

      {/* Add padding to body to prevent button overlap on mobile */}
      <style>{`
        @media (max-width: 767px) {
          main {
            padding-bottom: 5rem;
          }
        }
      `}</style>

      {/* Mobile Menu Overlay - Fixed positioning with proper z-index */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-0 right-0 z-40 bg-white shadow-lg p-6 md:hidden flex flex-col gap-4"
            style={{ top: isScrolled ? '4rem' : '5.5rem' }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100 last:border-0"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
