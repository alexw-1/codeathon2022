import "./contact.css"
import ig from "./iglogo.jpg"
import twitter from "./twitter logo 2.png"
import fb from "./fb logo.png"
export default function Contact(){
    return (
        <div id='contact'>
            <h1>Follow Us!</h1>
            <div id='social'>
                <img src={ig} alt="ig logo"></img>
                <h2>Instagram: thedobutsuproject123</h2>
            </div>
            <br></br>
            <br></br>
            <div id='social'>
                <img src={twitter} alt="ig logo"></img>
                <h2>Twitter: DobutsuThe</h2>
            </div>
            <br></br>
            <br></br>
            <div id='social'>
                <img src={fb} alt="ig logo"></img>
                <h2>Facebook: The Dobutsu Project</h2>
            </div>
        </div>
    );
}