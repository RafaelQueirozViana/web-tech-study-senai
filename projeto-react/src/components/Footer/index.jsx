import facebook from "../../assets/img/facebook.png"
import github from "../../assets/img/github.png"
import linkedin from "../../assets/img/linkedin.png"
import "./footer.css"

export default function index() {
  return (
    <footer>
        <div className="contentFooter">
            <div className="footer-link">
                <img src={facebook}/>
                <img src={github}/>
                <img src={linkedin}/>
            </div>
            <div className="links">
                <p>Home</p>
                <p>Services</p>
                <p>About</p>
                <p>Teams</p>
                <p>Privacy Policy</p>
            </div>
            <h2>Future Coders © 2026</h2>
        </div>
    </footer>
  )
}
