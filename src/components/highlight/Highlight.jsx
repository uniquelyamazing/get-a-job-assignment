
import imga from "../../assets/img/imga.png";
import image from "../../assets/img/image.png";
import imagi from "../../assets/img/imagi.png";
import gro from "../../assets/img/gro.png";


import "./Highlight.css"

function Highlight() {
  return (
    <div>
      Recommended Jobs
      <div className="highlight-container">
      <div>
        <input type="text" placeholder="Full time"></input>
        <img src={imga}/>
        <p>QA Engineer</p>
        <hr/>
        <p>Paystack</p>
        Lagos,Nigeria  <sub> Apply now</sub>
      </div>
      <div>
      <input type="text" placeholder="Full time"></input>
        <img src={image}/>
        <p>Product Analyst</p>
        <hr/>
        <p>Google</p>
        Lagos,Nigeria  <sub>Apply now
        </sub>
      </div>
      <div>
      <input type="text" placeholder="Full time"></input>
        <img src={imagi}/>
        <p>HR Manager</p>
        <hr/>
        <p>Flutterwave</p>
        Abuja,Nigeria <sub> Apply now</sub>
      </div>
      <div>
      <input type="text" placeholder="Full time"></input>
        <img src={gro}/>
        <p>QA Engineer</p>
        <hr/>
        <p>Paystack</p>
        Lagos,Nigeria  <sub>Apply now
        </sub>
              </div>
      </div>
    </div>
  )
}

export default Highlight
