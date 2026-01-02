import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Carousel, CarouselItem } from "@/components/ui/carousel";

// All recent photo filenames from git
const photos = [
  {
    src: "/assets/20240811_100335.jpg",
    alt: "Recent photograph 1",
  },
  {
    src: "/assets/IMG-20241013-WA0031.jpg",
    alt: "Recent photograph 2",
  },
  {
    src: "/assets/HULT Prize 2024.jpg",
    alt: "Recent photograph 3",
  },
];

const Photography = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <section className="flex-1 py-16 md:py-24 lg:py-32">
        <div className="section-container px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-primary mb-2 md:mb-3">
              Visual Journey
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4">
              Photography Gallery
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my recent photographs, captured with passion and
              creativity. Each moment tells a story.
            </p>
          </div>

          {/* Main Carousel */}
          <div className="w-full max-w-5xl mx-auto mb-12">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Carousel
                autoPlay
                interval={4000}
                showArrows
                showIndicators
                className="w-full"
              >
                {photos.map((photo, idx) => (
                  <CarouselItem key={idx}>
                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay with index */}
                      <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <span className="text-white text-sm font-medium">
                          {idx + 1} / {photos.length}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </Carousel>
            </div>

            {/* Photo Counter and Description */}
            <div className="mt-6 text-center">
              <p className="font-body text-muted-foreground text-sm md:text-base">
                Auto-rotating carousel • Swipe or use arrows to navigate
              </p>
            </div>
          </div>

          {/* Photo Grid - All photos displayed */}
          <div className="mt-16 md:mt-24">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-8 text-center">
              All Photos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {photos.map((photo, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-[250px] md:h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <span className="text-white font-body text-sm font-medium">
                      Photo {idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Photography;
