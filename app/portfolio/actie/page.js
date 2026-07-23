
import Image from 'next/image'

export default function Page() {
  return (
    <main className="container">
      <h1>Actie</h1>

      <div className="grid">

        <div className="imageWrapper">
          <Image src="https://images.unsplash.com/photo-1507146426996-ef05306b995a" alt="Actie" fill style={{objectFit:"cover"}} />
        </div>

        <div className="imageWrapper">
          <Image src="https://images.unsplash.com/photo-1444212477490-ca407925329e" alt="Actie" fill style={{objectFit:"cover"}} />
        </div>

      </div>
    </main>
  )
}
