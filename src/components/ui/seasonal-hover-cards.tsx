import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export interface SeasonCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrcs: string[];
  className?: string;
}

interface SeasonalHoverCardsProps {
  cards: SeasonCardProps[];
  className?: string;
}

const SeasonCard = ({
  title,
  subtitle,
  description,
  imageSrcs,
  className,
}: SeasonCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // 1. New State to track hovering
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // 2. If NOT hovered, or only 1 image, do nothing (and reset to 0)
    if (!isHovered || imageSrcs.length <= 1) {
      setCurrentImageIndex(0); // Resets to the first image when you stop hovering
      return;
    }

    // 3. Start the loop ONLY while hovering
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageSrcs.length - 1 ? 0 : prevIndex + 1
      );
    }, 700); // 0.7s speed - feels smoother for hover interactions

    return () => clearInterval(interval);
  }, [isHovered, imageSrcs]); // Dependencies: Re-run when hover state changes

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-end p-6 w-full md:w-1/3 h-[350px] lg:h-[450px] bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:w-2/3",
        className
      )}
      // 4. Event Handlers to toggle state
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageSrcs[currentImageIndex]}
        className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500"
        alt={title}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

      <div className="relative md:absolute md:bottom-20 z-10 space-y-2">
        <h2 className="text-xl font-bold text-white font-heading tracking-wide">
          {title}
        </h2>
        <p className="text-sm text-gray-200">{subtitle}</p>
      </div>

      <div className="mt-4 transform translate-y-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 relative z-10">
        <p className="text-lg text-white font-medium">{description}</p>
      </div>
    </div>
  );
};

export function SeasonalHoverCards({
  cards,
  className,
}: SeasonalHoverCardsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap md:flex-nowrap gap-4 w-full px-4",
        className
      )}
    >
      {cards.map((card, index) => (
        <SeasonCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          imageSrcs={card.imageSrcs}
        />
      ))}
    </div>
  );
}
