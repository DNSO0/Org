import "./ListaOpciones.css"

const ListaOpciones = (props) => {



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

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            { equipos.map( (equipo, index)=> <option selected="a ver" key={index} value={equipo} >{equipo}</option> ) }
        </select>
    </div>
}

export default ListaOpciones