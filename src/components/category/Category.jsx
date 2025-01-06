import oil from "../../assets/img/oilg.png"
import health from "../../assets/img/hea.png"
import book from "../../assets/img/a.png"
import account from "../../assets/img/ac.png"

import design from "../../assets/img/oil.png"
import technology from "../../assets/img/Laptop.png"
import security from "../../assets/img/sei.png"
import data from "../../assets/img/da.png"


import './Category.css'

function Category() {
  return (
    <div>
      
      <div className="container1">
      <h3>Popular Categories</h3>
        <div className="container2">
        <div className="oil"> 
          <img src={oil} />
          <p><b>Oil and Gas</b></p>
           <small>(20 new jobs)</small>
        </div>
        <div className="oil">  
          <img src={health} />
          <p><b>Healthcare</b></p>
          <small>(10 new jobs)</small>
        </div>
        <div className="oil"> 
          <img src={book} />
          <p><b>Education</b></p>
          <small>(30 new jobs)</small>
        </div>
        <div className="oil"> 
           <img src={account} />
           <p><b>Accounting</b></p>
           <small>(10 new jobs)</small>
        </div>
        </div>
        <div className="container3">
        <div className="oil">
           <img src={design} />
           <p><b>Design, Art and Multimedia</b></p>
           <small>(20 new jobs)</small>
           </div>
        <div className="oil"> 
          <img src={technology} />
        <p><b>Technology</b></p>
           <small>(10 new jobs)</small>
        </div>
        <div className="oil">
           <img src={security} />
        <p><b>Security</b></p>
           <small>(10 new jobs)</small>
        </div>
        <div className="oil"> 
          <img src={data} />
        <p><b>Data Analyst</b></p>
           <small>(10 new jobs)</small>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Category
