import './Soiltest.css';
import axios from 'axios';
import {Button} from '@material-ui/core';
 import ReactPlayer from 'react-player';
import {useState} from 'react';
const Soiltest= ()=> {

  const [file,setfile] =useState(null);

    const onFormSubmit = (e) =>{
      e.preventDefault();
      
      const formData = new FormData();
      formData.append('photo',file);
      const config={
        headers:{
          'content-type':'multipart/form-data',
        },
      };
      const url='http://localhost:3000/user/upload';
      axios.post(url,formData,config).then((response)=>{
        alert('Image Uploaded Successfully ...');
      })
      .catch((err) => {
        console.log('err',err);
      })
    }

  const onInputChange=(e)=>{
    setfile(e.target.files[0])
  }
  return (
    <div className="file">
      <div className="upload">
    <form onSubmit={onFormSubmit}>
      <br/><br/>
    <h4 style={{color:"white"}}>You can submit your soil test file here to get advices!!</h4>
   
    <input style={{color:'white'}}type='file' name='photo' onChange={onInputChange} />
    <button type="submit">Upload</button>
   </form></div>
    <div className="soilvideo">
   <ReactPlayer className="video"
     id="video-style" style={{width:"400px",height:"350px"}}
         url="https://youtu.be/qcH9aYIbgF4"
       />
    </div>
     </div>
    
  );
}

export default Soiltest;
