import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Award, History, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        <div className="container px-4 mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            About Monteiro
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Decades of trust, excellence, and commitment to our clients.
          </p>
        </div>
      </div>

      <div className="container px-4 py-20 mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6 text-slate-900">
              Building Trust Since 1995
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Founded by Carlos Monteiro, Monteiro Corretora began with a simple mission: to make insurance understandable, accessible, and truly protective for families and businesses in São Paulo.
              </p>
              <p>
                Over the past three decades, we've grown from a small family office to one of the region's most respected brokerage firms. Our growth hasn't changed our core values—we still treat every client like family.
              </p>
              <p>
                We believe that insurance isn't just a contract; it's a promise. A promise that when life takes an unexpected turn, you won't be alone. We are here to keep that promise.
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Users, title: "Client First", desc: "Your needs dictate our solutions, always." },
              { icon: Award, title: "Excellence", desc: "Award-winning service and support." },
              { icon: History, title: "Experience", desc: "30+ years of navigating the market." },
              { icon: Target, title: "Precision", desc: "Tailored policies, no fluff." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section Placeholder */}
      <div className="bg-white py-20">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-12 text-slate-900">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] rounded-2xl bg-slate-100 overflow-hidden mb-4 relative">
                   {/* Abstract team placeholder */}
                   <img 
                     src={`https://images.unsplash.com/photo-${i === 0 ? '1560250097-0b9358e10e2e' : i === 1 ? '1573496359142-b8d87734a5a2' : '1580489944761-15a19d654956'}?auto=format&fit=crop&q=80&w=800`}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     alt="Team member"
                   />
                </div>
                <h3 className="font-bold text-xl text-slate-900">Name Surname</h3>
                <p className="text-primary font-medium">Position Title</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
