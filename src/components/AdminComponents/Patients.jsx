import React from "react";
import PatientTable from "./PatientReg/PatientTable";
import { useNavigate } from "react-router-dom";

function Patients(){
    const navigate = useNavigate();
    function handleClick(){
        navigate("/admin/patient/patientRegisteration")
    }
    return <div> <button className="buttonADD" onClick = {handleClick}>Add Patient</button>
    <PatientTable />
</div>
}

export default Patients;