import './App.css';
import logo from './ourLogo.png'
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
            <Link className="active" to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/shop">Shop</Link>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
