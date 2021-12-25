import React, {useState} from "react"
import {Button,TextField,Avatar,Grid,Paper} from '@material-ui/core';
import axios from "axios"

const Vendorpage = () => {


    const [ user, setUser] = useState({
        name:"",
        email:"",
        contact:"",
        machine:"",
        price_per_day:"",
        place:"",
        description:"",
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:9002/vendors", user)
        .then(res => {
            alert("Added succesfully")
            console.log("submitted")
            
        })
    }
    const paperStyle={padding:20,height:'85vh',width:325,margin:"20px auto"}
    const avatarStyle={backgroundColor:"green"}
    return (
        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
            <Avatar style={avatarStyle}></Avatar>
           <h2>Vendors Page</h2>
           </Grid>
            <TextField label="Username" type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter your Email" fullWidth required></TextField>
            <TextField label="Email" type="text" name="email" value={user.email} onChange={handleChange}   fullWidth required></TextField>
            <TextField label="Contact" type="text" name="contact" value={user.contact} onChange={handleChange}  fullWidth required></TextField>
            <TextField label=" machine" type="text" name="machine" value={user.machine} onChange={handleChange}  fullWidth required></TextField>
            <TextField label="Price" type="text" name="price_per_day" value={user.price_per_day} onChange={handleChange} fullWidth required></TextField>
            <TextField label="place" type="text" name="place" value={user.place} onChange={handleChange}  fullWidth required></TextField>
            <TextField label="description" type="text" name="description" value={user.description} onChange={handleChange}  fullWidth required></TextField>
            <br/>
            <br/>
              <Button type='submit' onClick={login} variant ="contained" color='primary' fullWidth>Submit</Button><br/>
            </Paper>
        </Grid>
    )
}

export default Vendorpage;