import "./box.css"

export default function index(props) {
  return (
    <section className="container-box">
        <img className="image" src={props.imagemUm} alt="" />
        <h1 className="title-box">{props.title}</h1>
        <p className="description">{props.description}</p>
    </section>
  )
}
