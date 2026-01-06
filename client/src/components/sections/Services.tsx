import { motion } from "framer-motion";
import { Search, Globe, TrendingUp, Workflow, Bot, UserPlus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Workflow,
    title: "Hiring Process Optimization",
    description: (
      <>
        Reduce decision time without lowering the bar.
        <br/><br/>
        We identify where hiring processes break under pressure and redesign them to produce consistent, high-quality decisions, without adding unnecessary steps or tools.
        <br/><br/>
        <span className="text-primary font-semibold text-sm uppercase">Best for teams scaling engineering, product, or leadership under time constraints.</span>
      </>
    )
  },
  {
    icon: UserPlus,
    title: "Fractional Talent Leadership",
    description: (
      <>
        Senior talent leadership when it matters most.
        <br/><br/>
        Embedded Head-of-Talent support for organizations navigating growth, restructuring, or transition, without committing to a full-time executive.
        <br/><br/>
        <span className="text-primary font-semibold text-sm uppercase">Best for post-funding scaleups, new studios, or leadership gaps.</span>
      </>
    ),
    isCore: true
  },
  {
    icon: TrendingUp,
    title: "Hiring Analytics & Forecasting",
    description: (
      <>
        Turn hiring activity into business signal.
        <br/><br/>
        We translate hiring data into clear insight: where risk is building, where pipelines fail, and what decisions need attention now, not later.
        <br/><br/>
        <span className="text-primary font-semibold text-sm uppercase">Best for leadership teams who need clarity, not dashboards.</span>
      </>
    )
  },
  {
    icon: Search,
    title: "Executive Talent Search",
    description: (
      <>
        Precision search for roles that cannot fail.
        <br/><br/>
        Targeted, discreet search for senior and leadership hires where judgment, alignment, and long-term fit matter more than speed alone.
        <br/><br/>
        <span className="text-primary font-semibold text-sm uppercase">Best for executives, technical leaders, and mission-critical roles.</span>
      </>
    ),
    isCore: true
  },
  {
    icon: Globe,
    title: "Talent & Market Intelligence",
    description: (
      <>
        Make talent decisions with real market context.
        <br/><br/>
        We map talent availability, compensation dynamics, and competitive hiring behavior to support expansion, location strategy, and critical role planning.
        <br/><br/>
        <span className="text-primary font-semibold text-sm uppercase">Best for market entry, AI hiring, or organizational redesign.</span>
      </>
    )
  },
  {
    icon: Bot,
    title: "Automation & AI Implementation",
    description: (
      <>
        Use technology to support decisions, not replace them.
        <br/><br/>
        We help teams deploy automation and AI where it genuinely reduces friction and improves signal, without creating noise or false confidence.
        <br/><br/>
        <span className="text-primary font-semibold text-sm uppercase">Best for organizations overwhelmed by tools but lacking clarity.</span>
      </>
    )
  }
];

export function Services() {
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
              We focus on decision quality, clarity, and execution, especially when stakes are high and timelines are tight.
            </p>
            <p>
              This is not high-volume recruiting or theoretical advisory. It is senior-level talent judgment applied where it has the greatest business impact.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
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
                    {typeof service.description === 'string' ? service.description : (
                      <div className="description-content">
                        {service.description.props.children.map((child: any, i: number) => {
                          if (child && child.props && child.props.className && child.props.className.includes('text-primary')) {
                            return (
                              <span key={i} className="block mt-6 pt-4 border-t border-gray-100 italic text-gray-500 font-medium text-[13px] bg-gray-50/50 px-2 py-1.5 rounded">
                                {child.props.children}
                              </span>
                            );
                          }
                          return child;
                        })}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
