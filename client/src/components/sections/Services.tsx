import { motion } from "framer-motion";
import { Search, Globe, TrendingUp, Workflow, Bot, UserPlus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Workflow,
    title: "Process Optimization",
    description: "Streamlined workflows that reduce time-to-hire without sacrificing decision quality."
  },
  {
    icon: UserPlus,
    title: "Fractional Talent Leadership",
    description: "Embedded expertise for organizations that need senior talent guidance without full-time commitment."
  },
  {
    icon: TrendingUp,
    title: "Hiring Analytics & Forecasting",
    description: "Dashboards and data models that translate hiring activity into actionable business intelligence."
  },
  {
    icon: Search,
    title: "Executive Talent Search",
    description: "Targeted sourcing for critical leadership roles where precision and discretion matter."
  },
  {
    icon: Globe,
    title: "Talent & Market Intelligence",
    description: "Real-time insights on talent availability, compensation trends, and competitive dynamics."
  },
  {
    icon: Bot,
    title: "Automation & AI Implementation",
    description: "Strategic deployment of technology to enhance efficiency and reduce manual overhead."
  }

];

export function Services() {
  return (
    <section id="what-we-do" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-6">What We Do</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            TALINTEL supports companies where hiring outcomes matter and margin for error is low. 
            Our work focuses on <span className="text-primary font-semibold">clarity, decision quality, and execution</span>, not volume or theory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="
                  h-full
                  border-l-4 border-l-secondary
                  bg-white
                  shadow-sm
                  transition-all duration-300
                  hover:shadow-xl hover:-translate-y-2
                  hover:border-l-accent
                  group
                "
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div
                    className="
                      mb-6 inline-flex items-center justify-center
                      p-3 rounded-lg
                      bg-secondary/10
                      transition-colors duration-300
                      group-hover:bg-primary
                    "
                  >
                    <service.icon
                      className="
                        w-8 h-8
                        text-secondary
                        transition-colors duration-300
                        group-hover:text-white
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-xl font-bold
                      text-primary
                      mb-3
                      transition-colors duration-300
                      group-hover:text-accent
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
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
