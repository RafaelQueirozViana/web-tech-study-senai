import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css"
import "./cadastroNews.css"

export default function index() {
    const [formData, setFormData] = useState({
        nome: "",
        email: ""
    })
    const [inscritos, setInscritos] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/news")
            .then((response) => response.json())
            .then((data) => setInscritos(data))
            .catch((error) => console.log(error))
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.nome == "" || formData.email == "") {
            toast.error("Preencha todos os campos!")
            return false;
        }

        fetch("http://localhost:3000/news", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success("Cadastro na newsletter realizado com sucesso!")
                setInscritos((prevInscritos) => [...prevInscritos, data])
                setFormData({
                    nome: "",
                    email: ""
                })
            })
            .catch((error) => {
                console.log(error)
                toast.error("Não foi possível realizar o cadastro.")
            })
    }

    return (
        <main className="container">
            <h1 className="titulo-news">Cadastro na newsletter</h1>
            <form className="form-news" onSubmit={handleSubmit}>
                <article className="form-control-news">
                    <label htmlFor="nome-news">Nome:</label>
                    <input
                        id="nome-news"
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </article>

                <article className="form-control-news">
                    <label htmlFor="email-news">E-mail:</label>
                    <input
                        id="email-news"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </article>

                <button type="submit">Cadastrar</button>
            </form>

            <section className="lista-news">
                <h2>Inscritos</h2>
                {inscritos.length == 0 && <p className="vazio-news">Nenhum inscrito ainda.</p>}
                {inscritos.map((inscrito) => (
                    <article className="item-news" key={inscrito.id}>
                        <strong>Nome: {inscrito.nome}</strong>
                        <strong>E-mail: {inscrito.email}</strong>
                    </article>
                ))}
            </section>

            <ToastContainer />
        </main>
    )
}