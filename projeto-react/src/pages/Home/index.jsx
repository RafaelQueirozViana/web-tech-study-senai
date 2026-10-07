import Box from "../../components/Box/index"
import img1 from  "../../assets/img/boxUm.jpg"
import img2 from "../../assets/img/boxDois.jpg"

export default function index() {
  return (
    <main className="container">
        <section className="d-flex">
            <Box 
                title="Título do componente"
                description="Este é um parágrafo de amplo para o componente."
                imagemUm={img1}
            />
            <Box 
                title="Título do componente 2"
                description="Este é um parágrafo de amplo para o componente 2."
                imagemUm={img2}
            />
        </section> 
    </main>
  )
}
