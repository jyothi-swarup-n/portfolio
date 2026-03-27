import { motion } from "framer-motion";
import { ArrowDown, User, FolderOpen, Award, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import HeroParticles from "../components/HeroParticles";

const Home = () => {
  const words = ["Hi,", "I'm", "Your", "Name"];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroParticles />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Headshot */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full gold-ring overflow-hidden bg-secondary flex items-center justify-center"
          >
            {/* REPLACE: Your professional headshot */}
            <User className="text-muted-foreground" size={64} />
          </motion.div>

          {/* Animated heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className={`inline-block mr-3 ${i >= 2 ? "gold-gradient-text" : "text-foreground"}`}
              >
                {/* REPLACE: "Your" and "Name" with your actual name */}
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-lg sm:text-xl text-primary font-medium mb-4"
          >
            {/* REPLACE: Your subtitle */}
            BBA Student | Mahindra University School of Management
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {/* REPLACE: Your Statement of Purpose */}
            Passionate about the intersection of finance, technology, and strategic management.
            Committed to leveraging data-driven insights to create meaningful business impact
            and drive innovation in the financial services industry.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { to: "/about", icon: User, label: "About Me" },
              { to: "/projects", icon: FolderOpen, label: "Projects" },
              { to: "/certifications", icon: Award, label: "Certifications" },
              { to: "/recommendations", icon: Mail, label: "Contact" },
            ].map((btn, i) => (
              <Link
                key={btn.to}
                to={btn.to}
                className={`${i === 0 ? "gold-button" : "gold-outline-button"} flex items-center gap-2 cursor-target`}
              >
                <btn.icon size={16} />
                {btn.label}
              </Link>
            ))}
          </motion.div>

          {/* Scroll arrow 
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ArrowDown className="text-primary animate-bounce-gentle" size={28} />
          </motion.div> */}
        </div>
      </section>

      {/* Quick preview section */}
      <section className="section-padding max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
            What I <span className="gold-gradient-text">Bring</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            A snapshot of skills, experience, and ambition.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "8+", label: "Certifications", desc: "From Google, IBM, CFA & more" },
            { num: "2+", label: "Internships", desc: "Hands-on industry experience" },
            { num: "4+", label: "Projects", desc: "Research & capstone work" },
            { num: "3+", label: "Clubs", desc: "Leadership & community impact" },
          ].map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 text-center gold-border-glow card-lift cursor-target">
                <div className="text-3xl font-heading font-bold gold-gradient-text mb-2">{stat.num}</div>
                <div className="font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
