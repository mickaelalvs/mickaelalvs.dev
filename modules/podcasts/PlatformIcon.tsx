'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useFloating, autoUpdate, offset, flip, shift, useHover, useFocus, useDismiss, useRole, useInteractions, FloatingPortal } from '@floating-ui/react'
import type { PlatformLink } from './types/PlatformLink'
import styles from './PodcastDetailPage.module.css'

interface PlatformIconProps {
  platform: PlatformLink
  getPlatformIcon: (platform: string) => string
}

export default function PlatformIcon({ platform, getPlatformIcon }: PlatformIconProps) {
  const [isOpen, setIsOpen] = useState(false)

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
        href={platform.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.platformIconLink}
        {...getReferenceProps()}
      >
        <Image
          src={getPlatformIcon(platform.platform)}
          alt={`${platform.platform} icon`}
          width={24}
          height={24}
          style={{
            filter: 'brightness(0) saturate(100%) invert(100%)',
          }}
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
            {platform.platform}
          </div>
        </FloatingPortal>
      )}
    </>
  )
}

