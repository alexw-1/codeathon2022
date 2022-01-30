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
            <a href="https://teachablemachine.withgoogle.com/models/ymybQkyPh/">Machine Learning</a>
            <a className="active" href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
