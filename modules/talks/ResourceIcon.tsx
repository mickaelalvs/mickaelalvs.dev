'use client'

import { useRef, useState } from 'react'
import Lottie from 'lottie-react'
import { useFloating, autoUpdate, offset, flip, shift, useHover, useFocus, useDismiss, useRole, useInteractions, FloatingPortal } from '@floating-ui/react'
import captaIcon from '../../public/static/icons/capta.json'
import presentationIcon from '../../public/static/icons/presentation.json'
import sourceIcon from '../../public/static/icons/source.json'
import styles from './TalkDetailPage.module.css'

export default function ResourceIcon({ href, type }: { href: string; type: 'video' | 'slides' | 'workshop' }) {
    const iconRef = useRef<any>(null)
    const iconData = type === 'video' ? captaIcon : type === 'slides' ? presentationIcon : sourceIcon
    const [isOpen, setIsOpen] = useState(false)
    const label = type === 'video' ? 'Record' : type === 'slides' ? 'Slides' : 'Workshop'

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [offset(8), flip(), shift()],
        whileElementsMounted: autoUpdate,
    })

    const hover = useHover(context, { move: false })
    const focus = useFocus(context)
    const dismiss = useDismiss(context)
    const role = useRole(context, { role: 'tooltip' })

    const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role])

    return (
        <>
            <a
                ref={refs.setReference}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceIconLink}
                onMouseEnter={() => {
                    if (iconRef.current) {
                        iconRef.current.goToAndStop(0, true)
                        iconRef.current.play()
                    }
                }}
                onMouseLeave={() => iconRef.current?.stop()}
                {...getReferenceProps()}
            >
                <Lottie
                    lottieRef={iconRef}
                    animationData={iconData}
                    loop={false}
                    autoplay={false}
                    style={{ width: 24, height: 24 }}
                />
            </a>
            {isOpen && (
                <FloatingPortal>
                    <div
                        ref={refs.setFloating}
                        style={floatingStyles}
                        className={styles.tooltip}
                        {...getFloatingProps()}
                    >
                        {label}
                    </div>
                </FloatingPortal>
            )}
        </>
    )
}

