import { type ReactNode, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationType = "fade-up" | "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale-in";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number | "100" | "200" | "300" | "400" | "500";
  duration?: number;
  once?: boolean;
  stagger?: boolean;
}

const variants: Record<AnimationType, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 24, filter: "blur(2px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "fade-in": {
    hidden: { opacity: 0, filter: "blur(2px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 40, filter: "blur(2px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -30, filter: "blur(2px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 30, filter: "blur(2px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.94, filter: "blur(3px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
};

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const AnimatedSection = ({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  once = true,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px 0px" });

  const delaySeconds =
    typeof delay === "string" ? parseInt(delay) / 1000 : delay;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{
        duration: duration + 0.15,
        delay: delaySeconds,
        ease: EASE,
      }}
      className={cn(className)}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
};

// Staggered children container : wraps list items so they appear one-by-one
export const StaggerList = ({
  children,
  className,
  staggerDelay = 0.08,
  initialDelay = 0,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            delayChildren: initialDelay,
            staggerChildren: staggerDelay,
          },
        },
        hidden: {},
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

// Individual staggered item : use inside StaggerList
export const StaggerItem = ({
  children,
  className,
  animation = "fade-up",
}: {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
}) => (
  <motion.div
    variants={{
      hidden: variants[animation].hidden,
      visible: {
        ...(variants[animation].visible as object),
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
      },
    }}
    className={cn(className)}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
