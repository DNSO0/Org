import "./ListaOpciones.css"

const ListaOpciones = () => {



    //Metodo map -> arr.map( (equipo, index))
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovación y Gestión"
    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            { equipos.map( (equipo, index)=> <option selected="a ver" key={index}>{equipo}</option> ) }
        </select>
    </div>
}

export default ListaOpciones