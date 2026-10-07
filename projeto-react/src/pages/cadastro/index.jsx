import { useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css"
import "./cadastro.css"

export default function index() {
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(formData.nome == "" || formData.telefone == "" || formData.email == ""){
        
            toast.error("Todos os campos são obrigatórios!")
            return false;
        }


        
        fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => {
            toast.success("Usuários cadastrado com sucesso!")

            setFormData({
                nome: "",
                telefone: "",
                email: ""
            })
        })
    }

  return (
    <main className='container'>
        <h1>Cadastro de usuários</h1>
        <form onSubmit={handleSubmit}>
            <article className="form-control">
                <label htmlFor="Nome:">Nome:</label>
                <input
                 type="text" 
                 name="nome" 
                 value={formData.nome}
                 onChange={handleChange}
                />
            </article>

            <article className="form-control">
                <label htmlFor="Telefone:">Telefone:</label>
                <input
                 type="text" 
                 name="telefone" 
                 value={formData.telefone}
                 onChange={handleChange}
                />
            </article>

            <article className="form-control">
                <label htmlFor="Email:">Email:</label>
                <input 
                 type="email" 
                 name="email" 
                 value={formData.email}
                 onChange={handleChange}
                />
            </article>

            <button type="submit">Cadastrar</button>

            <ToastContainer />
        </form>
    </main>
  )
}
