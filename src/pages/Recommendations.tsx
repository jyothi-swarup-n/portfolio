import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, User } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const recommendations = [
  {
    quote: "An exceptionally driven student with a rare combination of analytical rigor and creative thinking. Their contributions during the internship exceeded expectations, particularly in financial modeling and strategic analysis.",
    name: "Mr. Rajesh Sharma",
    designation: "Senior Manager, ABC Corp",
    relationship: "Internship Manager",
  },
  {
    quote: "One of the most intellectually curious students I've had the pleasure of teaching. Their research paper on ESG investing demonstrated graduate-level analytical skills and a genuine passion for responsible finance.",
    name: "Dr. Priya Menon",
    designation: "Professor of Finance, Mahindra University",
    relationship: "Professor",
  },
  {
    quote: "A natural leader who brings energy and strategic thinking to every project. Their ability to synthesize complex data into actionable insights is remarkable for an undergraduate student.",
    name: "Mr. Vikram Patel",
    designation: "CFA, Independent Financial Advisor",
    relationship: "Subject Matter Expert",
  },
];

const Recommendations = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % recommendations.length);
  const prev = () => setCurrent((c) => (c - 1 + recommendations.length) % recommendations.length);

  return (
    <div className="section-padding max-w-5xl mx-auto">
      <AnimatedSection>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-2">
          <span className="gold-gradient-text">Recommendations</span>
        </h1>
        <p className="text-muted-foreground mb-16 max-w-xl">
          Words from mentors, professors, and industry professionals.
        </p>
      </AnimatedSection>

      {/* Carousel */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-2xl p-8 sm:p-12 gold-border-glow cursor-target"
          >
            <Quote className="text-primary/30 mb-6" size={48} />
            {/* REPLACE: Recommendation quotes, names, and designations */}
            <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 font-body italic">
              "{recommendations[current].quote}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-secondary gold-ring flex items-center justify-center">
                {/* REPLACE: Recommender photos */}
                <User className="text-muted-foreground" size={24} />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground">{recommendations[current].name}</p>
                <p className="text-sm text-muted-foreground">{recommendations[current].designation}</p>
                <p className="text-xs text-primary">{recommendations[current].relationship}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} className="p-3 rounded-full bg-card gold-border-glow hover:bg-secondary transition-colors">
            <ChevronLeft className="text-primary" size={20} />
          </button>
          <div className="flex items-center gap-2">
            {recommendations.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-secondary"
                }`}
              />
            ))}
          </div>
          <button onClick={next} className="p-3 rounded-full bg-card gold-border-glow hover:bg-secondary transition-colors">
            <ChevronRight className="text-primary" size={20} />
          </button>
        </div>
      </div>

      {/* All recommendations stacked (mobile-friendly fallback) */}
      <div className="mt-16 space-y-6">
        <AnimatedSection>
          <h2 className="text-2xl font-heading font-bold mb-6">All Recommendations</h2>
        </AnimatedSection>
        {recommendations.map((rec, i) => (
          <AnimatedSection key={rec.name} delay={i * 0.1}>
            <div className="bg-card rounded-xl p-6 gold-border-glow cursor-target">
              <Quote className="text-primary/20 mb-3" size={24} />
              <p className="text-muted-foreground italic mb-4">"{rec.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <User className="text-muted-foreground" size={16} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{rec.name}</p>
                  <p className="text-xs text-muted-foreground">{rec.designation}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
