import React  from "react";
import AdminProfile from "../components/AdminComponents/AdminProfile";
import { Navigate } from "react-router-dom";

function AdminPage(props){
    if(!props.isLoggedIn){
        return <Navigate to="/" replace />;
    }
    
    return <div> 
    <AdminProfile />
</div>
}
export default AdminPage;