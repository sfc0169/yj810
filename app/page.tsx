'use client'

import { useEffect, useState } from 'react'
import i18n from '@/i18n/zh.json'
import dynamic from 'next/dynamic'

const Game = dynamic(() => import('@/components/Game'), { ssr: false })

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Load Bootstrap JS
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  if (!isClient) {
    return null
  }

  return <Game i18n={i18n} />
}