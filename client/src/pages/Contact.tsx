import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const { toast } = useToast();
  const mutation = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertInquiry) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We will get back to you shortly.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <div className="pt-32 pb-20 bg-slate-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Get in Touch
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-xl mx-auto">
            Have questions about our insurance plans? We're here to help.
          </p>
        </div>
      </div>

      <div className="container px-4 py-16 mx-auto -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-5 border border-slate-100">
          
          {/* Contact Info Sidebar */}
          <div className="md:col-span-2 bg-slate-50 p-10 border-r border-slate-100">
            <h3 className="text-xl font-bold font-display text-slate-900 mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Office</h4>
                  <p className="text-slate-500 text-sm mt-1">
                    123 Business Ave, Suite 100<br />
                    São Paulo, SP, Brazil
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Phone</h4>
                  <p className="text-slate-500 text-sm mt-1">+55 (11) 9999-9999</p>
                  <p className="text-slate-400 text-xs mt-1">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Email</h4>
                  <p className="text-slate-500 text-sm mt-1">contact@monteiro.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="md:col-span-3 p-10">
            <h3 className="text-xl font-bold font-display text-slate-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                  <input 
                    {...form.register("name")}
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="John Doe"
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone (Optional)</label>
                  <input 
                    {...form.register("phone")}
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="+55 (11) ..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                <input 
                  {...form.register("email")}
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                  placeholder="john@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  {...form.register("message")}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                  placeholder="How can we help you?"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-xs">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
