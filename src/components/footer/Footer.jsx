import gold from '../../assets/img/g.png'
import soi from '../../assets/img/soi.png'



import './Footer.css'
const Footer = () => {
  return (
    <div className='parent'>
    <div className='footer'>
      <div>
        <img src={gold} />
        <p> 
Getajobng provides a full online service<br/> for anyone looking for a new job. We're <br/>not a recruitment agency, we're a job site.</p>

      </div>
      <div className='work'>
        <h3>Information</h3>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Terms & Condition</p>
      </div>
      <div className='work'>
      <h3>Job seekers</h3>
      <p>Create Account </p>
        <p>Job List</p>
        <p>FAQ</p>
      </div>
      <div className='work'>
      <h3>Employers</h3>
      <p>Create Account </p>
        <p>Post a Job </p>
        <p>FAQ</p>
      </div>
      <div className='work'>
      <h3>Social Media:</h3>
      <img src={soi}/>
      </div>
     
    </div>
    <div className='foot'>
    © Copyright Get-A-Job RMS 2019, All right reserved
    </div>
        </div>
  );
}

export default Footer;
