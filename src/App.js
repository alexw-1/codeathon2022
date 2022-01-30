import './App.css';
import logo from './ourLogo.png'
// import WebcamStream from './webcamjs';



function App() {
  return (
    <div className="App">
      <header className="NavBar-header">
        <div className="header">
          <a href="#default" className="logo"><img src={logo} width="200" height="50" alt="" /></a>
          <span id='app_title'>DOBUTSU</span>
          <div className="header-right">
            {/* <Router>
              <Route path=""/>
            </Router> */}
            <a href="#about">About Us</a>
            <a href="#shop">Shop</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </header>
      <div id="imgbackground">
        <div id="imgbackground2">
          <img id="inputimg" src={logo} alt="inputimg"></img>
        </div>
      </div>
      <input type='file'></input>
    </div>
  );
}

export default App;
