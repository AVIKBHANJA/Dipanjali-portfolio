import { MapPin, Calendar, ExternalLink, Award, Beaker, Brain, Database } from "lucide-react";

const experiences = [
  {
    title: "Summer Research Intern",
    organization: "CSIR-CCMB",
    location: "Hyderabad, India",
    period: "Jun - Aug 2025",
    description:
      "Protein-Protein Interaction studies using Mass Spectrometry under Dr. Suman S Thakur in the Proteomics and Cell Signalling Laboratory.",
    highlights: ["Proteomics", "Mass Spectrometry", "Molecular Docking"],
    outcome: "Ongoing research on protein interaction networks",
    icon: Beaker,
  },
  {
    title: "Research Exchange Student",
    organization: "NJIT, USA",
    location: "Newark, New Jersey",
    period: "Jun - Jul 2024",
    description:
      "Investigated Functional Connectivity of Brain using fMRI under Prof. Bharat Biswal & Dr. Sukesh Das.",
    highlights: ["Brain Imaging", "fMRI", "SPM Analysis"],
    outcome: "Research publication on brain connectivity patterns",
    icon: Brain,
  },
  {
    title: "Bioinformatics Intern",
    organization: "Institute of Innovations",
    location: "Tiruvannamalai, India",
    period: "Sep 2024",
    description:
      "Hands-on training in Biological Databases, Sequence Analysis, Molecular Phylogeny, and Macromolecular Structure Analysis.",
    highlights: ["Bioinformatics", "Sequence Analysis", "Phylogeny"],
    outcome: "Proficiency in bioinformatics tools & databases",
    icon: Database,
  },
];

const achievements = [
  {
    title: "2nd Prize - Best Poster",
    event: "ANUJEEVAN National Symposium",
    topic: "Hepatitis E – Therapeutic Frontiers",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "2nd Prize - Best Poster",
    event: "ICAMB International Conference",
    topic: "Medical Biotechnology Research",
    color: "bg-accent/50 text-accent-foreground",
  },
  {
    title: "Finalist - HULT PRIZE",
    event: "HULT PRIZE Unlimited 2024",
    topic: "Biodegradable Pads Innovation",
    color: "bg-secondary text-secondary-foreground",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32">
      <div className="section-container px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-primary mb-2 md:mb-3">
            My Journey
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Research & Projects
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground mt-3 md:mt-4 max-w-2xl mx-auto">
            From proteomics to neuroimaging — each experience has shaped my understanding of biological systems
          </p>
        </div>

        {/* Experience Cards - Project Card Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-24">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={index}
                className="glass-card p-5 md:p-6 hover-lift group flex flex-col"
              >
                {/* Icon & Period */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 md:p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-body text-xs">{exp.period}</span>
                  </div>
                </div>

                {/* Title & Org */}
                <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <h4 className="font-body font-medium text-primary text-sm mb-2">
                  {exp.organization}
                </h4>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="font-body text-xs">{exp.location}</span>
                </div>

                {/* Description */}
                <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 flex-grow">
                  {exp.description}
                </p>

                {/* Outcome */}
                <div className="p-3 rounded-lg bg-muted/50 mb-4">
                  <p className="font-body text-xs text-foreground">
                    <span className="font-medium text-primary">Outcome:</span> {exp.outcome}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {exp.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-body text-xs border border-primary/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div>
          <div className="text-center mb-8 md:mb-12">
            <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-primary mb-2 md:mb-3">
              Recognition
            </p>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-foreground">
              Awards & Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-card p-5 md:p-6 hover-lift text-center group"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 rounded-full ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Award className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="font-display text-base md:text-lg font-medium text-foreground mb-2">
                  {achievement.title}
                </h4>
                <p className="font-body text-primary text-xs md:text-sm mb-2">
                  {achievement.event}
                </p>
                <p className="font-body text-muted-foreground text-xs leading-relaxed">
                  {achievement.topic}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
