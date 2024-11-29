import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton/index"

const Formulario = () => {
    return <section className="formulario">
                <from className="form">
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"/>
                    <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"/>
                    <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto"/>
                    <ListaOpciones />
                    <Boton>
                        Crear
                    </Boton>
                    
                </from>
           </section>
} 

export default Formulario