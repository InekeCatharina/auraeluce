import Link from 'next/link'
export default function Home(){
return(
<>
<section className="hero"><h2>Hondenfotografie in natuurlijk licht</h2></section>
<main className="container">
<p>Ik fotografeer honden buiten, met natuurlijk licht en aandacht.</p>
<p>Ik werk niet tegen betaling. Fotografie is voor mij puur plezier en inspiratie.</p>
<Link href="/portfolio">Bekijk portfolio →</Link>
</main>
</>
)}