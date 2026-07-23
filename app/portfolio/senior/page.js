
import Image from 'next/image'

export default function Page() {
  return (
    <main className="container">
      <h1>Senior</h1>

      <div className="grid">

        <div className="imageWrapper">
          <Image src="https://images.unsplash.com/photo-1558944351-cb5e5c7b94d3" alt="Senior" fill style={{objectFit:"cover"}} />
        </div>

        <div className="imageWrapper">
          <Image src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b" alt="Senior" fill style={{objectFit:"cover"}} />
        </div>

      </div>
    </main>
  )
}
