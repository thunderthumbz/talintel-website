import { motion, useAnimation } from "framer-motion";
import { Search, Globe, TrendingUp, Workflow, Bot, UserPlus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useMobileScrollAnimation } from "@/hooks/use-mobile-scroll-animation";
import { useRef, useEffect } from "react";

const services = [
  {
    icon: Workflow,
    title: "Hiring Process Optimization",
    description: (
      <>
        Reduce decision time without lowering the bar.
        <br /><br />
        We identify where hiring processes break under pressure and redesign them to produce consistent, high-quality decisions, without adding unnecessary steps or tools.
        <br /><br />
        <span className="inline-block ml-0 mt-4 px-4 py-1 text-[13px] font-semibold uppercase rounded-lg bg-gray-100 text-primary break-words transition-colors duration-200 hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white">
          Best for teams scaling engineering, product, or leadership hires under time constraints.
        </span>
      </>
    )
  },
  {
    icon: UserPlus,
    title: "Fractional Talent Leadership",
    description: (
      <>
        Senior talent leadership when it matters most.
        <br /><br />
        Embedded Head-of-Talent support for organizations navigating growth, restructuring, or transition, without committing to a full-time executive.
        <br /><br />
        <span className="inline-block ml-0 mt-4 px-4 py-1 text-[13px] font-semibold uppercase rounded-lg bg-gray-100 text-primary break-words transition-colors duration-200 hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white">
          Best for post-funding scaleups, new studios, or leadership gaps.
        </span>
      </>
    ),
    isCore: true
  },
  {
    icon: TrendingUp,
    title: "Hiring Analytics & Forecasting",
    description: (
      <>
        Understand what's happening inside your hiring process.
        <br /><br />
        We analyze your ATS data and build dynamic dashboards that show where your pipeline is breaking, how long roles actually take to fill, and which bottlenecks are costing you time and talent.
        <br /><br />
        <span className="inline-block ml-0 mt-4 px-4 py-1 text-[13px] font-semibold uppercase rounded-lg bg-gray-100 text-primary break-words transition-colors duration-200 hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white">
          Best for companies who know they're hiring but can't see why it's slow, inconsistent, or inefficient.
        </span>
      </>
    )
  },
  {
    icon: Search,
    title: "Critical Role Search",
    description: (
      <>
        Precision search for roles that cannot fail.
        <br /><br />
        Targeted, discreet search for senior and leadership hires, niche technical specialists, and hard-to-fill positions where quality, alignment, and long-term fit matter more than speed.
        <br /><br />
        <span className="inline-block ml-0 mt-4 px-4 py-1 text-[13px] font-semibold uppercase rounded-lg bg-gray-100 text-primary break-words transition-colors duration-200 hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white">
          Best for executives, technical leaders, and mission-critical roles.
        </span>
      </>
    ),
    isCore: true
  },
  {
    icon: Globe,
    title: "Talent & Market Intelligence",
    description: (
      <>
        Understand what's happening outside your company.
        <br /><br />
        We research and map external talent markets to show you where candidates actually are, what they're paid, and who else is competing for them.
        <br /><br />
        <span className="inline-block ml-0 mt-4 px-4 py-1 text-[13px] font-semibold uppercase rounded-lg bg-gray-100 text-primary break-words transition-colors duration-200 hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white">
          Best for expansion planning, market entry decisions, and understanding if a role is even fillable before you post it.
        </span>
      </>
    )
  },
  {
    icon: Bot,
    title: "Automation & AI Advisory",
    description: (
      <>
        Use technology to support decisions, not replace them.
        <br /><br />
        We guide teams to use automation and AI wisely, focusing on what’s practical and aligned with their needs rather than chasing the newest tools.
        <br /><br />
        <span className="inline-block ml-0 mt-4 px-4 py-1 text-[13px] font-semibold uppercase rounded-lg bg-gray-100 text-primary break-words transition-colors duration-200 hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white">
          Best for organizations overwhelmed by tools but lacking clarity.
        </span>
      </>
    )
  }
];

export function Services() {
  const isMobile = useMobileScrollAnimation();
  const mobileControls = useAnimation();
  const desktopInit = { opacity: 0, y: 10, scale: 0.995 };
  const desktopAnimate = { opacity: 1, y: 0, scale: 1 };

  return (
    <section id="what-we-do" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-primary mb-6 uppercase tracking-widest"
          >
            What We Do
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed space-y-4"
          >
            <p>
              TALINTEL works with companies where hiring outcomes matter and the margin for error is low.
            </p>
            <p>
              We deliver quality, clarity, and execution when the stakes are high and the timelines are tight.
            </p>
            <p>
              No volume. No theory. Only impact.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const cardRef = useRef<HTMLDivElement>(null);

            // ✅ Mobile scroll effect
            useEffect(() => {
              if (!isMobile || !cardRef.current) return;

              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    mobileControls.start({ opacity: 1, y: 0 });
                    observer.unobserve(entry.target);
                  }
                },
                { threshold: 0.15 }
              );

              observer.observe(cardRef.current);

              return () => observer.disconnect();
            }, [isMobile]);

            return (
              <motion.div
                key={index}
                ref={cardRef}
                initial={isMobile ? { opacity: 0, y: 20 } : desktopInit}
                animate={isMobile ? mobileControls : desktopAnimate}
                whileInView={!isMobile ? desktopAnimate : undefined}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <Card
                  className={cn(
                    "h-full border-l-4 bg-white shadow-sm transition-all duration-300 group relative",
                    "hover:shadow-2xl hover:-translate-y-3 md:hover:scale-[1.02] hover:border-l-accent",
                    "active:scale-[0.98] focus-within:ring-2 focus-within:ring-accent outline-none",
                    service.isCore 
                      ? "border-l-accent ring-1 ring-accent/20 shadow-accent/5 hover:ring-accent/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]" 
                      : "border-l-secondary"
                  )}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="inline-flex items-center justify-center p-3 rounded-lg bg-secondary/10 group-hover:bg-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <service.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300" />
                      </div>
                      {service.isCore && (
                        <span className="text-[11px] font-bold uppercase tracking-tighter bg-accent text-white px-2 py-1 rounded-sm shadow-sm">Core Offering</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 group-hover:after:w-full">
                      {service.title}
                    </h3>
                    <div className="w-full h-[1px] bg-gray-100 mb-4" />
                    <div className="text-gray-600 text-base leading-[1.7] text-left">
                      {service.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-primary text-white p-8 md:p-12 text-center rounded-sm shadow-2xl"
        >
          <p className="text-xl md:text-2xl font-light italic">
            "Each engagement is designed around real constraints: market conditions, internal capacity, and business priorities."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
