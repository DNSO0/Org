import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    //Destructuracion
    const { colorPrimario, colorSecundario, titulo} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor } = props

    const obj = {
        backgroundColor: colorSecundario
    }
    const estiloTitulo = {borderColor: colorPrimario}

    return <>
    { 
        colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input 
                    className="input-color"
                    type='color' 
                    value={colorSecundario}
                    onChange={(evento) =>{
                        console.log(evento.target.value)
                    }}                
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map ( (colaborador, index)=> <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} /> )
                    }            
                </div>
            </section>
    }</>
}

export default Equipo