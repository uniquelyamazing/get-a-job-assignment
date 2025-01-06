import Navbar from "./components/navbar/navbar";
import Highlight from "./components/highlight/Highlight";
import Profile from "./components/profile/Profile";
import Category from "./components/category/Category";
import Company from "./components/company/Company";
import Testimony from "./components/testimony/Testimony";
import Footer from "./components/footer/Footer";



const App = () => {
  return (
    <div className="body">
     <Navbar/> 
     <Highlight/>
     <Profile/>
     <Category/>
     <Company/>
     <Testimony/>
     <Footer/>
   </div>
  );
}

export default App;
