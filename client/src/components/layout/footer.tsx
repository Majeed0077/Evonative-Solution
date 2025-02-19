import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer */}
      <div className="relative bg-gray-900 pt-24 pb-12">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent" />
        {/* <div className="absolute -top-20 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-gray-900/80" /> */}
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px]" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Newsletter Section */}
          <div className="mb-20">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Evonative
              </h3>
              <p className="text-gray-400 mb-8">
                Subscribe to our newsletter for the latest insights and innovations
                in software development.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="lg" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-800">
            {/* Brand Column */}
            <div className="md:col-span-4">
              <Link href="/">
                <a className="inline-block">
                  <h3 className="text-2xl font-bold text-white mb-4">Evonative</h3>
                </a>
              </Link>
              <p className="text-gray-400 mb-6">
                Building Digital Solutions for Your Business Needs. We transform ideas
                into powerful software solutions.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-primary/20 hover:text-primary transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2 md:col-start-6">
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {['Services', 'Portfolio', 'About', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`}>
                      <a className="text-gray-400 hover:text-primary transition-colors inline-flex items-center group">
                        {item}
                        <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-3">
              <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@evonative.com"
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    info@evonative.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <div className="p-2 rounded-lg bg-white/5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  National Science & Technology Park (NASTP), Karachi, Pakistan
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="md:col-span-3">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Ready to Get Started?
                </h4>
                <p className="text-gray-400 mb-6">
                  Transform your business with our innovative solutions.
                </p>
                <Link href="/contact">
                  <Button className="w-full">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Evonative. All rights reserved. Designed By-
              <a href="https://www.majeedabro.com" className="text-primary hover:underline">
             Majeed Abro
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}