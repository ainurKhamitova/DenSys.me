import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditPatient(props){
  const [data, setData] = useState({
  })
  const location = useLocation();
  const navigate =useNavigate();

  // get userId
  let id =location.state.userId;
  
   
  // Using useEffect for single rendering
  useEffect(() => {
      // Using fetch to fetch the api from 
      // flask server it will be redirected to proxy
      fetch("/admin/patient/getPatient/"+id).then((res) =>
          res.json().then((data) => {
              // Setting a data from api
              setData(data[0])
              console.log(data);
          })
         
      );
  }, []);


  let handleSubmit = async (e) => {

    e.preventDefault();
  
    const requestOptions = {
      method: "POST",
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(data)
  }

  fetch('/admin/patient/updatePatient/'+id, requestOptions)
      .then(res => res.text())
      .then(text => console.log(text))
      .then(data =>{
          navigate("/admin/patient")
      }).catch(err => console.log(err))

    }


function handleChange(event) {
  const { name, value } = event.target;

  setData(prevValue => {
    return {...prevValue,
      [name]: value
    };
  });

}

if(data == null){
  return <p></p>
}
return (<section className="vh-200 gradient-custom">
<div className="container py-5 h-100">
  <div className="row justify-content-center align-items-center h-100">
    <div className="col-12 col-lg-9 col-xl-7">
      <div className="card shadow-2-strong card-registration">
        <div className="card-body p-4 p-md-5">
          <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Edit Form</h3>
            <form onSubmit={handleSubmit}>
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
            
                <div class="col-md-4 mb-4">

                  <div class="form-outline">
                    <input
                      id="givId"
                      type="text"
                      value={data.govId}
                      name ="govId"
                      className="form-control form-control-lg" 
                      onChange={handleChange}
                    />
                    <label className="form-label" for="govId">Gov ID</label>
                  </div>
                </div>
                <div className="col-md-4 mb-4">

                  <div class="form-outline">
                    <input
                      id="password"
                      type="text"
                      value={data.password}
                      name ="password"
                      className="form-control form-control-lg" 
                      onChange={handleChange}
                    />
                    <label className="form-label" for="password">Password</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
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
            
                <div class="col-md-6 mb-4">
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
                <div className="col-md-6 mb-4">
                  <div class="form-outline">
                    <input
                      id="birthday"
                      type="date"
                      value={data.dateOfBirth}
                      name = "dateOfBirth"
                      className="form-control form-control-lg" 
                      onChange={handleChange}
                    />
                    <label className="form-label" for="birthday">DateOfBirth</label>
                  </div>
                </div>
            
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input
                      id="bloodType"
                      type="text"
                      value={data.bloodType}
                      name ="bloodType"
                      className="form-control form-control-lg" 
                      onChange={handleChange}
                    />
                    <label className="form-label" for="bloodType">Blood Type</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div class="form-outline">
                    <input
                      id="emergencyNo"
                      type="text"
                      value={data.emergencyNo}
                      name = "emergencyNo"
                      className="form-control form-control-lg" 
                      onChange={handleChange}
                    />
                    <label className="form-label" for="emergencyNo">Emergency Contact</label>
                  </div>
                </div>
            
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
                    <label className="form-label" for="contactNo">Contact Number</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div class="form-outline">
                    <input
                      id="email"
                      type="email"
                      value={data.email}
                      name = "email"
                      className="form-control form-control-lg" 
                      onChange={handleChange}
                    />
                    <label className="form-label" for="email">Email</label>
                  </div>
                </div>
            
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input
                      id="address"
                      type="text"
                      value={data.address}
                      name ="address"
                      className="form-control form-control-lg" 
                      onChange={handleChange}
                    />
                    <label className="form-label" for="address">Address</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div class="form-outline">
                  <input
                      id="maritalStatus"
                      type="text"
                      value={data.maritalStatus}
                      name ="maritalStatus"
                      className="form-control form-control-lg" 
                      onChange={handleChange}
                    />
                    <label className="form-label" for="maritialStatus">Marital Status</label>
                  </div>
                </div>
            
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input
                      id="regDate"
                      type="text"
                      value={data.registrationDate}
                      name ="registrationDate"
                      className="form-control form-control-lg" 
                      onChange={handleChange}
                    />
                    <label className="form-label" for="regDate">Registration Date</label>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2">
                <input className="buttonADD" type="submit" value="Submit" />
              </div>
            </form>
           </div>
         </div>
      </div>
    </div>
  </div>
</section>
);
}

 export default EditPatient; 
  

  
      