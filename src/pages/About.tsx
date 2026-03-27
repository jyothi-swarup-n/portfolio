import { motion } from "framer-motion";
import { Linkedin, Play, GraduationCap, BookOpen, BarChart3, Calculator } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const skillBarVariants = {
  hidden: { width: 0 },
  visible: (w: string) => ({
    width: w,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const courses = [
  { icon: BarChart3, name: "Spreadsheets & Data Analysis", desc: "Advanced Excel, pivot tables, data visualization, and business analytics tools.", grade: "85%" },
  { icon: Calculator, name: "Economics", desc: "Micro & macroeconomic theory, market structures, and policy analysis.", grade: "80%" },
  { icon: BookOpen, name: "Business Statistics", desc: "Probability, hypothesis testing, regression analysis, and statistical inference.", grade: "90%" },
];

const About = () => (
  <div className="section-padding max-w-7xl mx-auto">
    <AnimatedSection>
      <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-2">
        About <span className="gold-gradient-text">Me</span>
      </h1>
      <p className="text-muted-foreground mb-12 max-w-xl">
        Get to know the person behind the portfolio.
      </p>
    </AnimatedSection>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      {/* Resume Summary */}
      <AnimatedSection>
        <div className="bg-card rounded-xl p-8 gold-border-glow h-full cursor-target">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
            <GraduationCap className="text-primary" size={24} />
            Resume Summary
          </h2>
          <div className="space-y-4 text-sm">
            {[
              { label: "Name", value: "Your Full Name" },
              { label: "Degree", value: "Bachelor of Business Administration (BBA)" },
              { label: "University", value: "Mahindra University, School of Management" },
              { label: "Graduation Year", value: "2025" },
              { label: "CGPA", value: "X.XX / 10" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between border-b border-border pb-3">
                {/* REPLACE: All values below */}
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-medium text-foreground">{item.value}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="gold-button inline-flex items-center gap-2 mt-6 cursor-target"
          >
            {/* REPLACE: Your LinkedIn URL */}
            <Linkedin size={16} />
            View LinkedIn Profile
          </a>
        </div>
      </AnimatedSection>

      {/* Academic Highlights */}
      <AnimatedSection delay={0.15}>
        <div className="space-y-4">
          <h2 className="text-2xl font-heading font-bold mb-4">Academic Highlights</h2>
          {courses.map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-xl p-6 gold-border-glow card-lift cursor-target"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <course.icon className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{course.name}</h3>
                  {/* REPLACE: Course descriptions */}
                  <p className="text-sm text-muted-foreground mb-3">{course.desc}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-gold-light rounded-full"
                        variants={skillBarVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={course.grade}
                      />
                    </div>
                    <span className="text-xs font-medium text-primary">{course.grade}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>

    {/* Video Introduction */}
    <AnimatedSection>
      <h2 className="text-2xl font-heading font-bold mb-6">Video Introduction</h2>
      <div className="bg-card rounded-xl gold-border-glow overflow-hidden aspect-video flex items-center justify-center relative group cursor-target">
        {/* REPLACE: Embed your YouTube video or replace with actual video */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Play className="text-primary ml-1" size={32} />
          </div>
          <p className="text-muted-foreground text-sm">Click to play introduction</p>
        </div>
      </div>
    </AnimatedSection>
  </div>
);

export default About;
