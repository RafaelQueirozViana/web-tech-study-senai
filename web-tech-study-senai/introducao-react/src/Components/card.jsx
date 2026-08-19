import imgCard from "../assets/img-card.jpg" 
import "../Components/card.css"

const Card = () => { 
  return ( 
    <section> 
      <article className="card"> 
        <img src={imgCard} className="img-card"/> 
        <p className="card-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
      </article> 
      <hr /> 
    </section> 
  ) 
} 

export default Card
