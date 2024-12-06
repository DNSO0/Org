import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/index.js';
import Equipo from './componentes/Equipo/index.js';
import Footer from './componentes/Footer/index.jsx';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/genesysR-dev.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])
  const [equipos, actualizarEquipos] = useState ([

    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
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
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
    
  ])

  const cambiarMostrar =()=> {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador)=> {
    console.log("Nuevo", colaborador)
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

//Eliminar colaborador
  const eliminarColaborador = ()=> {

  }

//Actualizar color de equipo
const actualizarColor = (color, titulo)=> {
  const equiposActualizados = equipos.map ( (equipo)=>{
    if(equipo.titulo === titulo){
      equipo.colorPrimario = color
    }
    return equipo
  } )

  actualizarEquipos(equiposActualizados)
}
  
  return (
    <div >      
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario equipos={equipos.map( (equipo)=> equipo.titulo )} registrarColaborador={registrarColaborador} />}      
      <MiOrg cambiarMostrar={cambiarMostrar} />
    
      {
        equipos.map ( (equipo)=> <Equipo 
            datos={equipo} 
            key={equipo.titulo} 
            colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )} 
            eliminarColaborador={eliminarColaborador} 
            actualizarColor={actualizarColor}
            />
         )
      } 

      <Footer />   

    </div>
  );
}

export default App;
