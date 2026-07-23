import Link from 'next/link'

export default function Home() {
  return (
    <main className="hero">
      
      <div className="overlay">
        <p className="tagline">FINE ART HONDENFOTOGRAFIE</p>

        <h1>
          Elke hond is een dankbaar onderwerp.{' '}
          <span className="accent">Elke foto</span> een kunstwerk.
        </h1>

        <p className="intro">
          Ik fotografeer vanuit pure hobby, zonder tarief — omdat ik mijn eigen passie
          voor fotografie wil volgen. Honden vind ik daarbij dankbare onderwerpen:
          geen simpele kiekjes, maar op zoek naar licht, karakter en emotie.
        </p>

        <div className="buttons">
          <Link href="/portfolio" className="btn-outline">
            BEKIJK HET PORTFOLIO
          </Link>

          <Link href="/contact" className="btn-filled">
            BOEK EEN SESSIE
          </Link>
        </div>
      </div>

    </main>
  )
}
