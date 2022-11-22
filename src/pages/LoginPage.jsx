import React from "react";
import LoginForm from "../components/LoginForm";
function LoginPage(props){
   
    return <div>
        <section className="h-100 gradient-form loginSection">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                 <div className="col-lg-6">
                                     <div className="card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <img className = "logoimg" src = {require('../images/lotus.jpeg')} />
                                            <h4 className="mt-1 mb-5 pb-1">Hospital</h4>
                                        </div>
                                         <LoginForm state = {props.state}/>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">We are more than just a company</h4>
                                            <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
        

}

export default LoginPage;