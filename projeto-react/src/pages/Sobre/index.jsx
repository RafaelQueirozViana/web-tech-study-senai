import { useEffect, useState } from "react"
import "./sobre.css"

export default function index() {
      const [topicos, setUsuarios] = useState([])
   
      useEffect(()=> {
        fetch("http://localhost:3000/topicos")
        .then((response) => response.json())
        .then((data)=> setUsuarios(data))
        .catch((error) => console.log(error))
      }, [])
  return (
    <section className="container-sobre">
        {topicos.map((topico)=>(
            <div className="lorem" key={topico.id}>
              <h1>{topico.titulo}</h1>
              <p>{topico.paragrafo}</p>
            </div>
        ))}
    </section>
  )
}

