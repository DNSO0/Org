import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton/index"

const Formulario = () => {

    const manejarEnvio = (event) => {
        event.preventDefault()
    }

    return <section className="formulario">
                <from onSubmit={manejarEnvio} className="form">
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required={true} />
                    <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required />
                    <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required />
                    <ListaOpciones />
                    <Boton>
                        Crear
                    </Boton>
                    
                </from>
           </section>
} 

export default Formulario