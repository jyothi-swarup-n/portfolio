import { Link } from "react-router-dom";
import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="font-heading text-xl font-bold gold-gradient-text">
            {/* REPLACE: Your Name */}
            Your Name
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            {/* REPLACE: Your tagline */}
            BBA Student | Aspiring Finance Professional
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/experience", label: "Experience" },
            { to: "/projects", label: "Projects" },
            { to: "/certifications", label: "Certifications" },
            { to: "/activities", label: "Activities" },
            { to: "/recommendations", label: "Recommendations" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* REPLACE: Your social links */}
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="mailto:your@email.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        Portfolio built as part of BBA Program, Mahindra University School of Management
      </div>
    </div>
  </footer>
);

export default Footer;
