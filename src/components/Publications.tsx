import { FileText, ExternalLink, BookOpen, Presentation } from "lucide-react";

const publications = [
  {
    title: "Functional Connectivity of Brain using fMRI",
    type: "Research Paper",
    journal: "NJIT Research Exchange Program",
    description:
      "Investigating brain connectivity patterns through functional magnetic resonance imaging, analyzing neural networks and their correlations.",
    year: "2024",
    status: "Published",
    doi: null,
  },
  {
    title: "Wnt Signalling & Its Effect in Human",
    type: "Review Article",
    journal: "Academic Review",
    description:
      "Comprehensive review examining the Wnt signaling pathway, its molecular mechanisms, and implications in human health and disease.",
    year: "2025",
    status: "Published",
    doi: null,
  },
];

const presentations = [
  {
    title: "Reprogramming Cancer – Therapeutic Strategy",
    event: "International Conference on Cancer & Autoimmune Disorders",
    venue: "Ramakrishna Mission Vidyamandira",
    type: "Poster Presentation",
    status: "Presented",
  },
  {
    title: "Refsum Disease Treatment by Gene Therapy",
    event: "Innovation Poster by IIC-HITK",
    venue: "Heritage Institute of Technology",
    type: "Poster Presentation",
    status: "Finalist",
  },
  {
    title: "Hepatitis E – Therapeutic Frontiers",
    event: "ANUJEEVAN National Symposium",
    venue: "RKMVC College",
    type: "Poster Presentation",
    status: "2nd Prize Winner",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-16 md:py-24 lg:py-32">
      <div className="section-container px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-primary mb-2 md:mb-3">
            Academic Output
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Publications & Presentations
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground mt-3 md:mt-4 max-w-2xl mx-auto">
            Research contributions and conference presentations in biotechnology and biomedical sciences
          </p>
        </div>

        {/* Publications */}
        <div className="mb-12 md:mb-16">
          <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
            <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            Research Publications
          </h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="glass-card p-5 md:p-6 lg:p-8 hover-lift group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-medium">
                    {pub.type}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-accent/30 text-accent-foreground font-body text-xs">
                      {pub.status}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">
                      {pub.year}
                    </span>
                  </div>
                </div>
                <h4 className="font-display text-lg md:text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pub.title}
                </h4>
                <p className="font-body text-primary text-xs md:text-sm mb-3">
                  {pub.journal}
                </p>
                <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {pub.description}
                </p>
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-primary hover:underline font-body text-xs md:text-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Paper (DOI)
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Poster Presentations */}
        <div>
          <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
            <Presentation className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            Conference Presentations
          </h3>
          <div className="space-y-3 md:space-y-4">
            {presentations.map((pres, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-body text-xs font-medium">
                        {pres.type}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full font-body text-xs font-medium ${
                        pres.status.includes("Prize") 
                          ? "bg-accent/50 text-accent-foreground" 
                          : pres.status === "Finalist"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {pres.status}
                      </span>
                    </div>
                    <h4 className="font-display text-base md:text-lg font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                      {pres.title}
                    </h4>
                    <p className="font-body text-xs md:text-sm text-muted-foreground">
                      {pres.event}
                    </p>
                  </div>
                  <div className="md:text-right">
                    <p className="font-body text-xs md:text-sm text-primary font-medium">
                      {pres.venue}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
