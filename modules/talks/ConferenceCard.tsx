'use client'

import Image from 'next/image'
import type { Conference } from './types/Conference'
import styles from './TalkDetailPage.module.css'

const LOGO_PLACEHOLDER =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23090c12'/></svg>"

export default function ConferenceCard({ conf }: { conf: Conference }) {
  const year = conf.date ? new Date(conf.date).getFullYear().toString() : (conf.year || '')

  const CardContent = (
    <>
      <div className={styles.conferenceImageWrapper}>
        <Image
          src={conf.image}
          alt={conf.name}
          width={conf.image.width}
          height={conf.image.height}
          style={{
            filter: 'brightness(0) invert(1)',
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
          placeholder="blur"
          blurDataURL={LOGO_PLACEHOLDER}
          loading="lazy"
        />
      </div>
      {year && (
        <span className={styles.conferenceDateBadge}>
          {year}
        </span>
      )}
    </>
  )

  if (conf.link) {
    return (
      <a
        href={conf.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.conferenceCard}
      >
        {CardContent}
      </a>
    )
  }

  return (
    <div className={styles.conferenceCardDiv}>
      {CardContent}
    </div>
  )
}

