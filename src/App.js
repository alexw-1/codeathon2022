import './App.css';
import logo from './ourLogo.png'
import ig from "./iglogo.jpg"
import twitter from "./twitter logo 2.png"
import fb from "./fb logo.png"
import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="NavBar-header">
        <div className="header">
          <Link className="logo" to= "/"><img src={logo} width="200" height="50" alt="" /></Link>
          <span id='app_title'>DOBUTSU</span>
          <div className="header-right">
            <a target="_blank" rel="noreferrer" href="https://teachablemachine.withgoogle.com/models/ymybQkyPh/">Machine Learning</a>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About Us</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </header>
      <Outlet />
      <div id="footer">
      <a rel="noreferrer" target="_blank" href="https://www.instagram.com/thedobutsuproject123/"><img className="footerimg" src={ig} alt="ig logo"></img></a>
      <a rel="noreferrer" href="https://twitter.com/DobutsuThe" target="_blank"><img className="footerimg" src={twitter} alt="ig logo"></img></a>
      <a href="https://business.facebook.com/home/accounts?business_id=308049861278948" rel="noreferrer" target="_blank"><img className="footerimg" src={fb} alt="ig logo" id="fbimg"></img></a>
      </div> 
    </div>
  );
}

export default App;
