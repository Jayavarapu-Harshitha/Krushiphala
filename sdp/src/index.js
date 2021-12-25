import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './Search';
import Login from './components/login/Login';
import reportWebVitals from './reportWebVitals';
import Homepage from './components/homepage/homepage';
import Vendorpage from './components/Vendorpage';
import Register from './components/register/Register';
ReactDOM.render(
<React.StrictMode>
 <App/>
 {/* <Search/> 
 <Vendorpage/>  */}

 {/* <Register/> */}
 {/* <Login/> */}
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
