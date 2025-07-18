import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router"

export default function NavBar() {
    const navigatar = useNavigate();
    const logOut = () => {
        signOut(auth)
            .then(() => {
                navigatar("/");
            })
            .catch((err) => {
                toast.error(err.code);
            });
    };
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/dashboard'}><h3>Mantra</h3></Link>
                    <form className="d-flex">
                        <ul className="navbar-nav d-flex flex-row align-items-center w-100 justify-content-between">
                            <div className="d-flex">
                                <li className="nav-item me-3">
                                    <Link className="nav-link" aria-current="page" to={'/dashboard'}>View User</Link>
                                    {/* <a className="nav-link" aria-current="page">View User</a> */}
                                </li>
                                <li className="nav-item me-3">
                                    <Link to="/add" className="nav-link">Add Data</Link>
                                </li>
                                <li className="nav-item me-3">
                                    <button className="btn btn-success" onClick={logOut}>Log Out</button>
                                </li>
                            </div>
                        </ul>
                    </form>
                </div>
            </nav>

            <ToastContainer />
        </div>
    )
}
