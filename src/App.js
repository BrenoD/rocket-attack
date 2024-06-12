import { FaGithub } from "react-icons/fa";import { FaDiscord } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import logo from './assets/imgs/logo-removebg.png';
import Pgame from "./assets/imgs/rocket_attack_03.png"
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div>
      <div className="App">
        <div className='logo'><aside><img src={logo} alt="logo" /></aside></div>
      <h2><i className='fa fa-download'></i>Download</h2>
      </div>
      <div className='content'>
      <div><aside className='gamephoto'><img src={Pgame} alt='photogame' /></aside></div>
      <p className='description'>
        This game is a 2D air rocket game where you control a rocket and dodge missiles
        while collecting coins to unlock new rockets and upgrade your game. You can play offline and enjoy a thrilling experience.
      </p>
      <a href="https://drive.google.com/file/d/128qEvhy_Rf7M9pKqBDCnF8jD-1rl7Y5w/view" className="donw"><p className='dw'><button><i className='fa fa-download'></i>Download</button></p></a>
      </div>
      <footer>
        <div>
          <p className='propisite'>This site is part of a project to improve React skills.</p>
        </div>
        <div className="icons">
          <div className="linkedin"><a href="https://www.linkedin.com/in/breno-dias-11992322a/"><p className="icondisc"><CiLinkedin /></p><p>LinkedIn</p></a></div>
          <div className="discord"><a href="https://discord.gg/gtdjkBPP"><p className="icondisc"><FaDiscord /></p><p>Discord</p></a></div>
          <div className="github"><a href="https://github.com/BrenoD"><p className="icondisc"><FaGithub /></p><p>GitHub</p></a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
