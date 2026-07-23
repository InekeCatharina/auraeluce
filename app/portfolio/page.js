
import Image from 'next/image'

export default function Portfolio() {
  return (
    <main className="container">
      <h1>Portfolio</h1>
      <Image src="https://images.unsplash.com/photo-1543466835-00a7907e9de1"
        width={800} height={500} alt="dog" />
    </main>
  )
}
