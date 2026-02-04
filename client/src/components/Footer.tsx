import logo from "@assets/image_1770228204877.png";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Monteiro Corretora" 
                className="h-10 w-auto bg-white rounded p-1" 
              />
              <span className="font-display text-xl font-bold text-white">Monteiro</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Providing premium insurance solutions tailored to your unique lifestyle and business needs. Trust, integrity, and excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Latest News</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-6">Insurance</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="hover:text-primary transition-colors cursor-pointer">Auto Insurance</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Home Insurance</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Life Insurance</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Business Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Business Ave, Suite 100<br/>São Paulo, SP, Brazil</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@monteiro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Monteiro Corretora. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
