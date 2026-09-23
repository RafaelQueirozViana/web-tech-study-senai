import { Link } from "react-router-dom";
import "./nav.css"

export default function index() {
    return (
        <nav>
            <ul className="menu">
                <li>
                    <Link to={"/"}>Início</Link>
                </li>
                <li>
                    <Link to={"/sobre"}>Sobre</Link>
                </li>
                <li>
                    <Link to={"/FAQ"}>Perguntas</Link>
                </li>
                <li>
                    <Link to={"/usuarios"}>Membros</Link>
                </li>
                <li>
                    <Link to={"/cadastro"}>Inscrição</Link>
                </li>
            </ul>
        </nav>
    )
}