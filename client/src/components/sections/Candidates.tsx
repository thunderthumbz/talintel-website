import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Candidates() {
  return (
    <section id="for-candidates" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">For Candidates</h2>
            <p className="text-xl text-gray-600 mb-8">
              TALINTEL works with candidates in a focused and intentional way.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-6 uppercase tracking-wider">You Can Expect</h3>
              <ul className="space-y-4">
                {[
                  "Clear communication and realistic context",
                  "Roles grounded in actual hiring needs, not speculation",
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-10 md:p-14 rounded-sm shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <h3 className="text-2xl font-bold mb-6 relative z-10">Important Note</h3>
            <p className="text-lg leading-relaxed text-gray-200 relative z-10">
              "We do not run mass outreach or generic pipelines. If we are in touch, there is a real role, real intent, and a defined decision path."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
