import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

interface Project {
  title: string;
  description: string;
  details: string;
  tags: string[];
  badge?: string;
}

const projects: Project[] = [
  {
    title: "Capstone Project",
    description: "Comprehensive financial analysis and strategic recommendation for a leading FMCG company, integrating quantitative and qualitative research methodologies.",
    details: "This capstone project involved a deep-dive analysis into the financial health, market positioning, and growth strategy of a major FMCG corporation. Methodologies included DCF valuation, comparable company analysis, and Porter's Five Forces framework. The final deliverable was a 40-page report with actionable recommendations presented to a faculty panel.",
    tags: ["Finance", "Valuation", "Strategy"],
    badge: "A+ Grade",
  },
  {
    title: "Research Paper",
    description: "Published research on the impact of ESG factors on stock performance in emerging markets, utilizing regression analysis on 5 years of data.",
    details: "This research paper examined the correlation between Environmental, Social, and Governance (ESG) scores and stock market returns across 50 companies in emerging markets. Statistical methods included multiple regression, panel data analysis, and Granger causality tests. The paper was presented at the university research symposium.",
    tags: ["Research", "ESG", "Data Analysis"],
  },
  {
    title: "Business Analytics Dashboard",
    description: "Interactive Tableau dashboard for real-time sales performance tracking and predictive forecasting using historical data patterns.",
    details: "Designed and built an interactive business intelligence dashboard using Tableau, connected to a cleaned dataset of 50,000+ transaction records. Features include dynamic filtering, trend analysis, regional performance heatmaps, and a predictive model for next-quarter sales forecasting using time series analysis.",
    tags: ["Analytics", "Tableau", "Visualization"],
  },
  {
    title: "Podcast & Creative Content",
    description: "Launched a business-focused podcast exploring startup culture, financial literacy, and career development for young professionals.",
    details: "Created and hosted a 12-episode podcast series interviewing industry professionals, startup founders, and academics on topics ranging from personal finance to entrepreneurship. Managed all aspects including content strategy, recording, editing, social media promotion, and audience engagement analytics.",
    tags: ["Podcast", "Content", "Innovation"],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="section-padding max-w-7xl mx-auto">
      <AnimatedSection>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-2">
          Projects & <span className="gold-gradient-text">Research</span>
        </h1>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Academic projects, research work, and creative ventures.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-card rounded-xl p-6 gold-border-glow cursor-target h-full flex flex-col"
              onClick={() => setSelected(project)}
            >
              {project.badge && (
                <span className="inline-block self-start px-3 py-1 text-xs font-semibold rounded-full bg-primary/15 text-primary mb-4">
                  {project.badge}
                </span>
              )}
              {/* REPLACE: Project titles and descriptions */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="gold-outline-button text-sm flex items-center gap-2 self-start cursor-target">
                <ExternalLink size={14} />
                View Details
              </button>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-card rounded-2xl p-8 max-w-2xl w-full gold-border-glow max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  {selected.badge && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/15 text-primary mb-3">
                      {selected.badge}
                    </span>
                  )}
                  <h2 className="text-2xl font-heading font-bold text-foreground">{selected.title}</h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">{selected.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
