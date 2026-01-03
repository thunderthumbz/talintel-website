import { motion } from "framer-motion";
import founderImg from "@assets/generated_images/ryan_LI.png";
import { Target, Users, Lightbulb, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Clarity",
    text: "We focus on the roles, decisions, and signals that matter. No excess activity. No unnecessary noise."
  },
  {
    icon: Lightbulb,
    title: "Intelligence",
    text: "Data is only useful when it improves judgment. We prioritize insight that informs real decisions."
  },
  {
    icon: Settings,
    title: "Structure",
    text: "Strong hiring systems rely on structure, consistency, and follow-through. We help teams hold the line."
  },
  {
    icon: Users,
    title: "Accountability",
    text: "We operate as partners, not observers. Outcomes matter."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 space-y-24">

        {/* About TALINTEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">
            About{" "}
            <span className="text-secondary">TAL</span>
            <span className="text-primary">INTEL</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            TALINTEL is a consulting and advisory firm focused on talent intelligence and execution.
            We operate at the intersection of data, systems, and leadership to help companies hire with confidence
            in competitive and uncertain markets.
          </p>
        </motion.div>

        {/* What We Stand For */}
        <div>
          <h3 className="text-2xl font-bold text-primary text-center mb-12">
            What We Stand For
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group">
                  <CardContent className="p-6 pt-8">
                    <div className="mx-auto w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors text-primary">
                      <val.icon className="w-6 h-6" />
                    </div>
                    <h4
                      className="
                        text-xl font-bold
                        text-primary
                        mb-3
                        transition-colors duration-300
                        group-hover:text-secondary
                      "
                    >
                      {val.title}
                    </h4>
                    <p className="text-sm text-gray-600">{val.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-primary mb-6">Our Story</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              TALINTEL began with a pattern we repeatedly observed. Companies were investing heavily in hiring:
              buying tools, running searches, and building teams. Yet they were still making slow,
              inconsistent decisions that didn’t hold up under pressure.
            </p>
            <p className="font-semibold text-accent">
              The problem wasn’t effort or budget. It was clarity.
            </p>
            <p>
              Hiring teams were drowning in data but starving for insight. Leaders had opinions but no shared
              framework. Processes existed on paper but broke down in practice.
            </p>
            <p>
              TALINTEL was built to fix that. Not by adding more tools or theory, but by bringing structure,
              intelligence, and execution to the parts of hiring that actually determine outcomes.
            </p>
          </div>
        </div>

        {/* Founder */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
              <p className="text-secondary font-medium">Founder & Principal</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 lg:col-span-9 space-y-6 text-gray-600 leading-relaxed"
          >
            <p>
              Ryan MacDougall is a senior talent leader and advisor with deep experience building and scaling hiring systems in complex, global environments. Throughout his career, he has led talent functions, advised executive teams, and partnered closely with founders and leaders navigating periods of growth, transformation, and challenge.
            </p>
            <p>
              His background spans both startups and Fortune 500 companies, giving him unique insight into how hiring strategies must adapt to different business realities. He has led and developed teams across North America, Europe, and APAC, shaping global talent operations that balance local nuance with organizational scale.
            </p>
            <p>
              An expatriate who has lived and worked in both North America and Europe, Ryan brings a deep appreciation for the role culture plays across geographies and within companies.
            </p>
            <p className="text-primary font-medium italic border-l-4 border-secondary pl-4 py-2 bg-white">
              "His work is grounded in one principle: hiring decisions must hold up in practice, not just on paper."
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
