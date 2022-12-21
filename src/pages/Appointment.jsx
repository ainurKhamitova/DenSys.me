import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import {TextField, Autocomplete, Stack } from '@mui/material';


function Appointment(){
  const [specialization, setSpecialization] = useState([""]);
  const [doctor, setDoctor] = useState([""]);
  const [procedure, setProcedure] = useState([""]);
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    category: "",
    searchItem: ""
  })
  
  const [defaultProps, setDefaultProps] = useState( {
    options: [],
    getOptionLabel: (option) => "",
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
    fetch("/getProcedure").then((res) =>
    res.json().then((data) => {
        console.log(data);
        // Setting a data from api
        setProcedure(data)
    })
    );

    fetch("/admin/doctor/doctorData").then((res) =>
    res.json().then((data) => {
        // Setting a data from api
        setDoctor(data)
    })
);
  }, []);
   
  function handleSearch(event){
    const { name, value } = event.target;
    handleChange(event)
    
    if(name === 'category'){
      
      if(value === 'name'){
        setDefaultProps({
          options: doctor,
          getOptionLabel: (option) => option.name + " "+ option.surname
        })
      }
      if(value === 'specializationId'){
        setDefaultProps({
          options: specialization,
          getOptionLabel: (option) => option.specializationId,
        })
       }
      if(value === 'serviceId'){
        setDefaultProps({
          options: procedure,
          getOptionLabel: (option) => option.serviceId,
        })
      }
    }
  }
  
  function handleChange(event) {
    const { name, value } = event.target;
    
    console.log(search);
    setSearch(prevValue => {
      return {...prevValue,
        [name]: value
      };
    });  
  }

    
  function handleClick(){
    console.log(search);
    fetch("/getDoctor/"+ search.category + "/" + search.searchItem).then((res) =>
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
    <label class="input-group-text" for="inputGroupSelect02">Options</label>
      </div>
      <select className="custom-select category" id="inputGroupSelect02" value={search.category} name ="category" onChange={handleSearch} >
        <option value="Select">Select</option>
        <option value="name">Name</option>
        <option value="specializationId">Specialization</option>
        <option value="serviceId">Procedure</option>
      </select>
        
      </div>
      <div className="form-control">
        <Autocomplete
        className="autoSearch"
          {...defaultProps}
          id="auto-complete"
          autoComplete
          includeInputInList
          onChange={((event, value) =>{ setSearch(prevValue => {
            console.log(search.category)
            console.log(value)
            if(search.category === 'name'){
              return {...prevValue,
                ["searchItem"]: value.name
              };
            }

            if(search.category === 'specializationId'){
              return {...prevValue,
                ["searchItem"]: value.specializationId
              };
            }
            if(search.category === 'serviceId'){
              return {...prevValue,
                ["searchItem"]: value.serviceId
              };
            }
            
      });})}
          renderInput={(params) => (
            <TextField {...params} label="Search" variant="standard" />
          )}
      />
          
          <button type="button"  className="buttonSearch" onClick={handleClick}>Search <i className="fas fa-search"></i>
        </button>
        </div>
      
  <div className="list-group specialization">

  
</div>
<div>
{specialization.map((item) => (<a class="list-group-item list-group-item-action" onClick = {()=>{handleNavigate(item.specializationId)}}>{item.specializationId}</a>))}
  </div>
  </div>
}

export default Appointment;
