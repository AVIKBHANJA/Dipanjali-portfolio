import { Award, Download, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Summer Research Internship",
    issuer: "CSIR - Centre for Cellular and Molecular Biology (CCMB)",
    date: "2025",
    description: "Protein-Protein Interaction studies using Mass Spectrometry",
    image:"/assets/Adobe Scan 06-Aug-2025 (3).pdf" ,
    color:
      "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20",
    icon: "🔬",
  },
  {
    title: "Summer Research Internship",
    issuer: "New Jersey Institute of Technology (NJIT)",
    date: "2024",
    description: "Functional Connectivity of Brain using fMRI",
    image: "/assets/Adobe Scan 23-Aug-2025.pdf",
    color:
      "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20",
    icon: "🧠",
  },
  {
    title: "Course Certificate",
    issuer: "Biostatistics and R Programming",
    date: "2025",
    description:
      "3-month comprehensive course on statistical analysis and programming",
    image: "/assets/Dipanjali Ray (3) (1).pdf",
    color:
      "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20",
    icon: "📊",
  },
  {
    title: "Certificate of Commendable Performance",
    issuer: "Student Paper Competition in Robotics & Healthcare",
    date: "2023",
    description:
      "Recognition for outstanding presentation and research excellence",
    image: "/assets/20240811_100335.jpg",
    color:
      "bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20",
    icon: "🏆",
  },
  {
    title: "Certificate of Participation",
    issuer: "Hult Prize on Campus 2024",
    date: "2024",
    description: "Innovation competition focused on sustainable solutions",
    image: "/assets/HULT Prize 2024.jpg",
    color: "bg-gradient-to-br from-red-500/10 to-rose-500/10 border-red-500/20",
    icon: "💡",
  },
  {
    title: "Internship Certificate",
    issuer: "Bioinformatics Internship",
    date: "2024",
    description:
      "1-month intensive training in bioinformatics tools and databases",
    image: "/assets/IMG-20241013-WA0031.jpg",
    color:
      "bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border-indigo-500/20",
    icon: "🧬",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 md:py-24 lg:py-32">
      <div className="section-container px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-primary mb-2 md:mb-3">
            Recognition & Achievements
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Certificates
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground mt-3 md:mt-4 max-w-2xl mx-auto">
            A collection of certifications, awards, and recognition from my
            academic and professional journey
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`group relative border rounded-lg p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${cert.color}`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{cert.icon}</div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="font-body text-sm text-primary font-medium mb-2">
                  {cert.issuer}
                </p>
                <p className="font-body text-xs text-muted-foreground mb-3">
                  {cert.date}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* View Certificate Link */}
              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body text-sm font-medium transition-colors group/link"
                >
                  <Download className="w-4 h-4 transition-transform group-hover/link:translate-y-0.5" />
                  View Certificate
                  <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
