"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

type TextGenerateEffectProps = {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
};

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    let isCancelled = false;

    const run = async () => {
      while (!isCancelled) {
        // reset
        await animate(
          "span",
          {
            opacity: 0,
            filter: filter ? "blur(10px)" : "none",
          },
          { duration: 0 }
        );

        // play
        await animate(
          "span",
          {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
          },
          {
            duration: duration ?? 1,
            delay: stagger(0.2),
          }
        );

        // small pause before next loop
        await new Promise((r) => setTimeout(r, 800));
      }
    };

    run();

    return () => {
      isCancelled = true;
    };
  }, [animate, filter, duration]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="opacity-0"
          style={{
            filter: filter ? "blur(10px)" : "none",
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-2xl leading-snug tracking-wide text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
