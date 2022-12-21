import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MakeAppointment(){
    // get userId
const location = useLocation();
let user = location.state.user;

let timeslots = location.state.timeslots



 
  const navigate =useNavigate();

  const [app, setApp] = useState({
    doctorId: user.doctorId,
    iin : "",
    name: "",
    surname: "",
    dateOfApp: user.dateOfApp, 
    timeslotId: "", 
    specialization: user.specialization,
    email: "",
    contactNo: ""
    
  })





  function handleChange(event) {
    const { name, value } = event.target;

    setApp(prevValue => {
      return {...prevValue,
        [name]: value
      };
    });
    console.log(app)
  }
  



  
  let handleSubmit = async (e) => {

    e.preventDefault();
  
    const requestOptions = {
      method: "POST",
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(app)
  }
  fetch('/makeAppointment', requestOptions)
      .then(res => res.text())
      .then(text => console.log(text))
      .then(data =>{
          navigate("/")
      }).catch(err => console.log(err))

    }
 
  return (<section className="vh-200 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Appointment Form</h3>
              <form>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div class="form-outline">
                        <input
                            id="doctorId"
                            type="text"
                            value={app.doctorId}
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
                            value={app.specialization}
                            name ="specialization"
                            className="form-control form-control-lg"
                        />
                        <label className="form-label" for="specialization">Specialization</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div class="form-outline">
                            <input
                                id="dateOfApp"
                                type="date"
                                value={app.dateOfApp}
                                name ="dateOfApp"
                                className="form-control form-control-lg" 
                                onChange={handleChange}
                            />
                            <label className="form-label" for="dateOfApp">Date</label>
                        </div>
                    </div>
                    <div class="col-6 mb-4">
                    <select class="select make" value={app.timeslotId} name ="timeslotId" onChange={handleChange}>
                    
                        <option value="0">Choose Slot</option>
                        {timeslots.map((option, index) => (
                          
                          <option key={option.timeslotId} value={option.timeslotId}>
                            {option.timeslotId} - {option.time}
                          </option>)
                          
                          )
                          
                          }
                        
                    </select>
                    <label class="form-label select-label">Choose slot</label>
                    </div>
                </div>

              
                <div class="row">
                
                    
                </div>
                  
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div class="form-outline">
                      <input
                        id="iin"
                        type="text"
                        value={app.iin}
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
                        value={app.name}
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
                        value={app.surname}
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
                        value={app.contactNo}
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
                        value={app.email}
                        name = "email"
                        className="form-control form-control-lg" 
                        onChange={handleChange}
                      />
                      <label className="form-label" for="email">Email</label>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-2">
                  <input className="buttonADD" type="submit" value="Submit" onClick={handleSubmit} />
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