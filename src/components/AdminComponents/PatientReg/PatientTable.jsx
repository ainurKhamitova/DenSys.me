import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function PatientTable(){

    
    const [data, setdata] = useState([]);
    const navigate = useNavigate();
   
    
    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/admin/patient/patientData").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata(data)
            })
        );
    }, []);


   if(data === null){
    return <table class="table table-hover ">
            <thead>
                <tr className="table-primary">
                <th scope="col">IIN</th>
                <th scope="col">Gov ID</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">DateOfBirth</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Emergency Contact Number</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Email(Optional)</th>
                <th scope="col">Address</th>
                <th scope="col">Marital Status</th>
                <th scope="col">Registration Date</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
    </table>

   }

   function handleEdit(id){
    navigate("/admin/patient/editPage", {      state: {
        userId: id,
      }})
   }
   function handleDelete(id){

    console.log(id);
    fetch('/admin/patient/deletePatient/'+id, {
        method: 'DELETE',
        header: {
           'Accept' : 'application/json',
           'Content-Type' : 'application/json',
          }
        })
    setdata(data.filter(record=>record.iin !== id))
   }
 
    return ( <div>
            
            <table class="table table-hover ">
            <thead>
                <tr className="table-primary">
                <th scope="col">IIN</th>
                <th scope="col">Gov ID</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">DateOfBirth</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Emergency Contact Number</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Email(Optional)</th>
                <th scope="col">Address</th>
                <th scope="col">Marital Status</th>
                <th scope="col">Registration Date</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                
                <tr key={item.iin}>
                  <td>{item.iin}</td>
                  <td>{item.govId}</td>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.dateOfBirth}</td>
                  <td>{item.bloodType}</td>
                  <td>{item.emergencyNo}</td>
                  <td>{item.contactNo}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.maritalStatus}</td>
                  <td>{item.regestrationDate}</td>
                    <td> 
                        <button type="button" onClick = {()=>{handleEdit(item.iin)}} className="btn btn-success tableButton{">Edit</button>
                        <button onClick = {()=>{handleDelete(item.iin)}} className="btn btn-danger tableButton{">Delete</button>
                    </td>
                 </tr>
             ))}
            </tbody>
            </table>
      </div>
    );
}

export default PatientTable;