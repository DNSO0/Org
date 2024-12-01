import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/index.js';
import Equipo from './componentes/Equipo/index.js';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const cambiarMostrar =()=> {
    actualizarMostrar(!mostrarFormulario)
  }
  
  return (
    <div >      
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario />}      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      <Equipo equipo="Programación" />
      <Equipo equipo="(Front End)" />
      <Equipo equipo="(Data Science)" />
      <Equipo equipo="(Devops)" />
      <Equipo equipo="(UX y Diseño)" />
      <Equipo equipo="(Móvil)" />
      <Equipo equipo="Programación" />
      <Equipo equipo="(Innovación y  Gestión)" />
    </div>
  );
}

export default App;
