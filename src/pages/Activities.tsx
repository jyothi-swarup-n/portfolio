import { motion } from "framer-motion";
import { Users, Heart, Trophy, Briefcase, Award } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import { useRef, useEffect, useState } from "react";

const clubs = [
  { name: "Finance Club", role: "Vice President", desc: "Organized 5+ workshops on investment strategies and financial literacy for 100+ students." },
  { name: "Entrepreneurship Cell", role: "Core Committee Member", desc: "Spearheaded the annual startup pitch competition and mentored 10 early-stage student ventures." },
  { name: "Debate & MUN Society", role: "Secretary", desc: "Led delegation to 3 national-level Model United Nations conferences, winning Best Delegate twice." },
];

const community = [
  { name: "Financial Literacy Drive", desc: "Conducted workshops in rural communities to promote basic financial planning and digital banking awareness.", icon: Heart },
  { name: "Campus Sustainability Initiative", desc: "Co-founded a green initiative reducing campus waste by 20% through recycling programs and awareness campaigns.", icon: Users },
];

const stats = [
  { icon: Users, label: "Clubs", value: 3 },
  { icon: Briefcase, label: "Internships", value: 2 },
  { icon: Award, label: "Certifications", value: 8 },
];

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let c = 0;
          const step = Math.max(1, Math.floor(target / 30));
          const interval = setInterval(() => {
            c += step;
            if (c >= target) { c = target; clearInterval(interval); }
            setCount(c);
          }, 40);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
};

const Activities = () => (
  <div className="section-padding max-w-7xl mx-auto">
    <AnimatedSection>
      <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-2">
        Extra-Curricular <span className="gold-gradient-text">Activities</span>
      </h1>
      <p className="text-muted-foreground mb-12 max-w-xl">
        Leadership, community impact, and life beyond academics.
      </p>
    </AnimatedSection>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      {/* Clubs */}
      <div>
        <AnimatedSection>
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
            <Trophy className="text-primary" size={22} />
            Club Leadership
          </h2>
        </AnimatedSection>
        <div className="space-y-4">
          {clubs.map((club, i) => (
            <AnimatedSection key={club.name} delay={i * 0.1}>
              {/* REPLACE: Club names, roles, and descriptions */}
              <motion.div whileHover={{ y: -3 }} className="bg-card rounded-xl p-6 gold-border-glow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/15 text-primary">{club.role}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{club.name}</h3>
                <p className="text-sm text-muted-foreground">{club.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Community */}
      <div>
        <AnimatedSection>
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
            <Heart className="text-primary" size={22} />
            Societal Impact
          </h2>
        </AnimatedSection>
        <div className="space-y-4">
          {community.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.1}>
              {/* REPLACE: Initiative names and descriptions */}
              <motion.div whileHover={{ y: -3 }} className="bg-card rounded-xl p-6 gold-border-glow">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>

    {/* Beyond the Classroom Banner */}
    <AnimatedSection>
      <div className="bg-gradient-to-r from-primary/10 via-card to-primary/5 rounded-2xl p-8 sm:p-12 gold-border-glow text-center cursor-target">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-8 text-foreground">
          Beyond the <span className="gold-gradient-text">Classroom</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <s.icon className="text-primary mb-2" size={28} />
              <span className="text-3xl sm:text-4xl font-heading font-bold gold-gradient-text">
                <Counter target={s.value} />
              </span>
              <span className="text-sm text-muted-foreground mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  </div>
);

export default Activities;
