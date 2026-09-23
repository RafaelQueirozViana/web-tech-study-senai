import { Link } from "react-router-dom"
import "./notFound.css"

export default function index() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404 - Perdido no espaço</h1>
      <p className="notfound-text">
        A página que você procura não existe em nenhuma galáxia conhecida.
      </p>

      <Link to={"/"} className="notfound-link">
        Voltar para o início
      </Link>
    </div>
  )
}