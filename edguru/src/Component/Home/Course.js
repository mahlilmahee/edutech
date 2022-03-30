import React from 'react';

const Course = (props) => {
    const {name,img,description,price,duration,id}=props.data;
    return (
        <div class="container" style={{marginTop:'10px',  textAlign:'center' ,marginBottom:'15px'}}> 
        <div class="row text-start">
        <div class="col-lg-6">  <img width="100%" style={{borderRadius:'10px'}} src={img}/>
        
        </div>
        <div class="col-lg-5">
        < h3>{name} </h3>
            
            <p> Description: {description.slice(0,300)} </p> 
            <h3> price:$ {price}</h3>
            Validated for {duration} months  only for free
           
             </div> 
        </div>
         
        
           
        </div>
    );
};

export default Course;