
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Calendar, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// EmailJS Config
const EMAILJS_SERVICE_ID = "service_33b0sb6";
const EMAILJS_TEMPLATE_ID = "template_qkt4bmo";
const EMAILJS_PUBLIC_KEY = "9LtnZ0U4NFPL6lyQH";

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          company: values.company || "Not provided",
          message: values.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out. We'll be in touch shortly.",
        });
        form.reset();
      }
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Send Message",
        description:
          "There was an error sending your message. Please try again or email us directly at hello@talintel.ai",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 tracking-tighter">
            Let's clarify your hiring decisions.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-[1.7]">
            If you are navigating a critical hire, scaling a team, or questioning whether your hiring system 
            is giving you the right signal, TALINTEL can help.
            <br />
            Initial conversations are focused, practical, and action-oriented.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Send us a message
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>Best for:</strong> leadership hires, system reviews, or strategic talent decisions
                  </p>
                  <p>
                    <strong>You'll get:</strong> a 30-minute consultation with clear next steps
                  </p>
                  <p>
                    <strong>Response time:</strong> within 24 to 48 hours
                  </p>
                </div>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className="bg-white rounded-none border-gray-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="name@company.com"
                            {...field}
                            className="bg-white rounded-none border-gray-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Company Name"
                            {...field}
                            className="bg-white rounded-none border-gray-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your hiring challenges..."
                            className="resize-none min-h-[120px] bg-white rounded-none border-gray-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 text-lg rounded-none uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-secondary/40 relative overflow-hidden group/btn"
                    disabled={form.formState.isSubmitting}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity"
                      animate={{
                        boxShadow: [
                          "inset 0 0 0px rgba(255,255,255,0)",
                          "inset 0 0 20px rgba(255,255,255,0.2)",
                          "inset 0 0 0px rgba(255,255,255,0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      "Send message"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          {/* Info / Calendar Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8 flex flex-col justify-center"
          >
            <div className="bg-primary text-white p-10 md:p-14 rounded-sm shadow-xl relative overflow-hidden group flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <h3 className="text-2xl font-bold mb-6 relative z-10">Schedule a free consultation</h3>
              <p className="text-lg leading-relaxed text-gray-200 relative z-10 space-y-4">
                No pitch. Just clarity on whether we can help.
              </p>
              <Button
                variant="outline"
                className="w-full border-2 border-white text-white bg-transparent hover:bg-white/10 hover:border-white hover:text-white transition-all duration-300 font-bold h-12 text-lg rounded-none uppercase tracking-wide hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => window.open("https://calendly.com/ryan-talintel", "_blank")}
              >
                Book a Time
              </Button>
            </div>

            <div className="text-center p-8 border border-dashed border-gray-300 rounded-xl bg-gray-50/50">
              <p className="text-gray-500 italic">
                "All inquiries are handled with strict discretion and confidentiality."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
