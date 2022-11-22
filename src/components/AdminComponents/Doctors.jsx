import React from "react";
import DoctorTable from "./DoctorReg/DoctorTable";
import { useNavigate } from "react-router-dom";

function Doctors(){
    const navigate = useNavigate();
    function handleClick(){
        navigate("/admin/doctor/doctorRegisteration")
    }
    return <div> <button onClick = {handleClick}>Add Doctor</button>
    <DoctorTable />
</div>
}

export default Doctors;