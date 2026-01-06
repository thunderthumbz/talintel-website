import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Candidates() {
  return (
    <section id="for-candidates" className="py-24 md:py-32 bg-gray-50 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 tracking-tighter uppercase">For Candidates</h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-600 mb-12 leading-[1.7]">
              <p>TALINTEL works with candidates in a focused and intentional way.</p>
              <p>We engage only where there is real hiring intent, clear context, and a defined decision path.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-6 uppercase tracking-wider">You Can Expect</h3>
              <ul className="space-y-4">
                {[
                  "Clear communication and realistic expectations",
                  "Roles grounded in actual business needs, not speculation",
                  "A process designed for signal, not noise"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-primary text-white p-10 md:p-14 rounded-sm shadow-xl relative overflow-hidden group flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <h3 className="text-2xl font-bold mb-6 relative z-10">Important note</h3>
            <div className="text-lg leading-relaxed text-gray-200 relative z-10 space-y-4">
              <p>We do not run mass outreach or generic pipelines.</p>
              <p>If we are in touch, there is a real role, real intent, and an active decision process.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
