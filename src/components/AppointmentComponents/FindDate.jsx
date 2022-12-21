import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function FindDate(){
    const location = useLocation();
    let userId = location.state.userId;
    let specializationId = location.state.specializationId;
    const navigate =useNavigate();

    const [app, setApp] = useState({
        doctorId: userId,
        specialization: specializationId,
        dateOfApp: ""
      })

      const[timeslots, setTimeslots] = useState([{timeslotId: "", time: ""}]);
      function handleChange(event) {
        const { name, value } = event.target;
    
        setApp(prevValue => {
          return {...prevValue,
            [name]: value
          };
        });
      }
      
      function handleSubmit(event){

        event.preventDefault()

        fetch("/getTimeSlots/"+ app.doctorId + "/" +app.dateOfApp.toString()).then((res) =>
        res.json().then((data) => {
          console.log(data)
          if(data === null){
            console.log("no data")
          }else{
          navigate("/makeAppointment", {      state: {
            user: app,
            timeslots: data
          }})
        }
    }
        )
        
        )

    }
    return  <section className="vh-200 gradient-custom">
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
                      <div class="col-12">
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
    </section>

}

export default FindDate;