'use client'

import { useRef } from 'react'
import Lottie from 'lottie-react'
import captaIcon from '../../public/static/icons/capta.json'
import presentationIcon from '../../public/static/icons/presentation.json'
import styles from './TalkDetailPage.module.css'

interface ResourceButtonProps {
  href: string
  type: 'video' | 'slides'
  children: React.ReactNode
}

export default function ResourceButton({ href, type, children }: ResourceButtonProps) {
  const iconRef = useRef<any>(null)
  const iconData = type === 'video' ? captaIcon : presentationIcon

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.resourceButton}
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
    >
      <span className={styles.resourceIcon}>
        <Lottie
          lottieRef={iconRef}
          animationData={iconData}
          loop={false}
          autoplay={false}
          style={{ width: 20, height: 20 }}
        />
      </span>
      {children}
    </a>
  )
}

