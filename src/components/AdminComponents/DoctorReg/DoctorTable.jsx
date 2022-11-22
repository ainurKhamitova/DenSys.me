import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function DoctorTable(){

    
    const [data, setdata] = useState([]);
    const navigate = useNavigate();
   
    
    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/admin/doctor/doctorData").then((res) =>
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
                <th scope="col">DoctorId</th>
                <th scope="col">IIN</th>
                <th scope="col">Gov ID</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">DateOfBirth</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Department ID</th>
                <th scope="col">Specialization Details ID</th>
                <th scope="col">Experience in year</th>
                <th scope="col">Photo</th>
                <th scope="col">Category</th>
                <th scope="col">Price of the appointment</th>
                <th scope="col">Degree/Education</th>
                <th scope="col">Rating</th>
                <th scope="col">Address</th>
                <th scope="col">Homepage URL</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
    </table>

   }

   function handleEdit(id){
    navigate("/admin/doctor/editPage", {      state: {
        userId: id,
      }})
   }
   function handleDelete(id){

    console.log(id);
    fetch('/admin/doctor/deletePatient/'+id, {
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
                <th scope="col">Doctor Id</th>
                <th scope="col">IIN</th>
                <th scope="col">Gov ID</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">DateOfBirth</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Department ID</th>
                <th scope="col">Specialization Details ID</th>
                <th scope="col">Experience in year</th>
                <th scope="col">Photo</th>
                <th scope="col">Category</th>
                <th scope="col">Price of the appointment</th>
                <th scope="col">Schedule details</th>
                <th scope="col">Degree/Education</th>
                <th scope="col">Rating</th>
                <th scope="col">Address</th>
                <th scope="col">Homepage URL</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                
                <tr key={item.doctorId}>
                  <td>{item.doctorId}</td>
                  <td>{item.iin}</td>
                  <td>{item.govId}</td>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.dateOfBirth}</td>
                  <td>{item.contactNo}</td>
                  <td>{item.deptId}</td>
                  <td>{item.specializationId}</td>
                  <td>{item.experience}</td>
                  <td>{item.img}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.scheduleDetail}</td>
                  <td>{item.degree}</td>
                  <td>{item.raiting}</td>
                  <td>{item.address}</td>
                  <td>{item.homepage}</td>
                    <td> 
                        <button type="button" onClick = {()=>{handleEdit(item.doctorId)}} className="btn btn-success tableButton{">Edit</button>
                        <button onClick = {()=>{handleDelete(item.doctorId)}} className="btn btn-danger tableButton{">Delete</button>
                    </td>
                 </tr>
             ))}
            </tbody>
            </table>
      </div>
    );
}

export default DoctorTable;