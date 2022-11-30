
import React, { useState, useEffect } from "react";
import {  useLocation, useNavigate } from "react-router-dom";

function DoctorList(){

    const location = useLocation();
    let user = location.state.user;
    console.log(user);
    const navigate =useNavigate();
  
    function handleClick(id, specializationId){
        navigate("/makeAppointment", {      state: {
            userId: id,
            specializationId: specializationId
          }})
       }

   return  <div>
 
   {user.map((item) => (
        <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img src = {require('../AdminComponents/avatar7.png')} alt="Admin" className="rounded-circle adminImg" />
                            <div className="mt-3">
                                <h4>{item.name} {item.surname}</h4>
                                <p className="text-secondary mb-1">{item.specializationId}</p>
                                <p className="text-muted font-size-sm">{item.deptId}</p>
                                <button className="btn btn-primary profileBtn" onClick = {()=>{handleClick(item.doctorId, item.specializationId)}}>Make an Appointment</button>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Raiting</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {item.raiting}
                    </div>
                    </div>
                    <hr/>
                    <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Experience in years</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {item.experience}
                    </div>
                    </div>
                    <hr/>
                    <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Telephone Number</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {item.contactNo}
                    </div>
                    </div>
                    <hr/>
                    <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {item.address}
                    </div>
                    </div>
                    <hr/>
                    <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Degree</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {item.category}
                    </div>
                    </div>
                    <hr/>
                </div>
            </div>   
        </div>
        </div>
   ))}
</div>

}
export default  DoctorList;