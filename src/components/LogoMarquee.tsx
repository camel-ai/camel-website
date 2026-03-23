"use client";

import React from "react";
import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
};

type CustomerLogosProps = {
  logos: Logo[];
};

export default function LogoMarquee({ logos }: CustomerLogosProps) {
  return (
    <section className="w-full py-12">
      <div className="mx-auto flex w-full flex-col gap-8 text-center opacity-60">
        <div className="marquee relative w-full overflow-hidden">
          {/* Track (duplicated items for seamless loop) */}
          <div className="track flex w-max items-center gap-8">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={`logo-${idx}`}
                className="flex h-16 w-[160px] shrink-0 items-center justify-center rounded-xl border border-transparent px-4 dark:border-white/20 dark:bg-white"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={40}
                  sizes="140px"
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .marquee :global(.marquee) {
          /* Subtle edge fade on both sides */
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .track {
          animation: marquee 60s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
