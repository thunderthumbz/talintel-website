import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Calendar, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

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

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_hfyuhx9";
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
      // Send email using EmailJS (v4 syntax - no init() needed)
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          company: values.company || "Not provided",
          message: values.message,
        },
        EMAILJS_PUBLIC_KEY // Public key as 4th parameter
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent Successfully",
          description: "Thank you for reaching out. We'll be in touch shortly.",
        });
        form.reset();
      }
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      console.error("Error details:", error.text || error.message);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or email us directly at hello@talintel.ai",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-6">Contact</h2>
          <p className="text-lg text-gray-600">
            If you are navigating a critical hire, scaling a team, or questioning whether your hiring system 
            is giving you the right signal, TALINTEL can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-white" />
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
                          <Input placeholder="name@company.com" {...field} className="bg-white" />
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
                          <Input placeholder="Company Name" {...field} className="bg-white" />
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
                            className="resize-none min-h-[120px] bg-white" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-accent/90 text-white font-bold h-12 text-lg"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          {/* Calendar & Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-primary text-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-full">
                  <Calendar className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Schedule a Free Consultation</h3>
              </div>
              <p className="text-gray-200 mb-8 leading-relaxed">
                Initial conversations are focused, practical, and diagnostic. No pitch. Just clarity on whether we can help.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-2 border-white text-secondary hover:bg-accent hover:text-white font-bold h-12 text-lg"
                onClick={() => window.open('https://calendly.com/ryan-talintel', '_blank')}
              >
                Book a Time
              </Button>
            </div>

            <div className="text-center p-8 border border-dashed border-gray-300 rounded-xl">
              <p className="text-gray-500 italic">
                "We operate with discretion. All inquiries are kept strictly confidential."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
