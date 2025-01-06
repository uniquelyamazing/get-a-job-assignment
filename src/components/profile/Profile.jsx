import group from "../../assets/img/gr.png";
import group1 from "../../assets/img/gr1.png";
import group2 from "../../assets/img/gr2.png";


import './Profile.css'

function Profile() {
  return (
    <div className="container">
      <div className="image">
        <img src={group}/>
        <div className="groupic"> <img src={group1}/></div>
        <img src={group2}/>
      </div>
      <div>
        <h2><b>How it works</b></h2>
        <p> 
        Getajob helps you find the right job easily. Getajob helps you find the right job easily. Getajob helps you find the right job easily.
        </p>
      
        <h4> <input type="text" placeholder="✔"/>
          Search Jobs</h4>
        <p>
        We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity.
        </p>
        <h4><input type="text" placeholder="✔"/>
          Create a Profile and Get Noticed</h4>
<p>Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily.</p>
        
       <h4><input type="text" placeholder="✔"/>
         Apply for jobs</h4>
       <p> Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career.
        </p>
        
        </div>
    </div>
  )
}

export default Profile
