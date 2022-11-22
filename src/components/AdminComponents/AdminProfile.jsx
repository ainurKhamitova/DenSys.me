import React from "react";


function AdminProfile(){
    return <div>
        <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img src = {require('./avatar7.png')} alt="Admin" className="rounded-circle adminImg" />
                            <div className="mt-3">
                                <h4>John Doe</h4>
                                <p className="text-secondary mb-1">Admin</p>
                                <p className="text-muted font-size-sm">Hospital Name</p>
                                <button className="btn btn-primary profileBtn">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Admin admin
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Hospital Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     Lorem Ipsum
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Telephone Number</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      .....
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      admin@hospital.com
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Office</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      101
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-info ">Edit</a>
                    </div>
                  </div>
                </div>
            </div>   
        </div>
    </div>
</div>
               
    
}
export default AdminProfile;