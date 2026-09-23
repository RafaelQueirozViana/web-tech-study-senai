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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.nome == "" || formData.telefone == "" || formData.email == "") {
            toast.error("Preencha todos os campos para se inscrever!")
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
                toast.success("Inscrição realizada com sucesso! Bem-vindo ao clube!")

                setFormData({
                    nome: "",
                    telefone: "",
                    email: ""
                })
            })
    }

    return (
        <main className="container">
            <h1 className="titulo-cadastro">Inscrição de novos membros</h1>
            <form className="form-cadastro" onSubmit={handleSubmit}>
                <article className="form-control">
                    <label htmlFor="nome">Nome completo:</label>
                    <input
                        id="nome"
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </article>

                <article className="form-control">
                    <label htmlFor="telefone">Telefone:</label>
                    <input
                        id="telefone"
                        type="text"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                </article>

                <article className="form-control">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </article>

                <button type="submit">Inscrever-se</button>

                <ToastContainer theme="dark" />
            </form>
        </main>
    )
}