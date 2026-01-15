import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

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

  // 🔹 Mobile sticky CTA state
  const [showCTA, setShowCTA] = useState(true);
  const lastScrollY = useRef<number>(0);
  const idleTimer = useRef<number | null>(null);

  // Navbar background scroll logic
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile CTA scroll-direction logic
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const delta = y - lastScrollY.current;

      if (delta > 0) setShowCTA(true);
      else if (delta < -20) setShowCTA(false);

      lastScrollY.current = y;

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

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-14 transition-colors duration-300",
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, "#hero")}
          className="flex items-center gap-2"
        >
          <img
            src="/favicon-32x32.png"
            alt="TALINTEL"
            className="h-10 w-10 md:hidden"
          />
          <span
            className={cn(
              "hidden md:inline-block font-logo text-2xl font-bold",
              isScrolled ? "text-primary" : "text-white"
            )}
          >
            <span className="text-secondary">TAL</span>INTEL
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className={cn(
                "text-sm font-semibold relative transition-all group/nav",
                isScrolled
                  ? "text-gray-700 hover:text-secondary"
                  : "text-gray-200 hover:text-white"
              )}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover/nav:w-full" />
            </a>
          ))}

          {/* Desktop / Tablet CTA */}
          <Button
            size="sm"
            onClick={(e) => scrollTo(e, "#contact")}
            className={cn(
              "rounded-none px-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
              isScrolled
                ? "bg-primary text-white"
                : "bg-accent text-white"
            )}
          >
            Schedule a consultation
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? (
            // X button always primary
            <X className="text-primary transition-colors duration-300" />
          ) : (
            // Menu white on load, primary on scroll
            <Menu
              className={cn(
                "transition-colors duration-300",
                isScrolled ? "text-primary" : "text-white"
              )}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[1100] bg-white md:hidden"
          >
            <div className="p-6 pt-20 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className="block text-lg font-medium text-gray-800"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky CTA */}
      <motion.div
        className="fixed left-0 right-0 md:hidden z-[900] px-4 pointer-events-none"
        initial={false}
        animate={{
          y: showCTA && !mobileMenuOpen ? 0 : 84,
          opacity: showCTA && !mobileMenuOpen ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ bottom: 16 }}
      >
        <div className="max-w-xl mx-auto pointer-events-auto">
          <Button
            onClick={(e) => scrollTo(e as any, "#contact")}
            className="w-full font-semibold h-12 max-h-[48px] rounded-full border-none bg-accent text-white hover:bg-primary/90 active:scale-95 transition-all duration-200"
          >
            Schedule a consultation
          </Button>
        </div>
      </motion.div>
    </nav>
  );
}