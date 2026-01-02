import { GraduationCap, Camera, FlaskConical, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="section-container px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-primary mb-2 md:mb-3">
            Get to know me
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left - Text Content */}
          <div className="space-y-4 md:space-y-6">
            <p className="font-body text-base md:text-lg text-foreground leading-relaxed">
              I'm a B.Tech Biotechnology undergraduate at{" "}
              <span className="text-primary font-medium">Heritage Institute of Technology, Kolkata</span>{" "}
              with a passion for understanding life at the molecular level — and capturing its beauty through photography.
            </p>

            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              With international research exposure at{" "}
              <span className="text-primary">NJIT, USA</span> and{" "}
              <span className="text-primary">CSIR-CCMB, Hyderabad</span>, I've developed expertise in 
              proteomics, brain imaging (fMRI), and molecular docking — blending analytical insight with creative intuition.
            </p>

            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              Beyond the laboratory, I find solace behind the camera lens — capturing candid moments, 
              wildlife, and the poetry of everyday life. Both science and photography require the same keen 
              eye for detail and appreciation for patterns in nature.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 pt-4 md:pt-6">
              <div className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-card border border-border">
                <p className="font-display text-xl md:text-2xl font-medium text-primary">9.61</p>
                <p className="font-body text-xs text-muted-foreground mt-1">GPA</p>
              </div>
              <div className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-card border border-border">
                <p className="font-display text-xl md:text-2xl font-medium text-primary">2+</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Publications</p>
              </div>
              <div className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-card border border-border">
                <p className="font-display text-xl md:text-2xl font-medium text-primary">3</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Internships</p>
              </div>
              <div className="text-center p-3 md:p-4 rounded-xl md:rounded-2xl bg-card border border-border">
                <p className="font-display text-xl md:text-2xl font-medium text-primary">3</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Awards</p>
              </div>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="space-y-4 md:space-y-6">
            <div className="glass-card p-4 md:p-6 hover-lift">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2.5 md:p-3 rounded-lg md:rounded-xl bg-primary/10 shrink-0">
                  <FlaskConical className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-1 md:mb-2">
                    Research Focus
                  </h3>
                  <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed">
                    Proteomics & Mass Spectrometry, Brain Imaging (fMRI), Molecular Docking, 
                    and understanding disease mechanisms at the cellular level.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 md:p-6 hover-lift">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2.5 md:p-3 rounded-lg md:rounded-xl bg-accent/50 shrink-0">
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-1 md:mb-2">
                    International Exposure
                  </h3>
                  <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed">
                    Research exchange at New Jersey Institute of Technology, USA — studying 
                    functional brain connectivity using fMRI under Prof. Bharat Biswal.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 md:p-6 hover-lift">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2.5 md:p-3 rounded-lg md:rounded-xl bg-secondary shrink-0">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-1 md:mb-2">
                    Academic Recognition
                  </h3>
                  <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed">
                    Multiple poster presentation awards at national & international conferences, 
                    HULT Prize Finalist with innovative biodegradable solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 md:p-6 hover-lift">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2.5 md:p-3 rounded-lg md:rounded-xl bg-primary/20 shrink-0">
                  <Camera className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-1 md:mb-2">
                    Creative Pursuits
                  </h3>
                  <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed">
                    Active member of Pravasana — the Photography, Painting & Videography club. 
                    I love capturing candid moments, birds, and wildlife.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
