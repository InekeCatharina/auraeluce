import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Aura e Luce</h1>
        <p>
          Fotografie van honden in natuurlijk licht. Geen commercie, maar passie.
          Elk beeld ontstaat vanuit rust en aandacht.
        </p>
        <Link href="/portfolio">Bekijk portfolio</Link>
      </section>
    </main>
  )
}
