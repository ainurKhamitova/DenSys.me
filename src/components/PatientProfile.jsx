
import React from "react";
import { useNavigate } from "react-router-dom";


function PatientProfile(props){
    const user = props.user
    const navigate = useNavigate()
    function logout(){
        navigate("/")
    }
    
    return <div className="patProfile">
            <div className="col-md-12">
                <div className="card pat">
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                            <div className="mt-3">
                            <img className = "logoimg" src = {require('../images/lotus.jpeg')} />
                                <h4>{user.name} {user.surname}</h4>
                                <p className="text-secondary mb-1">Patient</p>
                                <p className="text-muted font-size-sm">{user.iin}</p>
                                <button className="buttonADD" onClick = {logout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
              <div className="card patInfo">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">IIN</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user.iin}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Gov Id</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     {user.govId}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Telephone Number</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user.contactNo}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user.email}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     {user.address}
                    </div>
                  </div>
                  <hr/>
                </div>
            </div>   
        </div>
    </div>
               
    
}
export default PatientProfile;