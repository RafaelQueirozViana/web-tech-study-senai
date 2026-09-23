import Box from "../../components/Box/index"
import img1 from "../../assets/img/imagemEstrelas1.jpg"
import img2 from "../../assets/img/imagemEstrelas2.jpg"

export default function index() {
    return (
        <main className="container">
            <section className="d-flex">
                <Box
                    title="Observações noturnas"
                    description="Toda sexta-feira montamos os telescópios para observar planetas, nebulosas e aglomerados de estrelas."
                    imagemUm={img1}
                />
                <Box
                    title="Astrofotografia"
                    description="Oficinas práticas para aprender a registrar a Lua, a Via Láctea e o céu profundo com a sua câmera."
                    imagemUm={img2}
                />
            </section>
        </main>
    )
}