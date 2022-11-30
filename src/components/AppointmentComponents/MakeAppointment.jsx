import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MakeAppointment(){
    // get userId
const location = useLocation();
let userId = location.state.userId;
let specializationId = location.state.specializationId;


 
  const navigate =useNavigate();

  const [data, setData] = useState({
    doctorId: userId,
    iin : "",
    name: "",
    surname: "",
    dateOfApp: "", 
    timeslotId: "", 
    specialization: specializationId,
    email: "",
    contactNo: ""
    
  })



  function handleChange(event) {
    const { name, value } = event.target;

    setData(prevValue => {
      return {...prevValue,
        [name]: value
      };
    });
  }
  

  return (<section className="vh-200 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
              <form>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div class="form-outline">
                        <input
                            id="doctorId"
                            type="text"
                            value={data.doctorId}
                            name ="doctorId"
                            className="form-control form-control-lg" 
                        />
                        <label className="form-label" for="doctorId">Doctor Id</label>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="form-outline">
                        <input
                            id="specialization"
                            type="text"
                            value={data.specialization}
                            name ="specialization"
                            className="form-control form-control-lg"
                        />
                        <label className="form-label" for="specialization">Specialization</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-outline">
                            <input
                                id="dateOfApp"
                                type="date"
                                value={data.dateOfApp}
                                name ="dateOfApp"
                                className="form-control form-control-lg" sx
                            />
                            <label className="form-label" for="dateOfApp">Date</label>
                        </div>
                    </div>
                </div>

              
                <div class="row">
                <div className="col-4 mb-4">
                  <input className="btn btn-primary btn-lg" type="submit" value="Find timeslot" />
                </div>
                    <div class="col-8 mb-4">
                    <select class="select form-control-lg">
                        <option value="1" disabled>Choose Slot</option>
                        <option value="2">Subject 1</option>
                        <option value="3">Subject 2</option>
                        <option value="4">Subject 3</option>
                    </select>
                    <label class="form-label select-label">Choose slot</label>
                    </div>
                </div>
                  
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div class="form-outline">
                      <input
                        id="iin"
                        type="text"
                        value={data.iin}
                        name ="iin"
                        className="form-control form-control-lg" 
                        onChange={handleChange}
                      />
                      <label className="form-label" for="iin">IIN</label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div class="form-outline">
                      <input
                        id="name"
                        type="text"
                        value={data.name}
                        name ="name"
                        className="form-control form-control-lg" 
                        onChange={handleChange}
                      />
                      <label className="form-label" for="name">Name</label>
                    </div>
                  </div>
              
                  <div class="col-md-4 mb-4">
                    <div class="form-outline">
                      <input
                        id="surname"
                        type="text"
                        value={data.surname}
                        name ="surname"
                        className="form-control form-control-lg" 
                        onChange={handleChange}
                      />
                      <label className="form-label" for="surname">Surname</label>
                    </div>
                  </div>
                </div>
                <div className="row">
              
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        id="contactNo"
                        type="text"
                        value={data.contactNo}
                        name ="contactNo"
                        className="form-control form-control-lg" 
                        onChange={handleChange}
                      />
                      <label className="form-label" for="contactNo">Contact No</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        id="email"
                        type="text"
                        value={data.email}
                        name = "email"
                        className="form-control form-control-lg" 
                        onChange={handleChange}
                      />
                      <label className="form-label" for="email">Email</label>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-2">
                  <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                </div>
              </form>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>)
  
}

export default MakeAppointment;