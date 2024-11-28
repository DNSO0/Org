import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"

const Formulario = () => {
    return <section className="formulario">
                <from className="form">
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <CampoTexto />
                    <CampoTexto />
                    <CampoTexto />
                    
                </from>
           </section>
} 

export default Formulario