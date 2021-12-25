// import React from "react"
// import axios from 'axios';
// import './homepage.css';
// import { Button } from "@material-ui/core";
// import {useState} from 'react';
// import ReactPlayer from 'react-player';
// import MachineRentals from "../../MachineRentals";
// import { BrowserRouter as Router,Link, Route,Switch } from "react-router-dom";
// const Homepage= ()=> {

//   const [file,setfile] =useState(null);

//     const onFormSubmit = (e) =>{
//       e.preventDefault();
      
//       const formData = new FormData();
//       formData.append('photo',file);
//       const config={
//         headers:{
//           'content-type':'multipart/form-data',
//         },
//       };
//       const url='http://localhost:3000/user/upload';
//       axios.post(url,formData,config).then((response)=>{
//         alert('Image Uploaded Successfully ...');
//       })
//       .catch((err) => {
//         console.log('err',err);
//       })
//     }

//   const onInputChange=(e)=>{
//     setfile(e.target.files[0])
//   }
//   return (
//     <div className="file">
//       <div className="upload">
//    <form onSubmit={onFormSubmit}>
//    <h4 style={{color:"white"}}>You can submit your soil test file here to get advices!!</h4>
   
//    <input type='file' name='photo' onChange={onInputChange}/>
//    <Button  variant="contained" color="secondary" >Upload</Button>
//    </form></div>
//    <div className="soilvideo">
//    <ReactPlayer className="video"
//     id="video-style" width="320" height="240"
//         url="https://www.youtube.com/watch?v=qcH9aYIbgF4"
//       />
//    </div>
//     </div>
//   );
// }

// export default Homepage;




















// // import "./homepage.css"
// // import Image from './Image.js';
// // import "./Image.css";
// // const Homepage = ({setLoginUser}) => {
// //     return (
// //         <div className="homepage">
// //             Explore Krushi Phala
// //             <div className="button" onClick={Image}> </div>
// //              {/* onClick={() => setLoginUser({})} >Logout */}
// //         </div>
// //     )
// // }

// // export default Homepage

// // import './App.css';