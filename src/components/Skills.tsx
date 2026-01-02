const technicalSkills = [
  {
    category: "Laboratory",
    skills: ["Mass Spectrometry", "SDS-PAGE", "Molecular Docking", "Proteomics", "PCR"],
  },
  {
    category: "Computational",
    skills: ["R", "MATLAB", "Perl", "C", "SPM"],
  },
  {
    category: "Bioinformatics",
    skills: ["Sequence Analysis", "Phylogeny", "Biological Databases", "Structure Analysis"],
  },
  {
    category: "Research",
    skills: ["Scientific Writing", "Poster Design", "Data Analysis", "Literature Review"],
  },
];

const softSkills = [
  { name: "Leadership", description: "Joint Secretary, Heritage Biotech Society" },
  { name: "Event Management", description: "Organizing committee at ICAMB" },
  { name: "Communication", description: "Student Coordinator, News Club" },
  { name: "Creativity", description: "Pravasana Photography Club" },
];

const languages = [
  { name: "English", level: "Professional", percent: 85 },
  { name: "Bengali", level: "Native", percent: 100 },
  { name: "Hindi", level: "Native", percent: 100 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="section-container px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-primary mb-2 md:mb-3">
            What I Bring
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Skills & Expertise
          </h2>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-16">
          {technicalSkills.map((category, index) => (
            <div key={index} className="glass-card p-4 md:p-6 hover-lift">
              <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-3 md:mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary font-body text-xs md:text-sm border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Languages */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Soft Skills */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-4 md:mb-6">
              Soft Skills & Leadership
            </h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-3 md:p-5 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <h4 className="font-display text-base md:text-lg font-medium text-primary mb-0.5 md:mb-1">
                    {skill.name}
                  </h4>
                  <p className="font-body text-xs md:text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-4 md:mb-6">
              Languages
            </h3>
            <div className="space-y-3 md:space-y-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-card border border-border"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-body font-medium text-foreground text-sm md:text-base">
                      {lang.name}
                    </span>
                    <span className="font-body text-xs md:text-sm text-muted-foreground">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
