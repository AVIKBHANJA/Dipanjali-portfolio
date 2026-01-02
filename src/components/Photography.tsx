import { Camera, Heart, ExternalLink } from "lucide-react";

const photos = [
  {
    id: 1,
    title: "Golden Hour",
    category: "Nature",
    placeholder: "bg-gradient-to-br from-amber-200 to-orange-300 dark:from-amber-700 dark:to-orange-800",
  },
  {
    id: 2,
    title: "Wildlife Moment",
    category: "Wildlife",
    placeholder: "bg-gradient-to-br from-green-200 to-emerald-300 dark:from-green-700 dark:to-emerald-800",
  },
  {
    id: 3,
    title: "Candid Life",
    category: "Portrait",
    placeholder: "bg-gradient-to-br from-rose-200 to-pink-300 dark:from-rose-700 dark:to-pink-800",
  },
  {
    id: 4,
    title: "Birds in Flight",
    category: "Wildlife",
    placeholder: "bg-gradient-to-br from-sky-200 to-blue-300 dark:from-sky-700 dark:to-blue-800",
  },
  {
    id: 5,
    title: "Nature's Pattern",
    category: "Macro",
    placeholder: "bg-gradient-to-br from-lime-200 to-green-300 dark:from-lime-700 dark:to-green-800",
  },
  {
    id: 6,
    title: "Evening Serenity",
    category: "Landscape",
    placeholder: "bg-gradient-to-br from-purple-200 to-indigo-300 dark:from-purple-700 dark:to-indigo-800",
  },
];

const Photography = () => {
  return (
    <section id="photography" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="section-container px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-primary mb-2 md:mb-3">
            Creative Side
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-3 md:mb-4">
            Photography
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-4">
            "I feel free when my hands are tied with camera strings..." — capturing candid moments, wildlife, and the poetry of everyday life.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary">
            <Camera className="w-4 h-4" />
            <span className="font-body text-sm">Member of Pravasana — Photography, Painting & Videography Club</span>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-12">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-xl md:rounded-2xl aspect-square cursor-pointer hover-lift ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Placeholder gradient (replace with actual photos) */}
              <div className={`absolute inset-0 ${photo.placeholder}`} />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <Camera className="w-6 h-6 md:w-8 md:h-8 text-background mx-auto mb-2" />
                  <p className="font-display text-sm md:text-base font-medium text-background">
                    {photo.title}
                  </p>
                  <p className="font-body text-xs text-background/80">
                    {photo.category}
                  </p>
                </div>
              </div>

              {/* Category tag */}
              <div className="absolute top-2 md:top-3 left-2 md:left-3">
                <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-background/80 backdrop-blur-sm text-foreground font-body text-xs">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 md:p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
              <span className="font-body text-sm md:text-base text-muted-foreground">
                Want to see more of my work?
              </span>
            </div>
            <a
              href="mailto:dipanjaliray24@gmail.com?subject=Photography Inquiry"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-body text-sm hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Get in Touch
            </a>
          </div>
          <p className="font-body text-xs text-muted-foreground mt-4">
            * Photo placeholders shown — add your actual photographs to showcase your work
          </p>
        </div>
      </div>
    </section>
  );
};

export default Photography;
