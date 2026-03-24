"use client";

import Image from "next/image";

const IMAGES = [
  "/image/community_1.avif",
  "/image/community_2.avif",
  "/image/community_3.avif",
  "/image/community_4.avif",
];

export function CommunityImageSlider() {
  return (
    <section className="relative left-1/2 mb-10 w-screen -translate-x-1/2 overflow-visible py-8 md:mb-16 md:py-12">
      <div className="mx-auto flex w-full flex-col gap-8 overflow-visible text-center opacity-90">
        <div className="relative w-full overflow-visible">
          <div className="animate-community-marquee flex items-center gap-8 md:gap-16">
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
    </section>
  );
}
