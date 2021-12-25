import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/login/Login';
import AboutUs from './AboutUs';
import ContactPhone from '@material-ui/icons/ContactsSharp';
import HelpIcon from '@material-ui/icons/HelpOutlineRounded';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import Homepage from "./Homepage";
import Info from '@material-ui/icons/InfoRounded';
import SignUp from './components/register/Register';
import ContactUs from "./ContactUs";
import './Navigation.css';
import Soiltest from './Soiltest';
import Search from './Search';
import AgriTools from './AgriTools';
import GardenTools from './GardenTools';
import Crops from "./Crops";
import Machinery from './Machinery';
import Weatherlearn from "./Weatherlearn"
import Vendorpage from './components/Vendorpage';
function Navigate() {

  return (
    <div className="navigate">
      <Router>
        <nav>
          <ul>
            <li>
              <button className="nav-item" ><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 24 }} to='/'><HomeIcon
                style={{
                  fontSize: "22px"
                }} /></Link></button>
            </li>
            <li>
              <button className="nav-item"><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 24 }} to='/AboutUs'>About Us</Link></button>
            </li>

            <li>
              <button className="nav-item"><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 24 }} to='/Crops'>Crops</Link></button>
            </li>
            <li className="dropdown">
              <button className="dropbtn"><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 24 }} to='/Tools'>Tools</Link></button>
              <div className="dropdown-content">
                <li>
                  <button className="tool-item"><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 20 }} to='/Tools/AgriTools'>AgriTools</Link></button>
                </li>
                <li>
                  <button className="tool-item"><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 20 }} to='/Tools/GardenTools'>GardenTools</Link></button>
                </li>
                <li>
                  <button className="tool-item"><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 20 }} to='/Tools/Machinery'>Machinery</Link></button>
                </li>
              
              </div>

            </li>
            <li>
              <button className="nav-item"><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 24 }} to='/ContactUs'>ContactUs</Link></button>
            </li>
            <li>
              <button className="nav-item"><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 24 }} to='/Weatherlearn'>Weatherlearn</Link></button>
            </li>
            <li>
              <button className="nav-item"><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 24 }} to='/SignUp'>SignUp</Link></button>
            </li>
            <li>
            <button className="nav-item"><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 24 }} to='/Login'>Login</Link></button>
            </li>
            <li>
            <button className="nav-item"><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 24 }} to='/Soiltest'>Soil Test</Link></button>
            </li>
            <li>
            <button className="nav-item"><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 24 }} to='/Vendordetails'>Vendor Details</Link></button>
            </li>
            <li>
              <button className="nav-item"><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 24 }} to='/Vendorpage'>Vendorpage</Link></button>
            </li>
            <li>
                  <button className="title"><Link style={{ color: "white", fontFamily: "CourierNew", fontSize: 20}} to='/'>Krushiphala</Link></button>
             </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/AboutUs" exact component={AboutUs}></Route>
          <Route path="/Crops" exact component={Crops}></Route>
          <Route path="/ContactUs" exact component={ContactUs}></Route>
          <Route path="/Tools/AgriTools" exact component={AgriTools}></Route>
          <Route path="/Tools/GardenTools" exact component={GardenTools}></Route>
          <Route path="/ContactUs" exact component={ContactUs}></Route>
          <Route path="/Tools/Machinery" exact component={Machinery}></Route>
          <Route path="/Weatherlearn" exact component={Weatherlearn}></Route>
          <Route path="/Soiltest" exact component={Soiltest}></Route>
          <Route path="/Vendordetails" exact component={Search}></Route>
          <Route path="/Vendorpage" exact component={Vendorpage}></Route>
          <Route path="/SignUp" exact component={SignUp}></Route>
          <Route path="/Login" exact component={Login}></Route>
        </Switch>
      </Router>

    </div>
  );
}














{/* {
        case value:
          
          break;
      
        default:
          break;
      }
    </div>
<nav className="navbar">
<div className="navbar-container">
<ul className="nav-menu"> */}

{/* <li className="nav-item"><Link className="nav-links" to='/'><HomeIcon/>Home</Link></li>
  <li className="nav-item"><Link className="nav-links" to='/AboutUs'><Info/>About us</Link></li>
  <li className="nav-item"><Link className="Tools" to='/Tools'><HelpIcon/>Tools</Link>
  <div class="dropdown">
  <button class="dropbtn">Tools</button>
  <div class="dropdown-content">
    <a href="#">AgriTools</a>
    <a href="#">GardenTools</a>
    <a href="#">Machinery</a>
  </div>
</div> */}
{/* <ul>
  <li className="tool-item"><Link className="nav-links" to='/Tools/AgriTools'>AgriTools</Link></li>
  <li className="tool-item"><Link className="nav-links" to='/Tools/GardenTools'>GardenTools</Link></li>
  <li className="tool-item"><Link className="nav-links" to='/Tools/Machinery'>Machinery</Link></li>
  </ul>*/}
{/* </li> 
  <li className="nav-item"><Link className="nav-links" to='/ContactUs'><ContactPhone/>ContactUs</Link></li>
 <li className="nav-item"><Link className="nav-links" to='/Login'>Login</Link></li> 
 <li className="nav-item"><Link className="nav-links" to='/Signup'>SignUp</Link></li> 
</ul>
</div>

<div>
<Switch>
<Route path='/' exact component={Homepage}></Route>
<Route path='/AboutUs' exact component={AboutUs}></Route>
<Route path='/Tools'exact component={Help}> </Route>
<React.Fragment>
<Route path='/Tools/AgriTools' exact component={AgriTools}></Route>
<Route path='/Tools/GardenTools' exact component={GardenTools}></Route>
<Route path='/Tools/Machinery'exact component={Machinery}> </Route>
  </React.Fragment>
<Route path='/Contactus'exact component={ContactUs}></Route>
<Route path='/Login' exact component={Login}></Route> 
 <Route path='/Signup' exact component={SignUp}></Route>
</Switch>
</div>
</nav>

</Router> */}




export default Navigate;