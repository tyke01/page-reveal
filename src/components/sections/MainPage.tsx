"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import PreLoader from "@/components/pre-loader";
import { TextSplitter } from "@/components/text-splitter";

const MainPage = () => {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const textContainer = useRef<HTMLDivElement>(null);

  const handlePreloaderComplete = () => {
    setPreloaderComplete(true);
  };

  useGSAP(() => {
    gsap.set(".text-reveal", { y: 100, opacity: 0, rotateZ: 90 });

    if (preloaderComplete) {
      gsap.to(".text-reveal", {
        y: 0,
        rotateZ: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.out",
        stagger: 0.1,
      });
    }
  }, [preloaderComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-950 text-white">
      <PreLoader onComplete={handlePreloaderComplete} />

      <section
        ref={textContainer}
        className="flex flex-col items-center justify-center gap-4"
      >
        <h1 className="hero-header text-6xl text-balance overflow-hidden">
          <TextSplitter text="Discover Good Stuff" className="text-reveal" />
        </h1>
        <p className="animated-text text-lg md:text-2xl">
          Let&apos;s explore something amazing!
        </p>
      </section>
    </div>
  );
};

export default MainPage;
