import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/Actions/crudAction";
import { useNavigate } from "react-router";

const AddUser = () => {
    const [addUserFormData, setAddUserFormData] = useState({id: Math.floor(Math.random()*999999), username: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form Submit...");

        if (!addUserFormData.username && !addUserFormData.password) {
            alert("All field are required...");
            return false;
        }
        dispatch(addUser(addUserFormData));

        setAddUserFormData({ username: "", password: "" });

        navigate('/');
    }
    return <>
        <div className="d-flex justify-content-center">
            <div className="col-4">
                <h1>Add User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" value={addUserFormData.username} onChange={(event) => setAddUserFormData({ ...addUserFormData, username: event.target.value })} placeholder="Enter username" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={addUserFormData.password} onChange={(event) => setAddUserFormData({ ...addUserFormData, password: event.target.value })} placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
}

export default AddUser;