// components/About.tsx
import { motion } from "framer-motion";
import founderImg from "@/assets/generated_images/ryan_LI.webp";
import { Target, Users, Lightbulb, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const values = [
  {
    icon: Target,
    title: "Clarity",
    text: "We focus on the decisions, roles, and signals that are critical to hiring success."
  },
  {
    icon: Lightbulb,
    title: "Intelligence",
    text: "Data only matters when it leads to smarter decisions and real results."
  },
  {
    icon: Settings,
    title: "Structure",
    text: "Effective hiring systems are built on consistency and reliable execution, even in tough situations."
  },
  {
    icon: Users,
    title: "Accountability",
    text: "We partner with you because we believe in delivering meaningful outcomes, not just following processes."
  }
];

interface ValueCardProps {
  val: typeof values[0];
  index: number;
}

function ValueCard({ val, index }: ValueCardProps) {
  const { ref, hasEntered } = useScrollReveal({ threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0 }}
    >
      <Card className={cn(
        "h-full transition-all duration-300 text-center group",
        "hover:shadow-lg hover:-translate-y-1",
        hasEntered && "shadow-lg -translate-y-1"
      )}>
        <CardContent className="p-6 pt-8">
          <div className="mx-auto w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors text-primary">
            <val.icon className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-primary mb-3 transition-colors duration-300 group-hover:text-secondary">{val.title}</h4>
          <p className="text-sm text-gray-600">{val.text}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="container mx-auto px-6 space-y-32">
        
        {/* About TALINTEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
            About <span className="text-secondary">TAL</span>
            <span className="text-primary">INTEL</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-[1.7]">
            TALINTEL is a consulting and advisory firm focused on talent intelligence and execution for leadership teams in complex, competitive markets.
            We operate at the intersection of data, systems, and experience to help companies hire with confidence, especially when the cost of getting it wrong is high.
          </p>
        </motion.div>

        {/* What We Stand For */}
        <div>
          <h3 className="text-2xl font-bold text-primary text-center mb-12 uppercase tracking-widest">What We Stand For</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <ValueCard key={i} val={val} index={i} />
            ))}
          </div>
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-xl shadow-sm border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 uppercase tracking-widest text-center">Our Story</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              TALINTEL was built around a pattern seen repeatedly across industries and growth stages.
              Companies were investing heavily in hiring: new tools, larger teams, and external support. Yet still making slow, inconsistent decisions that didn't hold up when pressure increased.
            </p>
            <p className="font-semibold text-primary">
              The issue was rarely effort or budget. It was clarity.
            </p>
            <p>
              Teams had data but no shared framework. Leaders had opinions but no aligned decision process. Systems existed, but failed when the stakes rose.
            </p>
            <p>
              TALINTEL exists to fix that by bringing structure, intelligence, and execution to the decisions that determine hiring outcomes.
            </p>
          </div>
        </motion.div>

        {/* Founder Section */}
        <div className="space-y-12">
          <h3 className="text-2xl font-bold text-primary text-center uppercase tracking-widest">Founder</h3>
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4 lg:col-span-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 translate-x-4 translate-y-4 rounded-lg" />
                <img
                  src={founderImg}
                  alt="Ryan MacDougall"
                  className="rounded-lg shadow-lg relative z-10 w-full object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="mt-6 text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary">Ryan MacDougall</h3>
                <p className="text-secondary font-medium uppercase tracking-wider text-sm">Founder & Principal</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-8 lg:col-span-9 space-y-6 text-gray-600 leading-relaxed"
            >
              <p>
                Ryan MacDougall is a senior talent leader and advisor with deep experience building and scaling hiring systems in complex, global environments.
              </p>
              <p>
                He has led talent functions, advised executive teams, and partnered closely with founders and leaders navigating periods of growth, transformation, and uncertainty.
              </p>
              <p>
                His background spans startups and Fortune 500 organizations, with hands-on experience across North America, Europe, and APAC, bringing a practical understanding of how hiring strategies must adapt to different business realities and cultures.
              </p>
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-primary font-medium italic border-l-3 border-accent pl-6 py-4 bg-gray-50 text-lg md:text-xl"
              >
                "I help companies when hiring isn't working the way it should. Sometimes that's roles sitting open too long. Sometimes it's offers that don't land or decisions that feel inconsistent. Sometimes it's not having the right structure or leadership in place to fix it. TALINTEL brings clarity to what's broken and builds systems that actually perform."
              </motion.p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
