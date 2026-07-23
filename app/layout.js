import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Aura e Luce | Hondenfotografie',
  description: 'Fine art hondenfotografie met natuurlijk licht.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <header className="header">
          <h1 className="logo">Aura e Luce</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
        <footer className="footer">© Aura e Luce</footer>
      </body>
    </html>
  )
}
