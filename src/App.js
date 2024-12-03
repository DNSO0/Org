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
  
//Lista de equipos
const equipos = [

  {
    titulo: "Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"
  },
  {
    titulo: "Front-end",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF"
  },
  {
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2"
  },
  {
    titulo:  "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8"
  },
  {
    titulo: "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5"
  },
  {
    titulo: "Movil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9"
  },
  {
    titulo: "Innovación y  Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF"
  }
  
]

  return (
    <div >      
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario equipos={equipos.map( (equipo)=> equipo.titulo )} />}      
      <MiOrg cambiarMostrar={cambiarMostrar} />
    
      {
        equipos.map ( (equipo)=>{
          return <Equipo datos={equipo} key={equipo.titulo} />
        } )
      }    

    </div>
  );
}

export default App;
