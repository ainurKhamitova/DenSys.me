import React  from "react";
import DoctorProfile from "../components/DoctorProfile";
import { useLocation, Navigate } from "react-router-dom";

function DoctorPage(props){
    const location = useLocation();
    let user = location.state.user;
   
    
    return <div> 
    <DoctorProfile user = {user} />
</div>
}
export default DoctorPage;
