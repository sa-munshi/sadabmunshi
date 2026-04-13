import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const kalam = localFont({
  src: './fonts/Kalam-Bold.woff2',
  weight: '700',
  variable: '--font-kalam',
  display: 'swap',
})

const patrickHand = localFont({
  src: './fonts/PatrickHand-Regular.woff2',
  weight: '400',
  variable: '--font-patrick-hand',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sadab Munshi — Student, Builder, Learner',
  description: 'Personal site of Sadab Munshi. Student, indie developer, building small tools from a small village.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${kalam.variable} ${patrickHand.variable}`}>
      <body
        className="font-body text-pencil min-h-screen"
        style={{
          backgroundColor: '#fdfbf7',
          backgroundImage: 'radial-gradient(#e5e0d8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <Nav />
        <main className="max-w-5xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
