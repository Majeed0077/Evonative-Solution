import { motion } from "framer-motion";
import { Award, Users, Target, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Shehroz Gabol",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format",
    bio: "15+ years of experience in software development and business leadership",
    expertise: ["Strategic Planning", "Innovation", "Team Leadership"]
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format",
    bio: "Expert in cloud architecture and emerging technologies",
    expertise: ["Cloud Architecture", "AI/ML", "System Design"]
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format",
    bio: "Passionate about creating intuitive user experiences",
    expertise: ["UI/UX Design", "Brand Strategy", "User Research"]
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format",
    bio: "Full-stack developer with expertise in modern frameworks",
    expertise: ["Full-stack Development", "DevOps", "Architecture"]
  }
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project we undertake, ensuring the highest quality standards in software development."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together with our clients and team members to achieve exceptional results through effective communication."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Continuously pushing the boundaries of technology to deliver cutting-edge solutions that drive business growth."
  }
];

const achievements = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Enterprise Clients" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "15+", label: "Years Experience" }
];

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[60vh] relative flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
        <div className="absolute -top-1/2 right-0 w-1/2 h-full bg-primary/20 rounded-full blur-[120px]" />

        <motion.div 
          className="relative max-w-7xl mx-auto px-4 py-20 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-6">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Innovating the Future <br />
            <span className="text-primary">of Technology</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            At Evonative Solutions, we're passionate about transforming businesses 
            through innovative technology solutions. Our journey is defined by excellence, 
            collaboration, and continuous innovation.
          </p>
          <div className="flex flex-wrap gap-8 mt-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-gray-400">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us Forward</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values shape everything we do, from how we develop software to 
              how we interact with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative p-8 bg-white rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.08)] hover:shadow-[0_0_50px_rgba(0,0,0,0.16)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 mb-6 relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-6 transition-transform group-hover:rotate-12" />
                    <div className="absolute inset-0 bg-white rounded-lg transform -rotate-3 transition-transform group-hover:-rotate-6" />
                    <value.icon className="relative z-10 w-full h-full p-3 text-primary transform group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Experts</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our talented team brings together decades of experience in software development,
              design, and business strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-2 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, i) => (
                      <div
                        key={i}
                        className="text-sm text-gray-600 flex items-center justify-center gap-1"
                      >
                        <ChevronRight className="w-4 h-4 text-primary" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative p-8 md:p-12 bg-gray-900 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 rounded-full blur-[120px] -translate-y-1/2" />

            <div className="relative">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-6">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From Vision to Reality
              </h2>
              <div className="prose prose-lg text-gray-300 max-w-3xl">
                <p>
                  Founded in 2015, Evonative Solutions began with a vision to make cutting-edge
                  technology accessible to businesses of all sizes. Today, we've grown into a
                  team of passionate innovators, delivering solutions that drive success for
                  our clients worldwide.
                </p>
                <p>
                  Our commitment to excellence and continuous innovation has established us as
                  a trusted partner for businesses seeking digital transformation. We take pride
                  in our ability to turn complex challenges into elegant solutions.
                </p>
              </div>
              <Button className="mt-8" size="lg">
                Join Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}