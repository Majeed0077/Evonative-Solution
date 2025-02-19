import { motion } from "framer-motion";
import { Building2, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const positions = [
  {
    title: "Senior Full Stack Developer",
    type: "Full-time",
    location: "Remote",
    description: "Join our team to build innovative web applications",
    requirements: [
      "5+ years of experience with React and Node.js",
      "Strong understanding of cloud services",
      "Experience with microservices architecture"
    ]
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Hybrid",
    description: "Create beautiful and intuitive user interfaces",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and Adobe Creative Suite",
      "Portfolio demonstrating web and mobile design work"
    ]
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    description: "Manage and improve our cloud infrastructure",
    requirements: [
      "Experience with AWS/Azure/GCP",
      "Knowledge of CI/CD pipelines",
      "Container orchestration experience"
    ]
  }
];

const benefits = [
  {
    icon: Building2,
    title: "Work Environment",
    items: [
      "Flexible working hours",
      "Remote-first culture",
      "Modern office spaces"
    ]
  },
  {
    icon: Briefcase,
    title: "Benefits Package",
    items: [
      "Competitive salary",
      "Health insurance",
      "401(k) matching"
    ]
  },
  {
    icon: GraduationCap,
    title: "Growth",
    items: [
      "Professional development",
      "Training budget",
      "Career advancement"
    ]
  }
];

export default function Careers() {
  return (
    <div className="py-12">
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Join Our Growing Team at Evonative
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're looking for talented individuals who are passionate about
            technology and innovation. Join us in building the future of software.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why Work at Evonative?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item) => (
                    <li key={item} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8">
            Current Job Openings
          </h2>
          <div className="grid gap-6">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{position.title}</CardTitle>
                        <CardDescription>{position.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <span className="text-primary font-medium">{position.type}</span>
                        <p className="text-sm text-gray-600">{position.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {position.requirements.map((req) => (
                          <li key={req}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <Button>Apply Now</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
