"use client";

import { useState } from "react";
import Link from "next/link";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react";
import styles from "./Footer.module.css";

interface LinkItem {
  title: string;
  url: string;
  icon: string;
}

function FooterLink({ link }: { link: LinkItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "top",
    middleware: [offset(8), flip(), shift()],
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
      <Link
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.navLink}
      >
        <span
          ref={refs.setReference}
          className={styles.anchor}
          {...getReferenceProps()}
        >
          <i className={`${styles.icon} ${link.icon}`} />
        </span>
      </Link>
      {isOpen && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className={styles.tooltip}
            {...getFloatingProps()}
          >
            {link.title}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}

export default function Footer() {
  const links: LinkItem[] = [
    {
      title: "Bluesky",
      url: "https://bsky.app/profile/mickaelalvs.dev",
      icon: "ri-bluesky-line",
    },
    {
      title: "GitHub",
      url: "https://github.com/mickaelalvs",
      icon: "ri-github-line",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/mickaelalvs",
      icon: "ri-twitter-line",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/mickaelalves",
      icon: "ri-linkedin-line",
    },
    {
      title: "Email",
      url: "mailto:alves.mckl@gmail.com",
      icon: "ri-mail-line",
    },
  ];

  return (
    <footer className={styles.container}>
      {links.map((link, index) => (
        <FooterLink key={index} link={link} />
      ))}
    </footer>
  );
}
