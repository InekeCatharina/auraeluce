
import Image from 'next/image'

export default function Page() {
  return (
    <main className="container">
      <h1>Puppy</h1>

      <div className="grid">

        <div className="imageWrapper">
          <Image src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d" alt="Puppy" fill style={{objectFit:"cover"}} />
        </div>

        <div className="imageWrapper">
          <Image src="https://images.unsplash.com/photo-1583511655826-05700442b31b" alt="Puppy" fill style={{objectFit:"cover"}} />
        </div>

      </div>
    </main>
  )
}
