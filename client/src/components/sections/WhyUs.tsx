import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

export function WhyUs() {
  return (
    <section id="why-talintel" className="py-24 md:py-32 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
            <span className="text-secondary">TAL</span>
            <span className="text-primary">INTEL</span>
          </h2>
          <p className="text-3xl md:text-4xl text-gray-800 italic font-serif mb-8 leading-tight pl-4 border-l-3 border-accent">
            Most hiring problems are not effort problems. <br/>
            They are decision problems.
          </p>
          <div className="text-xl text-gray-600 mb-12">TALINTEL helps leadership teams:</div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "See the talent market clearly before committing budget or headcount",
              "Understand where pipelines break and why",
              "Reduce variance and bias in hiring decisions",
              "Build systems that perform under pressure, not just on paper"
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg shadow-sm border-l-4 border-accent hover:shadow-md transition-shadow group"
              >
                <div className="mt-1 bg-accent/10 p-1 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  >
                    <Check className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>
                </div>
                <span className="text-lg text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-primary">
              The result: faster cycles, better hires, and fewer surprises when it matters most.
            </h3>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-white/50 rounded-lg group"
          >
            <motion.div 
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-3xl font-bold text-secondary mb-2 font-logo transition-transform duration-300 group-hover:scale-110"
            >
              20+ years
            </motion.div>
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">leading global talent initiatives</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center p-6 bg-white/50 rounded-lg group"
          >
            <motion.div 
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="text-3xl font-bold text-secondary mb-2 font-logo transition-transform duration-300 group-hover:scale-110"
            >
              Experience
            </motion.div>
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">across North America, Europe, and APAC</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 bg-white/50 rounded-lg group"
          >
            <motion.div 
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="text-3xl font-bold text-secondary mb-2 font-logo transition-transform duration-300 group-hover:scale-110"
            >
              Senior-level
            </motion.div>
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">focus on quality over volume</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center p-6 bg-white/50 rounded-lg group"
          >
            <motion.div 
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              className="text-3xl font-bold text-secondary mb-2 font-logo transition-transform duration-300 group-hover:scale-110"
            >
              Initial response
            </motion.div>
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">within 24 to 48 hours</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
