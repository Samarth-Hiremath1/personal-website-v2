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
      className="w-full bg-transparent font-sans"
      ref={containerRef}
    >
      <div className="max-w-4xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-5xl mb-12 text-white text-center font-bold">
          Professional Experience
        </h2>
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto pb-20">
        {data.map((item, index) => {
          const totalItems = data.length;
          const start = index / totalItems;
          const end = (index + 1) / totalItems;
          
          return (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="flex justify-start pt-10 md:pt-20 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-start top-40 self-start max-w-xs lg:max-w-sm md:w-full h-fit">
                {/* Logo container - centered on timeline */}
                <div className="h-20 w-20 absolute -left-2 md:-left-2 rounded-full bg-white flex items-center justify-center border-2 border-primary overflow-hidden">
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div className="hidden md:block md:pl-28 sticky top-40">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {item.company}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-1">
                    {item.position}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    {item.dates} | {item.location}
                  </p>
                </div>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <div className="md:hidden block mb-4 sticky top-20 z-30">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.company}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1">
                    {item.position}
                  </p>
                  <p className="text-xs text-gray-500">
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
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-secondary via-primary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
