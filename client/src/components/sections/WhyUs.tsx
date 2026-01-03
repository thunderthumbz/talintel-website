import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Check, Users, Globe2, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: 20, suffix: "+", label: "Years Of Experience" },
  { value: 3, suffix: "", label: "Continents Served (NA, EU, APAC)" },
  { value: 100, suffix: "%", label: "Focus on Quality Over Volume" },
  { value: 24, suffix: "-48h", label: "Initial Response Time" }, // Handling ranges is tricky with simple counting, treating as text for now or special case
];

function Counter({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-secondary mb-2 font-logo flex justify-center items-center">
        <motion.span>{display}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

// Special component for the range or non-numeric stats if needed
function StaticCounter({ value, label }: { value: string, label: string }) {
    return (
        <div className="text-center">
          <div className="text-5xl md:text-6xl font-bold text-secondary mb-2 font-logo">
            {value}
          </div>
          <div className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wider">
            {label}
          </div>
        </div>
      );
}

export function WhyUs() {
  return (
    <section id="why-talintel" className="py-24 bg-muted relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold mb-8">
            Why <span className="text-secondary">TAL</span>
            <span className="text-primary">INTEL</span>
          </h2>
          <p className="text-3xl text-gray-800 italic font-serif mb-8 leading-tight">
            "Most hiring problems are not effort problems. <br/>They are decision problems."
          </p>
          <div className="text-xl text-gray-600 mb-12">We help leadership teams:</div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "See the market clearly before committing budget or headcount",
              "Understand where pipelines break and why",
              "Reduce variance in hiring decisions",
              "Build systems that perform under pressure"
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border-l-4 border-accent hover:shadow-md transition-shadow"
              >
                <div className="mt-1 bg-accent/10 p-1 rounded-full">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <span className="text-lg text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-primary">
              The result is faster cycles, better hires, and fewer surprises.
            </h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <Counter value={20} suffix="+" label="Years Of Experience" />
          <Counter value={3} suffix="" label="Continents Served (NA, EU, APAC)" />
          <Counter value={100} suffix="%" label="Focus on Quality Over Volume" />
          {/* For the range, we'll use a static display or custom animation, keeping it simple static for clarity as requested "24-48h" is hard to count up linearly */}
          <StaticCounter value="24-48h" label="Initial Response Time" />
        </div>
      </div>
    </section>
  );
}
