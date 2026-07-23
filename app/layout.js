import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Aura e Luce | Artistieke Hondenfotografie',
  description: 'High-end hondenportretten in natuurlijk licht. Fotografie vanuit passie.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <nav className="nav">
          <img src="/logo.svg" className="logo"/>
          <div>
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
