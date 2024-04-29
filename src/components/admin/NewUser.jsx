import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import '../../styles/admin/NewUser.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { addNewUser } from "../../features/auth/authSlice";

const NewUser = () => {

    const dispatch = useDispatch();
    const UserInfoShowStatus = useSelector((state) => state.auth?.UserInfoShowStatus);


    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value
        }));
    };

    const handleSubmit = () => {
        if (formData.password === formData.confirmPassword) {
        dispatch(addNewUser(formData))
            .then((result) => {
            // Handle successful response here
            console.log("New user added successfully:", result);
            // Reset form data
            setFormData({
                email: "",
                password: "",
                confirmPassword: ""
            });
            })
            .catch((error) => {
            // Handle error from async thunk
            setError(error);
            });
        } else {
        setError("Passwords do not match.");
        }
    };

  return (
    <div className="New-User-Main-Container">
                <div className = "Form-Container">

                    <div className="Image-Container">
                        <AccountBoxIcon style={{ fontSize: "120px" }} />
                    </div>

                    <div className="New-User-Title-Container">
                        <span className="New-User-Title">Stonks Account Creation</span>
                    </div>

                    <div className="Note-Container"> 
                        <p className="Note-Message">
                            Note: When creating a new user, please note that by default, they will be classified as a trader. This designation allows them to access trading functionalities within our system. However, remember that user profiles can be updated at any time using the edit user feature, granting flexibility to adjust their roles and permissions as needed.
                        </p>
                    </div>

                    <div className="New-User-Body-Container">
                        <form onSubmit={handleSubmit} className="New-User-Form">

                            <input className="Input-Form" type="text" placeholder="Email"
                                name="email" value={formData.email} onChange={handleChange} required/>

                            <input className="Input-Form" type="password" placeholder="Password"
                                name="password" value={formData.password} onChange={handleChange} required/>

                            <input className="Input-Form" type="password" placeholder="Confirm Password"
                                name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required/>

                            <button type="submit" className="Button-Form">Submit</button>
                                {
                                    error !== null ? (
                                        <p className="add-error">{error}</p>
                                    ):
                                    (
                                        <p></p>
                                    )
                                }
                        </form>
                    </div>
                </div>
    </div>
  );
};

export default NewUser;

