import facebook from "../../assets/img/facebook.png"
import github from "../../assets/img/github.png"
import linkedin from "../../assets/img/linkedin.png"
import "./footer.css"

export default function index() {
    return (
        <footer>
            <div className="contentFooter">
                <div className="footer-link">
                    <img src={facebook} alt="Facebook" />
                    <img src={github} alt="GitHub" />
                    <img src={linkedin} alt="LinkedIn" />
                </div>
                <div className="links">
                    <p>Início</p>
                    <p>Observações</p>
                    <p>Eventos</p>
                    <p>Equipe</p>
                    <p>Privacidade</p>
                </div>
                <h2>Órbita Clube © 2026</h2>
            </div>
        </footer>
    )
}