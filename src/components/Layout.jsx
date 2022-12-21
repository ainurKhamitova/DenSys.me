import { Outlet} from "react-router-dom";

const Layout = () => {
  return (<>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Menu</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href = "/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href = "/appointment"> Make an Appointment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href = "/services"> List of services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href = "/login"> Login</a>
        </li>
      </ul>
    </div>
  </div>
  <hr/>
  </nav>
  <Outlet />
    </>
  )
};

export default Layout;