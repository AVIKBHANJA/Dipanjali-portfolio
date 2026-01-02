import {
  Mail,
  Linkedin,
  MapPin,
  Send,
  Instagram,
  Download,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="section-container px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-primary mb-2 md:mb-3">
            Let's Connect
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-3 md:mb-4">
            Get In Touch
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-md md:max-w-xl mx-auto">
            Excited to connect with fellow researchers, collaborators, or anyone
            interested in biotechnology and creative pursuits.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Info */}
          <div className="w-full max-w-2xl space-y-6 md:space-y-8">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-4 md:mb-6">
                Contact Information
              </h3>
              <div className="space-y-3 md:space-y-4">
                <a
                  href="mailto:dipanjaliray24@gmail.com"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="p-2.5 md:p-3 rounded-lg md:rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-xs md:text-sm text-muted-foreground">
                      Email
                    </p>
                    <p className="font-body text-sm md:text-base text-foreground group-hover:text-primary transition-colors truncate">
                      dipanjaliray24@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/dipanjali-ray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="p-2.5 md:p-3 rounded-lg md:rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-xs md:text-sm text-muted-foreground">
                      LinkedIn
                    </p>
                    <p className="font-body text-sm md:text-base text-foreground group-hover:text-primary transition-colors truncate">
                      linkedin.com/in/dipanjali-ray
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-card border border-border">
                  <div className="p-2.5 md:p-3 rounded-lg md:rounded-xl bg-secondary shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-xs md:text-sm text-muted-foreground">
                      Location
                    </p>
                    <p className="font-body text-sm md:text-base text-foreground">
                      Howrah, West Bengal, India
                    </p>
                  </div>
                </div>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="p-2.5 md:p-3 rounded-lg md:rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-xs md:text-sm text-muted-foreground">
                      Phone
                    </p>
                    <p className="font-body text-sm md:text-base text-foreground group-hover:text-primary transition-colors truncate">
                      +91 9876543210
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Additional Links */}
            <div>
              <h4 className="font-display text-lg md:text-xl font-medium text-foreground mb-3 md:mb-4">
                Follow
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <a
                  href="/assets/DIpanjali_Ray.pdf"
                  download
                  className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all font-body text-xs md:text-sm"
                >
                  <Download className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Download Resume
                </a>
                <a
                  href="https://www.instagram.com/dipanjaliray2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all font-body text-xs md:text-sm text-muted-foreground hover:text-primary"
                >
                  <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/dipanjali-ray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all font-body text-xs md:text-sm text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Quote */}
            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl botanical-border bg-card/50">
              <p className="font-display text-base md:text-lg italic text-foreground mb-2 md:mb-3">
                "I feel free when my hands are tied with camera strings..."
              </p>
              <p className="font-body text-xs md:text-sm text-muted-foreground">
                — Researcher by day, photographer by passion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
