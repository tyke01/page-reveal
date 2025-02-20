"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type PreLoaderProps = {
  onComplete: () => void;
};

export default function PreLoader({ onComplete }: PreLoaderProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (container.current) {
        const tl = gsap.timeline();
        const tl2 = gsap.timeline();

        // Scale animation for badge
        tl.to(".badge", {
          scale: 2,
          duration: 1,
          ease: "back.out(1.7)",
        });

        // Fade in the loader text
        tl.to(
          ".progress-text",
          {
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
          },
          0
        );

        // Simulated loading effect
        tl.to(
          ".progress-text",
          {
            duration: 1.5,
            ease: "power2.inOut",
            onComplete: () => {
              tl2.to(container.current, {
                yPercent: -100,
                borderBottomLeftRadius: "50vw",
                borderBottomRightRadius: "50vw",
                duration: 0.7,
                ease: "power3.inOut",
                onUpdate: () => {
                  if (tl2.progress() >= 0.4) {
                    onComplete();
                  }
                },
              });
            },
          },
          0.5
        );
      }
    },
    { scope: container }
  );

  return (
    <section
      className="fixed inset-0 flex flex-col items-center justify-center gap-8 w-full h-full rounded-bl-[0] rounded-br-[0] bg-[#121216] text-white z-[9999] overflow-hidden"
      ref={container}
    >
      <div className="badge scale-0 text-4xl font-bold tracking-widest">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="progress-text text-xl font-medium opacity-0 text-center w-full px-6 md:px-0">
        Hold on there, the website is loading...
      </div>
    </section>
  );
}
