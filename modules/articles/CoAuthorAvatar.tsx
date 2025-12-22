"use client";

import { useState } from "react";
import Image from "next/image";
import {
  useFloating,
  autoUpdate,
  offset,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react";
import type { Person } from "@/data/people";
import styles from "./BlogpostLayout.module.css";

interface CoAuthorAvatarProps {
  author: Person;
}

export default function CoAuthorAvatar({ author }: CoAuthorAvatarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom",
    middleware: [offset(8), shift()],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <a
        ref={refs.setReference}
        href={author.social}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.coAuthorAvatar}
        {...getReferenceProps()}
      >
        <Image
          src={author.picture}
          alt={author.name}
          width={40}
          height={40}
          className={styles.coAuthorImage}
          unoptimized={!author.picture.includes("github.com")}
        />
      </a>
      {isOpen && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className={styles.coAuthorTooltip}
            {...getFloatingProps()}
          >
            {author.name}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}

