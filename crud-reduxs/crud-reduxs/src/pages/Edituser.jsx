import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { updateUser } from "../Redux/Actions/crudAction";

const EditUser = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userEditData = location.state;

    const dispatch = useDispatch();

    console.log(userEditData);

    const [editUser, setEditUser] = useState({id : "", username : "", password :  ""});

    useEffect(() => {
        if(userEditData==null) {
            navigate('/');
        }

        setEditUser(userEditData);
    },[])

    const handleEditUser = (e) => {
        e.preventDefault();

        if(!editUser.username && !editUser.password) {
            alert("All Field are required...");
            return false;
        }

        dispatch(updateUser(editUser));

        navigate('/');
    }
    

    return <>
     <div className="d-flex justify-content-center">
            <div className="col-4">
                <h1>Edit User</h1>
                <form onSubmit={handleEditUser}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputUserName" className="form-label">Username</label>
                        <input type="text" className="form-control" value={editUser.username} onChange={(event) => setEditUser({...editUser, username : event.target.value})} placeholder="Enter username" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" value={editUser.password} onChange={(event) => setEditUser({...editUser, password : event.target.value})} placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-warning">Update</button>
                </form>
            </div>
        </div>
    </>
}

export default EditUser;