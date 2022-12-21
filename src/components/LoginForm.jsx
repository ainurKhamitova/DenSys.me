import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function LoginForm(props){

    const [id, setID] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState (false);
    const navigate = useNavigate();
    const [role, setRole] = useState('');

    function handleSubmit(event) {
        
        event.preventDefault();
        
        if(role === "admin"){
            const admin = {id: "admin", password: "12345"};

            if(admin.id === id && admin.password === password){
                props.state(true);
                navigate("/admin");
            }else{
                props.state(false);
                setError(true);
                setPassword("");
                setID("")
            }
        } 
        
        if(role === 'doctor'){
            fetch("/admin/doctor/getDoctor/"+ id ).then((res) =>
            res.json().then((data) => {
                console.log(data)
              if(data[0].password === password){
                props.state(true);
                navigate("/doctor", {      state: {
                    
                    user: data[0]
                }})
              }else{
                props.state(false);
                setError(true);
                setPassword("");
                setID("")
              }
            }))
        }

        if(role === 'patient'){
            fetch("/admin/patient/getPatient/"+ id ).then((res) =>
            res.json().then((data) => {
              if(data[0].password === password){
                props.state(true);
                navigate("/patient", {      state: {
                    user: data[0]
                }})
              }else{
                props.state(false);
                setError(true);
                setPassword("");
                setID("")
              }
            }))
        }
    }
   
      
    
    
    return  <form onSubmit = {handleSubmit}>  
            <p>Please login to your account</p> 

            <div className="form-floating mb-4">
            <select className="custom-select category" id="inputGroupSelect01" value={role} name ="category" onChange={(e) => setRole(e.target.value)} >
                <option value="Select">Select</option>
                <option value="admin">Admin</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
            </select>
            </div>
            <div className="form-floating mb-4">
                <input type="id" value={id} onChange={(e) => setID(e.target.value)} id="adminID" className="form-control" placeholder="ID" required autofocus />
                <label className="form-label" for="adminID">ID</label>
            </div>
            
            <div className="form-floating  mb-4">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  id="password" className="form-control" placeholder="password" required autofocus />
                <label className="form-label" for="password">Password</label>
            </div>
            <div style={{display: error ? 'block' : 'none'}} class="alert alert-danger" role="alert">
                Incorrect ID or password. Please, try again.
            </div>
            <div className="text-center pt-1 mb-5 pb-1">      
                <button className="buttonADD" type="submit">Login</button>
                <div><a className="text-muted" href="#!">Forgot password? </a></div>
            </div>
        </form>
  
}
export default LoginForm;