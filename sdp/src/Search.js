
import { useState } from 'react';
import Plough from './images/SearchImages/Plough.jpeg';
import Tractor from './images/SearchImages/tractor.jpg';
import baleloader from './images/SearchImages/baleloader.jpg';
import Clodcrusher from './images/SearchImages/Clodcrusher.jpg';
import combineHarvestor from './images/SearchImages/combineHarvestor.jpg';
import RotatoryTillage from './images/SearchImages/RotatoryTiller.jpg';
import PowerHarrow from './images/SearchImages/Powerharrow.jpg';
import Tillage from './images/SearchImages/Tillage.jpg';
import RotatoryTillageandSeedDrill from './images/SearchImages/RotatoryTillerandSeedDrill.jpg';
import Sprayer from './images/SearchImages/Sprayer.jpg';
import Drones from './images/SearchImages/drone.jpg';
import ManureSpreader from './images/SearchImages/ManureSpreader.jpg';
import TrolleyPump from './images/SearchImages/TrolleyPump.jpg';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SearchRounded } from '@material-ui/icons';
import './Search.css';
function Search(){

    const [filter,setFilter]=useState('')

const searchText = (event)=>{
 setFilter(event.target.value)
}
const cardData=[
    {
       id:1,
       img:Tractor,
       machine:'Tractor',
       name:'Sarath',
       email: 'sarathchandra@gmail.com',
       contact:  '90908765490', 
       price_per_day: '250',
       place: 'vijayawada'
    },
    {
       id:2,
       img:Plough,
       machine:'Plough',
       name:'John',
       email: 'john@gmail.com',
       contact:  '98790765321', 
       price_per_day: '700',
       place: 'Hyderabad'
    },
    {
        id:3,
        img:Clodcrusher,
        machine:'Clod Crusher',
        name:'Rama babu',
        email: 'ramaababu@gmail.com',
        contact:  '9432765321', 
        price_per_day: '650',
        place: 'Vijayawada'
     },
     {
        id:4,
        img:PowerHarrow,
        machine:'Power Harrow',
        name:'Satwik',
        email: 'Sathwik@gmail.com',
        contact:  '8673346631', 
        price_per_day: '850',
        place: 'Amalapuram'
     },
     {
        id:5,
        img:Drones,
        machine:'Drones',
        name:'Sanketha',
        email: 'sankheta@gmail.com',
        contact:  '8673346631', 
        price_per_day: '2000',
        place: 'Vijayawada'
     },
     {
        id:6,
        img:Sprayer,
        machine:'Sprayer',
        name:'Mani',
        email: 'mani@gmail.com',
        contact: '9873397631', 
        price_per_day: '900',
        place: 'Tirupati'
     },
     {
        id:7,
        img:Tillage,
        machine:'Tillage',
        name:'Malleswari',
        email: 'malli@gmail.com',
        contact: '8573546292', 
        price_per_day: '1200',
        place: 'Bhimavaram'
     },
     {
        id:8,
        img:RotatoryTillage,
        machine:'Rotatory Tiller',
        name:'Ganapathi',
        email: 'ganesh@gmail.com',
        contact: '6758493012', 
        price_per_day: '1500',
        place: 'Annavaram'
     },
     {
        id:9,
        img:combineHarvestor,
        machine:'Combine Harvestor',
        name:'Kasi',
        email: 'kasi@gmail.com',
        contact: '8569046273', 
        price_per_day: '3000',
        place: 'Guntur'
     },
     {
        id:10,
        img:baleloader,
        machine:'Bale loader',
        name:'Prabhakar',
        email: 'prabhakar@gmail.com',
        contact: '6734945735', 
        price_per_day: '2500',
        place: 'Rajahmundry'
     },
     {
        id:11,
        img:RotatoryTillage,
        machine:'Rotatory Tiller',
        name:'Vamsi Kiran',
        email: 'vamsi@gmail.com',
        contact: '9846725342', 
        price_per_day: '3600',
        place: 'Tekkali'
     },
     {
        id:13,
        img:Drones,
        machine:'Drone irrigator',
        name:'Manjunatham',
        email: 'manju@gmail.com',
        contact: '9236780680', 
        price_per_day: '2300',
        place: 'Nellore'
     },
     {
        id:14,
        img:PowerHarrow,
        machine:'Power Harrow',
        name:'Suresh',
        email: 'suri1995@gmail.com',
        contact: '876598780', 
        price_per_day: '1200',
        place: 'Hindupuram'
     },
     {
      id:15,
      img:baleloader,
      machine:'Bale loader',
      name:'Saranya',
      email: 'saranya@gmail.com',
      contact: '8438505684', 
      price_per_day: '1300',
      place: 'Bhimavaram'
   },
   {
      id:16,
      img:Clodcrusher,
      machine:'Clod Crusher',
      name:'Tataji',
      email: 'tataji123@gmail.com',
      contact: '98474626540', 
      price_per_day: '890',
      place: 'Annavaram'
   },
   {
      id:17,
      img:RotatoryTillageandSeedDrill,
      machine:'Rotatory Tillage and SeedDril',
      name:'Chandrasekhar',
      email: 'chandrasekhar@gmail.com',
      contact: '7832543061', 
      price_per_day: '3000',
      place: 'Gudivada'
   },
   {
      id:18,
      img:ManureSpreader,
      machine:'Manure Spreader',
      name:'Santhoshamma',
      email: 'Santhoshi@gmail.com',
      contact: '9845672081', 
      price_per_day: '900',
      place: 'Khammam'
   },
   {
      id:19,
      img:TrolleyPump,
      machine:'Trolley Pump',
      name:'Madhusudana',
      email: 'madhusudana@gmail.com',
      contact: '9087630128', 
      price_per_day: '1000',
      place: 'Annavaram'
   },
   {
      id:16,
      img:Clodcrusher,
      machine:'Clod Crusher',
      name:'Srinivasa Rao',
      email: 'Srinivasa@gmail.com',
      contact: '9075342679', 
      price_per_day: '1900',
      place: 'Tirupati'
   },
   
   ]

const dataSearch = cardData.filter(item=> {
   return Object.keys(item).some(key =>
     item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
     );
});
    return(
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12 mb-5">
                     <div className="mb-3 col-4 mx-auto text-center">
                         <div>
                         <input
                         type="text"
                         className="form-control"
                         placeholder="Search..."
                         value={filter}
                         onChange={searchText.bind(this)}
                         />
                         </div>
                        </div>  
                       
                {dataSearch.map((item,index)=>{
                    return(
                        <div className="card">
                        {/* <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4"> */}
                        {/* <img src="" className="card p=0 overflow-hidden h-100 shadow"/> */}
                        <div className="card-body">
                            <img src={item.img} style={{width:300,height:200}} ></img>
                             <h5 className="card-title">{item.machine}</h5>
                                <p className="card-text">Name: {item.name}</p>
                               <p className="card-text">Email: {item.email}</p>
                               <p className="card-text">Phone no: {item.contact}</p>
                               <p className="card-text">Price: {item.price_per_day}</p>
                               <p className="card-text">Place: {item.place}</p>           
                        
                        </div>
                        {/* </div>   */}
                        </div>    
                    )
                })}
                
                  </div>    
            </div>
        </section>
    )
}
export default Search