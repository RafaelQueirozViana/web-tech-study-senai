import React, { useState } from 'react';
import './Faq.css';

const faqData = [
    {
        id: 1,
        pergunta: "O que é este projeto?",
        resposta: "Este é um projeto desenvolvido em React utilizando Vite para consolidar conhecimentos de rotas, componentes e estados."
    },
    {
        id: 2,
        pergunta: "Como as rotas foram configuradas?",
        resposta: "Utilizamos o React Router DOM para gerenciar a navegação entre a Home, as páginas internas e este FAQ."
    },
    {
        id: 3,
        pergunta: "O projeto é responsivo?",
        resposta: "Sim! Toda a interface foi pensada para se adaptar a dispositivos móveis, tablets e computadores."
    }
];

export default function Faq() {
    const [busca, setBusca] = useState('');
    const [aberto, setAberto] = useState(null);


    const toggleFaq = (index) => {
        if (aberto === index) {
            return setAberto(null);
        }
        setAberto(index);
    };

    const faqFiltrado = faqData.filter(item =>
        item.pergunta.toLowerCase().includes(busca.toLowerCase()) ||
        item.resposta.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div className="faq-container">
            <h1>Dúvidas Frequentes (FAQ)</h1>


            <div className="search-box">
                <input
                    type="text"
                    placeholder="Digite sua dúvida aqui..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />
            </div>


            <div className="faq-list">
                {faqFiltrado.length > 0 ? (
                    faqFiltrado.map((item, index) => (
                        <div key={item.id} className="faq-item">
                            <div className="faq-question" onClick={() => toggleFaq(index)}>
                                <h3>{item.pergunta}</h3>
                                <span>{aberto === index ? '▲' : '▼'}</span>
                            </div>

                            {aberto === index && (
                                <div className="faq-answer">
                                    <p>{item.resposta}</p>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="no-results">Nenhuma dúvida encontrada para sua busca.</p>
                )}
            </div>
        </div>
    );
}
