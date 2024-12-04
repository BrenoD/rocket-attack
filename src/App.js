import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import logo from './assets/imgs/logo-removebg.png';
import Pgame from "./assets/imgs/image1.png";
import game from "./assets/imgs/image.png";
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <h2><i className='fa fa-download'></i> Download</h2>
      </header>
      <main className='content'>
        <div className='gamephoto'>
          <img src={Pgame} alt='Game Screenshot' className="small-photo" />
          <img src={game} alt='Game Screenshot' className="small-photo" />
        </div>
        <p className='description'>
          Experience the thrill of controlling a 2D rocket while dodging missiles and collecting coins to unlock new rockets and upgrades. Play offline and enjoy endless fun.
        </p>
        <a href="https://drive.google.com/file/d/128qEvhy_Rf7M9pKqBDCnF8jD-1rl7Y5w/view" className="download-link">
          <button className='download-button'><i className='fa fa-download'></i> Download</button>
        </a>
      </main>
      <footer className="footer">
        <p className='propisite'>This site is part of a React skill improvement project.</p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/breno-dias-11992322a/" className="icon linkedin">
            <CiLinkedin /><span>LinkedIn</span>
          </a>
          <a href="https://discord.gg/gtdjkBPP" className="icon discord">
            <FaDiscord /><span>Discord</span>
          </a>
          <a href="https://github.com/BrenoD" className="icon github">
            <FaGithub /><span>GitHub</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
