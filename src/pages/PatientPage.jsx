import React  from "react";
import PatientProfile from "../components/PatientProfile";
import { useLocation, Navigate } from "react-router-dom";

function PatientPage(props){
    const location = useLocation();
    let user = location.state.user;
    
    
    return <div> 
    <PatientProfile user = {user} />
</div>
}
export default PatientPage;