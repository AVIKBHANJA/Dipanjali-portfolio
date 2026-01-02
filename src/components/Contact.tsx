import { Mail, Linkedin, MapPin, Send, BookOpen, Instagram } from "lucide-react";
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
            Excited to connect with fellow researchers, collaborators, or anyone interested in biotechnology and creative pursuits.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
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
                    <p className="font-body text-xs md:text-sm text-muted-foreground">Email</p>
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
                    <p className="font-body text-xs md:text-sm text-muted-foreground">LinkedIn</p>
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
                    <p className="font-body text-xs md:text-sm text-muted-foreground">Location</p>
                    <p className="font-body text-sm md:text-base text-foreground">
                      Howrah, West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Links */}
            <div>
              <h4 className="font-display text-lg md:text-xl font-medium text-foreground mb-3 md:mb-4">
                Other Profiles
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all font-body text-xs md:text-sm text-muted-foreground hover:text-primary"
                >
                  <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Google Scholar
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all font-body text-xs md:text-sm text-muted-foreground hover:text-primary"
                >
                  <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Instagram
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

          {/* Contact Form */}
          <div className="glass-card p-4 md:p-6 lg:p-8 order-1 lg:order-2">
            <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-4 md:mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-body text-sm text-foreground mb-1.5 md:mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm md:text-base text-foreground"
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-sm text-foreground mb-1.5 md:mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm md:text-base text-foreground"
                  placeholder="jane@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-sm text-foreground mb-1.5 md:mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm md:text-base text-foreground resize-none"
                  placeholder="I'd love to connect about research, collaboration, or photography..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-primary text-primary-foreground font-body font-medium text-sm md:text-base hover:opacity-90 transition-opacity active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
