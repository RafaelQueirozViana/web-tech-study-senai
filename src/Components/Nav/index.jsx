import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
        <nav className="menu-navigation">
            <ul className="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>

                <li>
                    <Link to="/faq">Perguntas Frequentes (FAQ)</Link>
                </li>

                <li>
                    <Link to={"/cadastroNews"}>Newsletter</Link>
                </li>
            </ul>
        </nav>
    );
}
