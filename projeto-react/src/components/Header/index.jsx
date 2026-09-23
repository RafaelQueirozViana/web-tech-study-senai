import "./header.css"
import logoTipo from "../../assets/img/logotipo.png"
import menu from "../../assets/img/menu.png"

export default function index() {
  return (
    <header className="header">
      <section className="title-container">
        <img className="img-logo" src={logoTipo} alt="Logotipo do Órbita Clube" />
        <div className="title-centro">
          <h1 className="title">Órbita Clube</h1>
          <h2 className="subtitle">Explorando o céu, uma noite de cada vez</h2>
        </div>
        <img className="img-menu" src={menu} alt="Menu" />
      </section>
    </header>
  )
}