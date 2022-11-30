import React, {useState} from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import DoctorList from "./components/AppointmentComponents/DoctorList";
import MakeAppointment from "./components/AppointmentComponents/MakeAppointment";
import AdminPage from "./pages/AdminPage"
import AdminPageMenu from "./components/AdminComponents/AdminPageMenu";
import PatientRegistration from "./components/AdminComponents/PatientReg/PatientRegistration";
import Patients from "./components/AdminComponents/Patients";
import EditPatient from "./components/AdminComponents/PatientReg/EditPatient";
import Doctors from "./components/AdminComponents/Doctors";
import EditDoctor from "./components/AdminComponents/DoctorReg/EditDoctor";
import DoctorRegistration from "./components/AdminComponents/DoctorReg/DoctorRegestration";



function App(){

  const [isLoggedIn, setisLoggedIn] = useState(null);
 

  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginPage state ={setisLoggedIn}  />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/doctorList" element={<DoctorList />} />
        <Route path="/makeAppointment" element={<MakeAppointment />} />
      </Route>
      <Route path="/admin" element={<AdminPageMenu />}>
        <Route index element={<AdminPage isLoggedIn = {isLoggedIn}/>}  />
        <Route path="/admin/patient" element={<Patients />} />
        <Route path="/admin/patient/patientRegisteration" element={<PatientRegistration />} />
        <Route path="/admin/patient/editPage" element={<EditPatient />} />
        <Route path="/admin/doctor" element={<Doctors />} />
        <Route path="/admin/doctor/doctorRegisteration" element={<DoctorRegistration />} />
        <Route path="/admin/doctor/editPage" element={<EditDoctor />} />
      </Route>
      
      
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  </BrowserRouter>)
}

export default App;