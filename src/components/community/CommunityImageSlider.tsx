"use client";

import React from "react";
import Image from "next/image";

const IMAGES = [
  "/image/community_1.avif",
  "/image/community_2.avif",
  "/image/community_3.avif",
  "/image/community_4.avif",
];

const MARQUEE_DURATION = 80;

export function CommunityImageSlider() {
  return (
    <section className="relative left-1/2 mb-10 w-screen -translate-x-1/2 overflow-visible py-8 md:mb-16 md:py-12">
      <div className="mx-auto flex w-full flex-col gap-8 overflow-visible text-center opacity-90">
        <div className="community-marquee relative w-full overflow-visible">
          <div className="community-track flex items-center gap-8 md:gap-16">
            {[...IMAGES, ...IMAGES].map((src, idx) => (
              <div
                key={`community-img-${idx}`}
                className="community-slide flex h-[180px] w-fit shrink-0 items-center justify-center sm:h-[240px] md:h-[320px]"
              >
                <Image
                  src={src}
                  alt={`Community ${(idx % IMAGES.length) + 1}`}
                  width={1200}
                  height={600}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 480px"
                  className="h-full w-auto object-contain"
                  priority={idx < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .community-track {
          width: max-content;
          animation: communityMarquee ${MARQUEE_DURATION}s linear infinite;
          will-change: transform;
        }

        @keyframes communityMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
