import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";


function Services(){

    
    const [data, setdata] = useState([]);
    const navigate = useNavigate();
   
    
    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/services").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata(data)
            })
        );
    }, []);


 
   
        return ( <div>
            
            <table class="table table-hover ">
            <thead>
                <tr className="table-primary">
                <th scope="col">Service name</th>
                <th scope="col">Department name</th>
                <th scope="col">Contradiction</th>
                <th scope="col">Price (KZT)</th>
                </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                
                <tr key={item.serviceId}>
                    <td>{item.serviceId}</td>
                  <td>{item.deptname}</td>
                  <td>{item.contradictionId}</td>
                  <td>{item.price}</td>
                 </tr>
             ))}
            </tbody>
            </table>
      </div>
    );
    
   
}
export default Services;