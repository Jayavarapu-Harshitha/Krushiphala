import { Avatar,  Button,Link,  Grid, Paper, TextField, Typography } from '@material-ui/core';
import React,{useState} from 'react';
// import {useNavigate} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox  from '@material-ui/core/Checkbox';
import axios from 'axios';
const Login = () => {
    const[inputField,setInputField] =useState({
        email:'',
        password:'',
    })
// const navigate=useNavigate()
const[errField,setErrField] =useState({
    emailErr:'',
    passwordErr:'',

})

const inputHandler=(e)=>{
    setInputField({...inputField,[e.target.name]:e.target.value})
}


const submitButton= async ()=>{
    if(validForm())
    {  
        let url='http://localhost:3000/auth/login'
        let options={
            method:'POST',
            url:url,
            headers:{

            },
            data: inputField
        }
      try{
         let response = await axios(options)
         console.log(response)
         if(response.data.status=200)
         {
          alert('Login Succesfully')
        //   localStorage.setItem('token',response.data.token)
          setTimeout(()=>{
        //    navigate.push('/home')  
          },1500)
         }
         else{
             alert(response.data.message);
         }
      }
      catch(e){
       alert('Something went wrong');
      }
     }
  
}
const validForm=()=>{
    let formIsValid=true;
    var validEmailRegex =RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\")) @(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    setErrField({
  
    emailErr:'',
    passwordErr:'',

    })
 
  if(inputField.email == ''){
    formIsValid=false;
      setErrField(prevState=>({
          ...prevState,emailErr:'Please Enter Email'
      }))
  }
  if(inputField.email == '' && !validEmailRegex.test(inputField.email)){
    formIsValid=false
      setErrField(prevState=>({
          ...prevState,emailErr:'Please Enter valid Email'
      }))
  }
 
  if(inputField.password == ''){
    formIsValid=false;
      setErrField(prevState=>({
          ...prevState,passwordErr:'Please Enter password'
      }))
  }
 
  return   formIsValid
}

    const paperStyle={padding:20,height:'60vh',width:300,margin:"20px auto"}
    const avatarStyle={backgroundColor:"green"}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <br/>
               <h2>Sign In</h2>
               </Grid>
               <div>
               <TextField label="Email" placeholder="Enter Email" method="post" name="email"
               value={inputField.email} onChange={inputHandler} type="text" fullWidth required/>
                {
                    errField.emailErr.length > 0 && <span className="error">{errField.emailErr}</span>
                }
                </div><div>
               <TextField label="Password" placeholder="Enter Password" method="post" name="password"
               value={inputField.password} onChange={inputHandler} type="password" fullWidth required/>
                {
                    errField.passwordErr.length > 0 && <span className="error">{errField.passwordErr}</span>
                }
                </div>
                <br/>
              <FormControlLabel
               control={
               <Checkbox 
               name="checked"
               color="primary"
               />
               }
               label="Remember me"   
              />       
                <br/>
                <br/>
              <Button type='submit' variant ="contained" color='primary'  onClick={submitButton} fullWidth>SIGN IN</Button>
              {/* <Typography >
                  <Link href='#' >
                      Forgot Password
                  </Link>
              </Typography> */}
              <br/>
            </Paper>
        </Grid>
    );
}
export default Login;