// import "./EditFrom.css";
import NavBar from "../Components/NavBar";
export default function EditForm() {
    return (
        <>
            <NavBar />
            <div className="form-wrapper">
                <form className="form-container">
                    <h2 className="form-title">User Registration</h2>

                    <div className="input-group">
                        <input type="text" required />
                        <label>First Name</label>
                    </div>

                    <div className="input-group">
                        <input type="text" required />
                        <label>Last Name</label>
                    </div>

                    <div className="input-group">
                        <input type="email" required />
                        <label>Email</label>
                    </div>

                    <div className="input-group">
                        <input type="password" required />
                        <label>Password</label>
                    </div>

                    <div className="checkbox-group">
                        <label>Hobbies</label>
                        <div className="checkbox-options">
                            {["Learning", "Eating", "Running"].map((hobby) => (
                                <label key={hobby}>
                                    <input type="checkbox" value={hobby} checked={userData.hobbies.includes(hobby)} onChange={(e) => {
                                        const isChecked = e.target.checked;
                                        setUserData((prevData) => ({
                                            ...prevData,
                                            hobbies: isChecked
                                                ? [...prevData.hobbies, hobby]
                                                : prevData.hobbies.filter((h) => h !== hobby),
                                        }));
                                    }}
                                    />
                                    {hobby}
                                </label>
                            ))}
                        </div>
                    </div>


                    <div className="select-group">
                        <label>Gender</label>
                        <select required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
                <ToastContainer />
            </div>

        </>
    );
}
