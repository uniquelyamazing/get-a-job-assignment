import Rectangle from '../../assets/img/Rectangle 9.1.png';
import gr from '../../assets/img/gr10.png';



import './Testimony.css';

const Testimony = () => {
  return (
    <div>
      <div className='Testcontain'>
      <div>
        <h3> What are our customers saying</h3>
        <img src={Rectangle} />
      </div>
      <div className='par'>
     <p> 
     The platform is really convenient to reach out to companies & I have managed < br/>to secure 2 interviews already! I can also track my application status instead of <br/>wondering whether the company has seen or shortlisted me</p>
     <br/>
     <h6> Irma Black</h6>
     <p> HR Manager at MasterCard</p>
      </div>
      </div>
      
      <div className='gr'>
        <img src={gr} />
      </div>
    
    </div>
  );
}

export default Testimony;
