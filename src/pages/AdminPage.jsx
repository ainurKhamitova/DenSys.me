import React  from "react";
import AdminProfile from "../components/AdminComponents/AdminProfile";
import { Navigate } from "react-router-dom";

function AdminPage(props){
    
    
    return <div> 
    <AdminProfile state = {props.state}/>
</div>
}
export default AdminPage;