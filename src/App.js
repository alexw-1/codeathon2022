
import './App.css';
import ImgUpload from './Components/imgupload/imgupload';
import logo from './Components/NavBar/losChichos.jpg'
// import WebcamStream from './webcamjs';



function App() {
  return (
    <div className="App">
      <header className="NavBar-header">
        <div className="header">
        <a href="#default" className="logo"><img src={logo} width="100" height="50" alt="" /></a>
          <div className="header-right">
            <a className="active" href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
      </header>
      <img src="" alt="input_pic"></img>
      <input id="upload" type="file"/>
    </div>
  );
}

export default App;
