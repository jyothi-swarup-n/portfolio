import { motion } from "framer-motion";
import { Award, ExternalLink, Globe } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const certifications = [
  { name: "Google Digital Marketing & E-commerce", issuer: "Coursera (Google)", year: "2024" },
  { name: "IBM Data Science Professional Certificate", issuer: "Coursera (IBM)", year: "2024" },
  { name: "CFA Level 1", issuer: "CFA Institute", year: "2024" },
  { name: "Financial Modeling & Valuation Analyst (FMVA)", issuer: "CFI", year: "2023" },
  { name: "NCFM – Investment Analysis & Portfolio Management", issuer: "NSE India", year: "2023" },
  { name: "NCFM – Fundamental Analysis", issuer: "NSE India", year: "2023" },
  { name: "Agentic AI", issuer: "DeepLearning.AI", year: "2024" },
  { name: "Inbound Sales", issuer: "HubSpot Academy", year: "2023" },
];

const languages = [
  { name: "English", flag: "🇬🇧", level: "Native / Fluent" },
  { name: "Hindi", flag: "🇮🇳", level: "Native" },
  { name: "Telugu", flag: "🇮🇳", level: "Conversational" },
];

const valueAddedCourses = [
  "Advanced Excel & VBA",
  "Python for Finance",
  "Blockchain Fundamentals",
  "Design Thinking",
  "Negotiation & Conflict Resolution",
  "Public Speaking Mastery",
  "SQL for Business Analytics",
  "Leadership & Team Management",
];

const Certifications = () => (
  <div className="section-padding max-w-7xl mx-auto">
    <AnimatedSection>
      <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-2">
        <span className="gold-gradient-text">Certifications</span> & Skills
      </h1>
      <p className="text-muted-foreground mb-12 max-w-xl">
        Continuous learning through industry-recognized certifications.
      </p>
    </AnimatedSection>

    {/* Cert Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
      {certifications.map((cert, i) => (
        <AnimatedSection key={cert.name} delay={i * 0.05}>
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-card rounded-xl p-5 gold-border-glow h-full flex flex-col cursor-target"
          >
            <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
              <Award className="text-primary" size={20} />
            </div>
            {/* REPLACE: Certification details */}
            <h3 className="font-semibold text-foreground text-sm mb-1 flex-1">{cert.name}</h3>
            <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
            <p className="text-xs text-primary mb-3">{cert.year}</p>
            <button className="gold-outline-button text-xs py-2 px-4 flex items-center gap-1.5 self-start cursor-target">
              <ExternalLink size={12} />
              View Certificate
            </button>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>

    {/* Languages */}
    <AnimatedSection>
      <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
        <Globe className="text-primary" size={22} />
        Foreign Languages
      </h2>
      <div className="flex flex-wrap gap-4 mb-16">
        {/* REPLACE: Your language proficiencies */}
        {languages.map((lang, i) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl px-6 py-4 gold-border-glow flex items-center gap-3"
          >
            <span className="text-2xl">{lang.flag}</span>
            <div>
              <p className="font-medium text-foreground text-sm">{lang.name}</p>
              <p className="text-xs text-muted-foreground">{lang.level}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>

    {/* Value-Added Courses Ticker */}
    <AnimatedSection>
      <h2 className="text-2xl font-heading font-bold mb-6">Value-Added Courses</h2>
      <div className="overflow-hidden rounded-xl bg-card gold-border-glow py-4">
        {/* REPLACE: Your value-added courses */}
        <div className="flex animate-ticker">
          {[...valueAddedCourses, ...valueAddedCourses].map((course, i) => (
            <span
              key={i}
              className="shrink-0 px-6 py-2 mx-2 rounded-full bg-secondary text-sm text-muted-foreground whitespace-nowrap"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </div>
);

export default Certifications;
