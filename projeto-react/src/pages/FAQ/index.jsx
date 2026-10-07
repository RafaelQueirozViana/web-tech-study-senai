import { useEffect, useState } from "react"
import "./faq.css"

export default function index() {
    const [faq, setUsuarios] = useState([])
 
    useEffect(()=> {
      fetch("http://localhost:3000/faq")
      .then((response) => response.json())
      .then((data)=> setUsuarios(data))
      .catch((error) => console.log(error))
    }, [])

  return (
    <section className="container-lorem">
        {faq.map((FAQ)=>(
            <article className="content-usuarios" key={FAQ.id}>
                <h2>{FAQ.pergunta}</h2>
                <br />
                <p>{FAQ.resposta}</p>
                <br />
            </article>
        ))}
    </section>
  )
}
