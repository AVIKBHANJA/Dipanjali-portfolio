import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8 border-t border-border">
      <div className="section-container px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-center md:text-left">
          <p className="font-body text-xs md:text-sm text-muted-foreground">
            © {currentYear} Dipanjali Ray. All rights reserved.
          </p>
          <p className="font-body text-xs md:text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent-foreground fill-accent" /> for science & creativity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
