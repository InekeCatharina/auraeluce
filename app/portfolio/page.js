export default function Portfolio() {
  return (
    <main className="portfolio">

      {/* HEADER */}
      <section className="portfolio-header">
        <h1>
          Een verzameling momenten,<br />
          geen momentopnames.
        </h1>

        <p>
          Elke foto in dit portfolio is met zorg samengesteld — licht, houding en emotie
          moeten samenkomen voordat ik de sluiter indruk. Alle foto’s worden buiten
          gemaakt, in natuurlijk licht — geen studio.
        </p>

        {/* FILTER BUTTONS (design only) */}
        <div className="filters">
          <button className="active">Alles</button>
          <button>Portret</button>
          <button>Actie</button>
          <button>Puppy</button>
          <button>Senior</button>
          <button>Buiten</button>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery">
        <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d" />
        <img src="https://images.unsplash.com/photo-1507149833265-60c372daea22" className="large"/>
        <img src="https://images.unsplash.com/photo-1525253086316-d0c936c814f8" />
        <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a" />
        <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16" />
      </section>

    </main>
  )
}
