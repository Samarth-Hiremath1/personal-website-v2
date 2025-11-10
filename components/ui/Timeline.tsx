"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  company: string;
  position: string;
  dates: string;
  location: string;
  logo: string;
  description: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans relative"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto py-12 sm:py-16 md:py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10 md:mb-12 text-center font-bold" style={{ color: '#FFFFFF' }}>
          Professional Experience
        </h2>
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto pb-0">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="flex justify-start pt-8 sm:pt-12 md:pt-20 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-start top-32 sm:top-36 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full h-fit">
                {/* Logo container - centered on timeline */}
                <div 
                  className="h-16 w-16 sm:h-20 sm:w-20 absolute -left-2 md:-left-2 rounded-full bg-white flex items-center justify-center overflow-hidden"
                  style={{ 
                    border: '2px solid #6C1FFF',
                    boxShadow: '0 0 15px rgba(108, 31, 255, 0.4)'
                  }}
                >
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div className="hidden md:block md:pl-28 sticky top-40">
                  <h3 className="text-xl md:text-2xl font-bold mb-1" style={{ color: '#FFFFFF' }}>
                    {item.company}
                  </h3>
                  <p className="text-sm md:text-base mb-1" style={{ color: '#B3A9C9' }}>
                    {item.position}
                  </p>
                  <p className="text-xs md:text-sm" style={{ color: '#B3A9C9', opacity: 0.7 }}>
                    {item.dates} | {item.location}
                  </p>
                </div>
              </div>

              <div className="relative pl-16 sm:pl-20 pr-4 md:pl-4 w-full">
                <div className="md:hidden block mb-4 sticky top-20 z-30">
                  <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: '#FFFFFF' }}>
                    {item.company}
                  </h3>
                  <p className="text-sm mb-1" style={{ color: '#B3A9C9' }}>
                    {item.position}
                  </p>
                  <p className="text-xs" style={{ color: '#B3A9C9', opacity: 0.7 }}>
                    {item.dates} | {item.location}
                  </p>
                </div>
                {item.description}
              </div>
            </div>
          );
        })}
        <div
          style={{
            height: height + "px",
            background: 'linear-gradient(to bottom, transparent 0%, rgba(108, 31, 255, 0.3) 10%, rgba(108, 31, 255, 0.3) 90%, transparent 100%)'
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              background: 'linear-gradient(to top, #A85CFF 0%, #6C1FFF 50%, transparent 100%)'
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
