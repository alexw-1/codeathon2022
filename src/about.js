import './about.css';
import syed from './IMG-1521.jpg';
import alex from './Components/Shop/alex.png';
export default function AboutUs() {
    return (
        <div id="aboutpage">
            <h1> Our Team</h1>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={syed} alt="Syed" />
                            <div className="container">
                                <h2>Syed Ali</h2>
                                <p className="title">Lead Researcher and Designer/Assistant Website Dev</p>
                                <p>Syed is a student at Valley Stream South High School in New York. Syed has been involved with We Connect the Dots activities since 2016. Syed likes to code. When not coding, he is either doing math or watching One Piece.</p>
                                <p>syedansabali@gmail.com</p>
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={alex} alt="Alex"/>
                            <div className="container">
                                <h2>Alex Wiegand</h2>
                                <p className="title">Lead Website and Machine Learning Developer</p>
                                <p>Alex Wiegand is a sophmore at Holy Trinity High School. He enjoys math, science and engineering. He has been associated to We Connect the Dots for two years now.</p>
                                <p>alex.wiegand@gmail.com</p>
                            </div>
                    </div>
                </div>

            </div>
        </div>

    );
}