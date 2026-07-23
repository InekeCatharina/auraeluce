
import Link from 'next/link'

export default function Portfolio() {
  return (
    <main className="container">
      <h1>Portfolio</h1>

      <div className="categories">
        <Link href="/portfolio/portret">Portret</Link>
        <Link href="/portfolio/actie">Actie</Link>
        <Link href="/portfolio/puppy">Puppy</Link>
        <Link href="/portfolio/senior">Senior</Link>
      </div>
    </main>
  )
}
