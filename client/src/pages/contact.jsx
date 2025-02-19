import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
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
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      type: "quote",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await apiRequest("POST", "/api/leads", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    },
  });

  function onSubmit(data) {
    mutation.mutate(data);
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[40vh] relative flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
        <div className="absolute -top-1/2 right-0 w-1/2 h-full bg-primary/20 rounded-full blur-[120px]" />
        <motion.div
          className="relative max-w-7xl mx-auto px-4 py-20 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-6">
            Let's Connect
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch with Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Drop us a line and let's
            create something amazing together.
          </p>
        </motion.div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-white pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="sticky top-20">
                <h2 className="text-3xl font-bold mb-8 text-white">Ways to Connect</h2>
                <div className="space-y-8">
                  <motion.a
                    href="mailto:info@evonative.com"
                    className="group flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-4 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email Us</h3>
                      <p className="text-gray-300">info@evonative.com</p>
                      <p className="text-sm text-gray-400 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>

                  <motion.a
                    href="tel:+1234567890"
                    className="group flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-4 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Call Us</h3>
                      <p className="text-gray-300">+1 (234) 567-890</p>
                      <p className="text-sm text-white/90 mt-1">
                        Mon-Fri from 9am to 6pm
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>

                  <motion.div
                    className="group flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-xl"
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-4 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                      <p className="text-white/90">
                        National Science & Technology Park (NASTP),<br />
                        Karachi, Pakistan
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="bg-gray-50 border-gray-100 focus:bg-white transition-colors"
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your email"
                              {...field}
                              className="bg-gray-50 border-gray-100 focus:bg-white transition-colors"
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project"
                              className="min-h-[120px] bg-gray-50 border-gray-100 focus:bg-white transition-colors"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full group"
                      size="lg"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
