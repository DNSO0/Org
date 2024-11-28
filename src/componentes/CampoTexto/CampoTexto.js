import "./CampoTexto.css"

const CampoTexto = ()=> {
    return <div className="campo-texto">
        <label>Nombre:</label>
        <input type="text" name="nombre" placeholder="Ingresar nombre"/>
    </div>
}

export default CampoTexto