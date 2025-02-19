import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const NavLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-bold text-2xl cursor-pointer"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
                Evonative
              </span>
              <span className="ml-2 text-gray-600 font-normal text-lg">
                Solutions
              </span>
              <div className="h-1 w-full bg-gradient-to-r from-primary to-transparent rounded-full mt-0.5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
              >
                <motion.a
                  whileHover={{ y: -2 }}
                  className={`relative py-2 ${
                    location === link.href
                      ? "text-primary font-medium"
                      : "text-gray-600 hover:text-primary"
                  } transition-colors cursor-pointer`}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-0.5 bg-primary bottom-0"
                    />
                  )}
                </motion.a>
              </Link>
            ))}
            <Link href="/contact">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {NavLinks.map((link) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <a
                      className={`block py-2 ${
                        location === link.href
                          ? "text-primary font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {link.label}
                    </a>
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact">
                <Button className="w-full mt-4">Get Started</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}