import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Rocket } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const timelineItems = [
  {
    icon: Briefcase,
    title: "Internship at ABC Corp",
    role: "Finance Analyst Intern",
    dates: "May 2024 – July 2024",
    bullets: [
      "Conducted in-depth financial analysis and prepared quarterly reports for senior management.",
      "Assisted in developing financial models for strategic planning and investment evaluation.",
      "Collaborated with cross-functional teams on data-driven business recommendations.",
    ],
    side: "left" as const,
  },
  {
    icon: TrendingUp,
    title: "Family Business Experience",
    role: "Business Operations Assistant",
    dates: "2022 – Present",
    bullets: [
      "Managed day-to-day financial operations including accounts receivable and payable.",
      "Implemented process improvements that increased operational efficiency by 15%.",
      "Gained hands-on experience in supply chain management and vendor negotiations.",
    ],
    side: "right" as const,
  },
];

const Experience = () => (
  <div className="section-padding max-w-5xl mx-auto">
    <AnimatedSection>
      <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-2">
        Work <span className="gold-gradient-text">Experience</span>
      </h1>
      <p className="text-muted-foreground mb-16 max-w-xl">
        Professional experiences that shaped my career trajectory.
      </p>
    </AnimatedSection>

    {/* Timeline */}
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

      <div className="space-y-12">
        {timelineItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className={`relative flex flex-col md:flex-row items-start gap-6 ${
              item.side === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_hsl(43,55%,54%,0.5)] z-10 mt-8" />

            {/* Spacer for centering */}
            <div className="hidden md:block md:w-1/2" />

            {/* Card */}
            <div className="ml-12 md:ml-0 md:w-1/2">
              {/* REPLACE: Company name, role, dates, and bullet points */}
              <div className="bg-card rounded-xl p-6 gold-border-glow card-lift cursor-target">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-primary">{item.role}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{item.dates}</p>
                <ul className="space-y-2">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Entrepreneurship */}
    <AnimatedSection className="mt-16">
      <div className="bg-gradient-to-r from-primary/10 via-card to-primary/5 rounded-xl p-8 gold-border-glow cursor-target">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/20">
            <Rocket className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold mb-2 text-foreground">
              Entrepreneurial Spirit
            </h3>
            {/* REPLACE: Your entrepreneurship experience */}
            <p className="text-muted-foreground leading-relaxed">
              Beyond traditional internships, I have actively pursued entrepreneurial ventures — 
              from ideating scalable business models to participating in startup pitch competitions. 
              This hands-on experience has sharpened my strategic thinking, resilience, and ability 
              to navigate uncertainty in dynamic business environments.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </div>
);

export default Experience;
