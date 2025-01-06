import Logos from '../../assets/img/Logos.png';



import './Company.css';

function Company() {
  return (
    <div>
      <div className='company'>
      <div>
        <h2> Over  1000+  jobs from top <br/>  companies in our network</h2>
        <p> Every day we index millions of jobs directly from employer websites. <br/>We’re committed to accurate, high-quality jobs so you won’t find old, duplicated, or spammy listings here.<br/>
Organize and automate your job search while at home or on the go. We’ll deliver new, relevant jobs of interest straight to your inbox.<br/>
Learn More</p>
      </div>
      <div>
        <img src={Logos} />
      </div>
      </div>
    </div>
  )
}

export default Company
