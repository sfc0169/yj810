import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

export const metadata: Metadata = {
  title: '雷普先輩',
  description: '新概念Homo遊戲',
  openGraph: {
    title: '雷普先輩',
    description: '新概念Homo遊戲',
    images: ['https://rape.konnokai.me/static/image/ClickBefore.png'],
  },
  twitter: {
    card: 'summary',
    site: '@Jun112561',
    creator: '@Jun112561',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}