import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AnimatedSection, AnimatedText, staggerContainer, slideIn } from "@/components/ui/motion";

export default function Home() {
  // Function to scroll to the services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[94vh] relative flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/50" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-primary/30 rounded-full blur-[120px]"
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-3xl"
          >
            <motion.div variants={slideIn("up")}>
              <AnimatedText className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight block">
                Building Digital{" "}
                <span className="text-primary inline-block">Solutions</span>
                {" "}for Tomorrow's Challenges
              </AnimatedText>
            </motion.div>

            <motion.p
              variants={slideIn("up", 0.2)}
              className="text-xl text-gray-300 mb-12 max-w-2xl"
            >
              Welcome to Evonative, where innovation meets excellence. We craft cutting-edge
              digital solutions that transform businesses and drive success in the modern world.
            </motion.p>
            <motion.div variants={slideIn("up", 0.4)} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
                >
                  <span className="relative z-10 text-lg font-medium flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-lg text-primary border-primary/20 hover:bg-primary/20 hover:text-white backdrop-blur-sm"
                >
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          {/* Scroll Indicator */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center cursor-pointer"
            onClick={scrollToServices}
          >
            <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
            <span className="text-sm text-white/60 block mt-2 ">Scroll to explore</span>
          </motion.div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255, 0, 128, 0.05) 0%, transparent 50%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold mb-6">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-gray-900">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforming businesses through innovative technology solutions
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                delay={index * 0.2}
                className="group relative p-8 bg-white rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.08)] hover:shadow-[0_0_50px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent rounded-xl transition-opacity group-hover:opacity-100 opacity-0" />
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />

                {/* Content */}
                <div className="relative">
                  {/* Icon Container with 3D effect */}
                  <div className="w-20 h-20 mb-8 relative transform transition-transform duration-500 group-hover:scale-110">
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl transform -rotate-3 transition-transform group-hover:-rotate-6" />
                    <div className="relative z-10 w-full h-full p-4 transform transition-transform duration-500 group-hover:rotate-3">
                      <service.icon className="w-full h-full text-primary" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {service.description}
                  </p>

                  {/* Interactive Link */}
                  <Link
                    href="/services"
                    className="inline-flex items-center text-primary font-medium group/link relative"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Learn more
                      <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/30 group-hover/link:w-full transition-all duration-300" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                delay={index * 0.1}
                className="text-center relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-5xl font-bold text-primary mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    icon: () => (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
        <path d="M12 7v5l3 3" />
        <path d="M3.05 11a9 9 0 0 1 .5-1m1.1-1.65a9 9 0 0 1 1.45-1.45m1.65-1.1a9 9 0 0 1 1-0.5" />
      </svg>
    ),
    title: "Custom Software Development",
    description: "Tailored enterprise solutions that streamline operations and drive business growth through innovative technology."
  },
  {
    icon: () => (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience."
  },
  {
    icon: () => (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices."
  },
  {
    icon: () => (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 12h4v8h12v-8h4L12 2z" />
      </svg>
    ),
    title: "Graphic Design",
    description: "Creative, visually compelling graphic designs for branding, marketing materials, and digital content."
  },
  {
    icon: () => (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
        <path d="M12 7v5l3 3" />
        <path d="M3.05 11a9 9 0 0 1 .5-1m1.1-1.65a9 9 0 0 1 1.45-1.45m1.65-1.1a9 9 0 0 1 1-0.5" />
      </svg>
    ),
    title: "UI/UX Design",
    description: "User -centered design solutions that enhance user experience and create intuitive, visually engaging interfaces."
  },
  {
    icon: () => (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18m9-9H3" />
      </svg>
    ),
    title: "Branding & Identity Design",
    description: "Building strong, memorable brand identities through logo design, color schemes, typography, and more."
  }
];

const stats = [
  { value: "100+", label: "Clients Worldwide" },
  { value: "250+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" }
];