import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored applications for your business solutions",
    features: [
      "Customized solutions for your business needs",
      "Scalable architecture",
      "Integration with existing systems",
      "Regular maintenance and support"
    ]
  },
  {
    title: "Web Development",
    description: "Professional, responsive websites",
    features: [
      "Responsive design",
      "SEO optimization",
      "Performance optimization",
      "Content management systems"
    ]
  },
  {
    title: "Mobile App Development",
    description: "Custom mobile solutions for iOS and Android",
    features: [
      "Native iOS and Android apps",
      "Cross-platform development",
      "UI/UX design",
      "App store deployment"
    ]
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online store setups",
    features: [
      "Custom e-commerce platforms",
      "Payment gateway integration",
      "Inventory management",
      "Order tracking systems"
    ]
  },
  {
    title: "UI/UX Design",
    description: "User-centric designs that increase engagement",
    features: [
      "User research and analysis",
      "Wireframing and prototyping",
      "Visual design",
      "Usability testing"
    ]
  },
  {
    title: "Graphic Design",
    description: "Creative, visually compelling graphic designs for branding, marketing materials, and digital content",
    features: [
      "Custom logo design",
      "Marketing material design (brochures, flyers, etc.)",
      "Social media graphics",
      "Print and digital design solutions"
    ]
  },
  {
    title: "Branding & Identity Design",
    description: "Building strong, memorable brand identities",
    features: [
      "Logo design and creation",
      "Brand style guides",
      "Typography and color schemes",
      "Brand messaging and positioning"
    ]
  },
  {
    title: "Consulting & Strategy",
    description: "Help building your digital roadmap",
    features: [
      "Technology consulting",
      "Digital transformation",
      "Project planning",
      "Technical architecture"
    ]
  }
];

export default function Services() {
  return (
    <div className="py-12">
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of software development and design services
            to help your business grow in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="text-primary mt-1 h-4 w-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="w-full mt-6">Get Started</Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
