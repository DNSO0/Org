import "./Footer.css"
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
    <div className="redes">
        <a href='https://www.aluracursos.com/'> 
            <img src="/img/facebook.png" alt="Facebook"/>
        </a>
        <a href='https://www.aluracursos.com/'>
            <img src="/img/instagram.png" alt="Instagram"/>
        </a>
        <a href="https://www.aluracursos.com/">
        <FaXTwitter className="icon" /> 
        </a>     
        <a href="https://github.com/DNSO0">
            <FaGithub className="icon" />
        </a>         
    </div>
    <img src='/img/Logo.png' alt='org' /> 
    <strong>Desarrollado por Santiago Forero</strong>
</footer> 
}

export default Footer