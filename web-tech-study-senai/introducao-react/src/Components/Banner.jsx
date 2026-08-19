const Banner = (props) => {
    console.log(props.children)

    /*
     o children permite que você  passe e renderize
     conteudo dinamico dentro de um componente em react
    
    */

    return (
        <>
        {props.children}
        </>
    )
}

export default Banner;