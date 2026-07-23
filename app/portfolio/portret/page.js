
import Image from 'next/image'

export default function Page() {
  return (
    <main className="container">
      <h1>Portret</h1>

      <div className="grid">

        <div className="imageWrapper">
          <Image src="https://images.unsplash.com/photo-1543466835-00a7907e9de1" alt="Portret" fill style={{objectFit:"cover"}} />
        </div>

        <div className="imageWrapper">
          <Image src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8" alt="Portret" fill style={{objectFit:"cover"}} />
        </div>

      </div>
    </main>
  )
}
