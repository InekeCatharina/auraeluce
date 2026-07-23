
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Aura e Luce | Fine Art Hondenfotografie',
  description: 'Fine-art hondenfotografie met focus op licht, karakter en compositie.'
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav style={{padding:20}}>
          <Link href="/">Home</Link> | 
          <Link href="/portfolio"> Portfolio</Link> | 
          <Link href="/over-mij"> Over Mij</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
