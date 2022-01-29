import Webcam from 'webcam-easy';
const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

function webCamStart(){
webcam.start()
  .then(result =>{
    console.log("webcam started");
  })
  .catch(err => {
    console.log(err);
})
}
// function webCamStop(){
//     webcam.stop()
// }
export default function WebcamStream(){
    return (
        <div>
        <video id="webcam" autoPlay playsInline width="640" height="480"></video>
        <canvas id="canvas" className="d-none"></canvas>
        <audio id="snapSound" src="audio/snap.wav" preload = "auto"></audio>
        <button onClick={webCamStart()}>Start</button>
        </div>
    )
}