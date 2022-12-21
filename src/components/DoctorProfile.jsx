import React from "react";
import { useNavigate } from "react-router-dom";
function DoctorProfile(props){
    const user = props.user
    const navigate = useNavigate()
    function logout(){
        navigate("/")
    }
    if(user.img === null){
        user.img = 'noImage.jpeg'
    }
    return <div className="docProfile">
            <div className="col-md-12">
                <div className="card pat">
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                            <div className="mt-3">
                            <img className = "logoimg" src = {require('../image/'+ user.img)} />
                                <h4>{user.name} {user.surname}</h4>
                                <p className="text-secondary mb-1">Doctor</p>
                                <p className="text-secondary mb-1">{user.raiting}</p>
                                <p className="text-muted font-size-sm">{user.departmentId}</p>
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
                      <h6 className="mb-0">Id</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     {user.doctorId}
                    </div>
                  </div>
                  <hr/>
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
                      <h6 className="mb-0">Specialization</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     {user.specializationId}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Experience</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     {user.experience}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Category</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     {user.category}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Degree</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     {user.degree}
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
                      {user.address}
                    </div>
                  </div>
                  <hr/>
                </div>
            </div>   
        </div>
        
</div>
               
    
}
export default DoctorProfile;