import imgCard from "../assets/homem-aranha-poster.jpg"
import "../Components/card.css"

const Card = () => {
  return (
    <section>
      <article className="card">
        <img src={imgCard} className="img-card" />
        <p className="card-text ">Filmes em <A></A>lta no Momento: Homem Aranha sem volta para casa</p>
      </article>
      <hr />
    </section>
  )
}

export default Card
