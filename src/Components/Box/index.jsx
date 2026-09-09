import "./Box.css";
import React from "react";

export default function index(props) {
  console.log(props);

  return (
    <section className="container-box">
      <img 
        className="image" 
        src={props.imagem} 
        alt={props.title} 
      />

      <h1 className="title-box">
        {props.title}
      </h1>

      <p className="description">
        {props.description}
      </p>
    </section>
  );
}
