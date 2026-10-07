import "./header.css"
import logoTipo from "../../assets/img/logotipo.png"
import menu from "../../assets/img/menu.png"

export default function index() {
  return (
    <header className='header'>
        <section className='title-container'>
            <img className="img-logo" src={logoTipo}/>
            <div className="title-centro">
              <h1 className='title'>Titulo principal</h1>
              <h2 className='subtitle'>Lorem ipsum</h2>
            </div>
            <img className="img-menu" src={menu}/>
        </section>
    </header>
  )
}