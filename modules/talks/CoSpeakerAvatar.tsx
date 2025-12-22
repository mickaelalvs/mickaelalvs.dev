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
import styles from "./TalkDetailPage.module.css";

interface CoSpeakerAvatarProps {
    speaker: Person;
}

export default function CoSpeakerAvatar({ speaker }: CoSpeakerAvatarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: "right",
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
                href={speaker.social}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.coSpeakerAvatar}
                {...getReferenceProps()}
            >
                <Image
                    src={speaker.picture}
                    alt={speaker.name}
                    width={40}
                    height={40}
                    className={styles.coSpeakerImage}
                    unoptimized={!speaker.picture.includes("github.com")}
                />
            </a>
            {isOpen && (
                <FloatingPortal>
                    <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        className={styles.coSpeakerTooltip}
                        {...getFloatingProps()}
                    >
                        {speaker.name}
                    </div>
                </FloatingPortal>
            )}
        </>
    );
}
