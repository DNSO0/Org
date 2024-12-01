import { useState } from "react";
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton/index"

const Formulario = () => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")

    const manejarEnvio = (event) => {
        event.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto
        }
        console.log(datosAEnviar)
    }

    return <section className="formulario">
                <from onSubmit={manejarEnvio} className="form">
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required={true} valor={nombre} actualizarValor={actualizarNombre}/>
                    <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto} />
                    <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto} />
                    <ListaOpciones />
                    <Boton>
                        Crear
                    </Boton>
                    
                </from>
           </section>
} 

export default Formulario