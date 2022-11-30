import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";


function Appointment(){

    const [specialization, setSpecialization] = useState([""]);
    const navigate = useNavigate();
    const [search, setSearch] = useState({
      category: "",
      searchItem: ""
    })
   
    // Using useEffect for single rendering
    useEffect(() => {
      // Using fetch to fetch the api from 
      // flask server it will be redirected to proxy
      fetch("/getSpecialization").then((res) =>
          res.json().then((data) => {
              console.log(data);
              // Setting a data from api
              setSpecialization(data)
          })
      );
    }, []);
     

    function handleChange(event) {
      const { name, value } = event.target;
  
      setSearch(prevValue => {
        return {...prevValue,
          [name]: value
        };
      });
    }

    function handleClick(){
      console.log(search);
      fetch("/getDoctor/"+ search.category + "/" +search.searchItem).then((res) =>
            res.json().then((data) => {
              if(data === null){
                console.log("no data")
              }else{
              navigate("/doctorList", {      state: {
                user: data,
              }})
            }
            })
      );
      
     console.log("notfound");


    }
    
    function handleNavigate(value){
      fetch("/getDoctorBySpec/"+ value ).then((res) =>
      res.json().then((data) => {
        if(data === null){
          console.log("no data")
        }else{
        navigate("/doctorList", {      state: {
          user: data,
        }})
      }
      })
    );

    console.log("notfound");

    }
    return <div>
    <div className="input-group search">
    <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Options</label>
      </div>
      <select className="custom-select category" id="inputGroupSelect01" value={search.category} name ="category" onChange={handleChange} >
        <option value="Select">Select</option>
        <option value="name">Name</option>
        <option value="specializationId">Specialization</option>
        <option value="procedure">Procedure</option>
      </select>
        <div className="form-outline">
          <input 
              type="search" 
              id="search" 
              className="form-control"
              value={search.searchItem}
              name ="searchItem" 
              onChange={handleChange}

              />
          <label className="form-label" for="form1">Search</label>
        </div>
        <button type="button" className="btn btn-primary " onClick={handleClick}>
          <i className="fas fa-search"></i>
        </button>
      </div>

  <div className="list-group specialization">

  {specialization.map((item) => (<a class="list-group-item list-group-item-action" onClick = {()=>{handleNavigate(item.specializationId)}}>{item.specializationId}</a>))}
</div>

  </div>
}

export default Appointment;
