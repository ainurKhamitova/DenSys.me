
import React from "react";
import {  useLocation, useNavigate } from "react-router-dom";

function DoctorList(){

    const location = useLocation();
    let user = location.state.user;
    console.log(user);
    user.map((item)=>{
        if(item.img === null){
            item.img = 'noImage.jpeg'
        }
    })
    const navigate =useNavigate();
    console.log(user);
    
    function handleClick(id, specializationId){
        navigate("/findDate", {      state: {
            userId: id,
            specializationId: specializationId,

          }})
    }
    

    
   
   return  <div>
   {user.map((item) => (
        <div className="row list">
            <div className="col-md-4">
                <div className="card doc">
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                        <div className="imagDiv"> <img src = {require('../../image/'+ item.img)} alt="Admin" className="rounded-circle listImg" />  </div>
                        
                            <div className="mt-3">
                                <h4>{item.name} {item.surname}</h4>
                                <p className="text-secondary mb-1">{item.specializationId}</p>
                                <p className="text-muted font-size-sm">{item.deptId}</p>
                                <button className="buttonADD" onClick = {()=>{handleClick(item.doctorId, item.specializationId)}}>Make an Appointment</button>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card rate">
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