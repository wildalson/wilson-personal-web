import React,{useState} from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import {Link} from "react-router-dom";
// import Navbar from "./components/navigation.bar.component";
import homeComponent from "./components/home.component";
import contactComponent from "./components/contact.component";
// import resumeComponent from "./components/resume.component";
import portfolioComponent from "./components/portfolio.component";
import project1 from "./components/project1.component";
import project2 from "./components/project2.component";
import project3 from "./components/project3.component";
import project4 from "./components/project4.component.jsx";
import Login from "./components/login.component";
import RedirectToLogin from "./components/RedirectToLogin";
import Profile from "./components/Profile";
function App() {
  const [isAuth,setAuth] = useState(false);
  const userStorage = localStorage.getItem("user");
  return (
    <Router>
    
    <header className = "nav">
    <ul className = "nav-list">
    <li><i className="far fa-address-card fa-xs"></i>
    <Link to = "/"> About Me</Link></li>
    {/* <li><i className="far fa-file-pdf fa-xs"></i><Link to = "/resume"> Resume</Link></li> */}
    <li><i className="fas fa-project-diagram fa-xs"></i><Link to = "/portfolio"> Portfolio</Link></li>
    <li><i className="fas fa-phone fa-xs"></i><Link to = "/contact"> Contact me</Link></li>
    </ul>
    </header>
    
    <div className = "container">
    
    
    <Switch>
    <Route exact path = "/" component ={homeComponent}></Route>
    {/* <Route exact path = "/resume" component ={resumeComponent}></Route> */}
    <Route exact path = "/portfolio" component ={portfolioComponent}></Route>
    <Route exact path = "/contact" component ={contactComponent}></Route>
    <Route exact path = "/portfolio/project1" component={project1}></Route>
    <Route exact path = "/portfolio/project2" component={project2}></Route>
    <Route exact path = "/portfolio/project4" component={project4}></Route> 
    <Route exact path = "/portfolio/project3" component = {project3}></Route> 
    {/* <RedirectToLogin exact path = "/portfolio/project3/" component = {project3}></RedirectToLogin>  */}
    <Route exact path = "/portfolio/project3/profile">
      <RedirectToLogin isAuth = {isAuth} component = {Profile}/>
    </Route>
     
    <Route path = "*" component = {()=> "404 PAGE NOT FOUND"}></Route> 
    </Switch>
    </div>
    </Router>
    );
  }
  
  export default App;
  