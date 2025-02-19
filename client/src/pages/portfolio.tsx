import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    client: "RetailTech Inc.",
    description: "A complete e-commerce solution with inventory management and analytics",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format",
    technologies: ["React", "Node.js", "PostgreSQL"],
    results: "200% increase in online sales",
    link: "#"
  },
  {
    title: "Healthcare Management System",
    client: "MedCare Solutions",
    description: "Patient management and scheduling system for healthcare providers",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format",
    technologies: ["Angular", "Python", "MongoDB"],
    results: "50% reduction in administrative time",
    link: "#"
  },
  {
    title: "Mobile Banking App",
    client: "SecureBank",
    description: "Secure mobile banking application with biometric authentication",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format",
    technologies: ["React Native", "Node.js", "AWS"],
    results: "1M+ downloads with 4.8 star rating",
    link: "#"
  },
  {
    title: "Supply Chain Management",
    client: "LogisticsPro",
    description: "Real-time tracking and management of supply chain operations",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format",
    technologies: ["Vue.js", "Spring Boot", "MySQL"],
    results: "30% improvement in efficiency",
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <div className="py-12 bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses
            transform their digital presence with innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden h-full bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="relative overflow-hidden aspect-video group-hover:scale-105 transform transition-all duration-500 ease-in-out">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    <Button
                      size="lg"
                      className="bg-primary/90 hover:bg-primary text-white"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View Project
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
                <CardContent className="p-6 bg-gray-50">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.title}</h3>
                      <p className="text-primary font-medium">{project.client}</p>
                    </div>
                    <ExternalLink className="text-primary hover:text-primary/90 transition-all" />
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <span className="font-medium">Results:</span>
                    <span>{project.results}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
