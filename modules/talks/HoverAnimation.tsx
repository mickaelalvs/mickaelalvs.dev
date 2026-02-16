"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./HoverAnimation.module.css";

interface HoverAnimationProps {
  id: string | number;
  layoutId: string;
  children: React.ReactNode;
  className?: string;
  backgroundClassName?: string;
  /** État partagé pour la transition layoutId : on ne met à jour qu'à l'entrée (onHoverStart), pas à la sortie */
  hovered?: string | number;
  setHovered?: (value: string | number) => void;
}

export function HoverAnimation({
  id,
  layoutId,
  children,
  className = "",
  backgroundClassName = "",
  hovered,
  setHovered,
}: HoverAnimationProps) {
  const [localHovered, setLocalHovered] = useState(false);

  const isControlled = setHovered !== undefined && hovered !== undefined;
  const isHovered = isControlled ? hovered === id : localHovered;

  const handleHoverStart = () => {
    if (isControlled) setHovered(id);
    else setLocalHovered(true);
  };
  const handleHoverEnd = () => {
    if (!isControlled) setLocalHovered(false);
  };

  return (
    <motion.span
      id={String(id)}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className={`${styles.wrapper} ${className}`}
    >
      {isHovered && (
        <motion.span
          key="hover-background"
          layoutId={layoutId}
          animate={{ opacity: 1 }}
          className={`${styles.hoverBackground} ${backgroundClassName}`}
        />
      )}
      {children}
    </motion.span>
  );
}
