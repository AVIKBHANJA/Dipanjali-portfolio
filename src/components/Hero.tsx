import { ArrowDown, Linkedin, Mail, FileText, Camera } from "lucide-react";
import heroBackground from "@/assets/hero-botanical.jpg";
import LabMouse from "./LabMouse";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay - adjusted for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background dark:from-background/70 dark:via-background/50 dark:to-background" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-4 md:left-10 w-2 md:w-3 h-2 md:h-3 rounded-full bg-primary/30 animate-float" />
      <div className="absolute top-1/3 right-8 md:right-20 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-accent/50 animate-float animation-delay-400" />
      <div className="absolute bottom-1/3 left-1/4 w-3 md:w-4 h-3 md:h-4 rounded-full bg-secondary/40 animate-float animation-delay-600" />

      {/* Content */}
      <div className="relative z-10 section-container text-center px-4">
        <div className="opacity-0 animate-fade-up">
          <p className="font-body text-xs md:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase text-primary mb-3 md:mb-4">
            Biotech Undergraduate & Researcher
          </p>
        </div>

        <h1 className="opacity-0 animate-fade-up animation-delay-200 font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-4 md:mb-6 leading-tight">
          Dipanjali Ray
        </h1>

        <p className="opacity-0 animate-fade-up animation-delay-400 font-body text-base md:text-xl text-muted-foreground max-w-xl md:max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed px-2">
          Fusing science with visual creativity — exploring the frontiers of 
          <span className="text-primary font-medium"> proteomics</span>, 
          <span className="text-primary font-medium"> neuroimaging</span>, and 
          <span className="text-primary font-medium"> molecular biology</span>.
        </p>

        {/* Tagline */}
        <p className="opacity-0 animate-fade-up animation-delay-400 font-display text-sm md:text-lg italic text-foreground/80 mb-6 md:mb-8">
          "I study biological processes by day and capture nature through my lens at golden hour."
        </p>

        {/* CTA Buttons */}
        <div className="opacity-0 animate-fade-up animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          <a
            href="#experience"
            className="flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-primary text-primary-foreground font-body font-medium text-sm md:text-base hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            <FileText className="w-4 h-4" />
            View Research
          </a>
          <a
            href="#photography"
            className="flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-card border border-border text-foreground font-body font-medium text-sm md:text-base hover:border-primary hover:bg-primary/5 transition-all"
          >
            <Camera className="w-4 h-4" />
            Photo Gallery
          </a>
        </div>

        {/* Social Links */}
        <div className="opacity-0 animate-fade-up animation-delay-600 flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          <a
            href="https://www.linkedin.com/in/dipanjali-ray"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:dipanjaliray24@gmail.com"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Scroll Indicator with Lab Mouse */}
        <a
          href="#about"
          className="opacity-0 animate-fade-up animation-delay-800 inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="flex items-center gap-3">
            <LabMouse size={45} className="animate-float drop-shadow-sm" />
            <span className="font-body text-xs tracking-wider uppercase">Scroll to explore</span>
          </div>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
