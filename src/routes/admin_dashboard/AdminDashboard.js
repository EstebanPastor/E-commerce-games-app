import { Link } from "react-router-dom";
import "./admindashboard.css";

function AdminDashboard() {
  return (
    <div className="d-flex" id="sidebar-wrapper">
      <div className="bg-white">
        <div className="sidebar-heading bg-black text-center py-4 primary-text fs-4 fw-bold text-uppercas border-bottom">
          <h1>¡Welcome admin!</h1>
        </div>
        <div className="list-group list-group-flush my-2">
          <Link
            to="/"
            className="list-group-item list-group-item-action bg-black second-text active"
          >
            <i className="fas fa-home me-2"></i>
            Admin dashboard
          </Link>
          <Link
            to="/store"
            className="list-group-item list-group-item-action bg-black second-text fw-bold"
          >
            <i className="fas fa-store me-2"></i>
            Store management
          </Link>
          <Link
            to="/games"
            className="list-group-item list-group-item-action bg-black second-text fw-bold"
          >
            <i className="  fab fa-fantasy-flight-games me-2"></i>
            Games
          </Link>
          <Link
            to="/games-sold"
            className="list-group-item list-group-item-action bg-black second-text fw-bold"
          >
            <i className="fas fa-plus me-2"></i>
            Games sold
          </Link>
          <Link
            to="/users"
            className="list-group-item list-group-item-action bg-black second-text fw-bold"
          >
            <i className="fas fa-user-alt me-2"></i>
            Users registered
          </Link>
          <Link
            to="/users-banned"
            className="list-group-item list-group-item-action bg-black second-text fw-bold"
          >
            {" "}
            <i className="fas fa-user-alt-slash me-2"></i>
            Users banned
          </Link>
          <Link
            to="/"
            className="list-group-item list-group-item-action text-danger second-text fw-bold"
          >
            Logout
          </Link>
        </div>
      </div>
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
          <div className="d-flex align-items-center">
            <i
              className="fas fa-align-left primary-left fs-4 me-3"
              id="menu-toggle"
            ></i>
            <h2 className="fs-2 m-0">Admin</h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item-dropdown">
                  <Link
                    className="nav-link dropdown-toggle second-text fw-bold"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user me-2"></i> Admin
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-aria-labelledby="navbarDropdown"
                    l
                  ></ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
      </div>
    </div>
  );
}

export default AdminDashboard;
