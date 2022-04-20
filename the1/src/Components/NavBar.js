import "./../Assets/Styles/offcanvas.css";

function NavBar() {
    const productTitle = "REACT - The1";

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{productTitle}</a>
                <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Notifications</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Switch account</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown01">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;