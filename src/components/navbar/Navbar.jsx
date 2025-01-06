import job from "../../assets/img/hN.png";
import hero from "../../assets/img/hero-image.png";
import group1 from "../../assets/img/Gt.png";
import Pay from "../../assets/img/pay.png";
import Google from "../../assets/img/goo.png";
import Kpmg from "../../assets/img/kpmg.png";

// Profile css
import "./Navbar.css" 

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={job} />

      <div className="profile">
        <div className="left">
          <h1>Find a Job easily </h1>
          <p>
            With verified, up-to-date job listings directly from employer
            websites,
            <br /> we create a premium experience for job seekers, employers,
            and data seekers alike.
          </p>
          <img src={group1} />
        
        Trusted by:
        <br />
        <img src={Pay} /> <img src={Google} /> <img src={Kpmg} />
        
        </div>
        <div className="right"> <img src={hero} /></div>
      </div>
    </div>
  );
};

export default Navbar;
