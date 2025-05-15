import { Link } from "react-router";

function NavBar() {
    return <>
        <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
            <a className="navbar-brand" href="#">REDUX CRUD</a>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    {/* <a className="nav-link" href="#scrollspyHeading1">Home</a> */}
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    {/* <a className="nav-link" href="#scrollspyHeading2">Add</a> */}
                    <Link to="/addUser" className="nav-link">Add</Link>
                </li>
            </ul>
        </nav>
    </>
}

export default NavBar;