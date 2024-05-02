import React, { useState } from "react";
import '../../styles/admin/ShowUserInfo.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import { useDispatch, useSelector } from "react-redux";
import { setUserInfoShowStatus, authenticateTrader, updateTrader, updateTraderPassword } from "../../features/auth/authSlice";


const ShowUserInfo = () => {
    const [editOption, setEditOption] = useState('info');

    const handleEditOptionOnClick = (e) => {
        const changeInfo = document.getElementById('changeInfo');
        const changePass = document.getElementById('changePass');

        if (e.target === changePass) {
            setEditOption('pass');
            changePass.style.color = '#EEB80B'
            changeInfo.style.color = 'white'
        }
        else if (e.target === changeInfo) {
            setEditOption('info')
            changeInfo.style.color = '#EEB80B'
            changePass.style.color = 'white'
        }
    }

    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.auth.pendingUserInfo;
    });
    const UserInfoShowStatus = useSelector((state) => state.auth?.UserInfoShowStatus);

    const handleEditButtonOnClick = () => {
        dispatch(setUserInfoShowStatus('edit'));

        setFormData(prevFormData => ({
            ...prevFormData,
            email: data.email,
            wallet: data.wallet,
            roles: data.roles
        }));
    }

    const [formData, setFormData] = useState({
        email: "",
        wallet: "",
        roles: ""
    });


    const [changePassData, setchangePassData] = useState({
        pass: "",
        confirmPass: ""
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handlePassOnChange = (e) => {
        const { name, value } = e.target;
        setchangePassData(prevChangePassData => ({
          ...prevChangePassData,
          [name]: value
        }));
    };

    const authenticateUser = (id) => {
        dispatch(authenticateTrader(id));
    };

    const UpdateTrader = (userId, userData) => {
        dispatch(updateTrader({ userId, userData }));
    };

    const ChangePass = (userId, userPass, userConfirmPass) => { // Receive userId as the first argument

        const userInfo = {
            id: userId,
            password: userPass
        }

        if (userPass === userConfirmPass) {
            dispatch(updateTraderPassword(userInfo));
        }
    };

    return (
        <div className="Show-User-Info-Main-Container">
            {
                UserInfoShowStatus === 'info'  || UserInfoShowStatus === 'edit'  ? (
                    <div className="Show-User-Info-Body-Container">
                        <div className = "Show-User-Title-Container">
                            <p className = "Show-User-Title">User Details</p>
                        </div>
                        <div className = "Show-User-Top-Container">
                            <AccountBoxIcon style={{ fontSize: "120px" }}/>
                            <div className = "Top-Info-Container">
                                <p className = "Top-Email"> {data.email} </p>
                                
                                    {
                                        data.status === false ? (
                                            <div className = "Status-Container">
                                                <PendingIcon className="Status-Icon-Pending"/>
                                                <p className = "Top-Status-Pending">Pending</p>
                                            </div>
                                        ):
                                        (
                                            <div className = "Status-Container">
                                                <CheckCircleIcon className="Status-Icon-Check"/>
                                                <p className = "Top-Status-Check">Authenticated</p>
                                            </div>
                                        )
                                    }
                            </div>

                            <div className = "Show-User-Buttons-Container">
                                <button className = "Approve-Button" onClick = {handleEditButtonOnClick}>Edit User Details</button>
                                {
                                    data.status === false ? (
                                        <form  className = 'Approve-Button-Form' onSubmit={() => authenticateUser(data.id)}>
                                            <button type = 'submit' className = "Approve-Button">Authenticate</button>
                                        </form>
                                    ): 
                                    (
                                        <span />
                                    )
                                }
                            </div>
                        </div>

                        {
                            UserInfoShowStatus === 'edit' ? (
                                <div className="Edit-User-Container">
                                    <div className = "Edit-User-Title">
                                        <button id= 'changeInfo' className = "Change-Option Active" onClick={handleEditOptionOnClick}>Change Information</button>
                                        <button id= 'changePass' className = "Change-Option" onClick={handleEditOptionOnClick}>Change Password</button>
                                    </div>

                                    <div className = "Edit-Form-Container">
                                        {
                                            editOption === 'info' ? (
                                                <form className="Edit-Info-Container" onSubmit={() => UpdateTrader(data.id, formData)}>
                                                    {/* <div className = "Edit-Input-Container">
                                                        <p className = "Edit-Form-Label">Email</p>
                                                        <input className = "Edit-Form-Input" placeholder = "Email" name= 'email' value={formData.email} onChange={handleOnChange} required/>
                                                    </div> */}
                                                    <div className = "Edit-Input-Container">
                                                        <p className = "Edit-Form-Label">Wallet</p>
                                                        <input className = "Edit-Form-Input" placeholder = "Email" name= 'wallet' value={formData.wallet} onChange={handleOnChange} required/>
                                                    </div>
                                                    <div className = "Edit-Input-Container">
                                                        <p className = "Edit-Form-Label">Role</p>
                                                            {
                                                                data.roles === 0 ? (
                                                                    <select className = "Edit-Dropdown" id="roles" name= 'roles' onChange={handleOnChange} required>
                                                                        <option value="0">Trader</option>
                                                                        <option value="1">Admin</option> 
                                                                    </select>
                                                                ):
                                                                (
                                                                    <select className = "Edit-Dropdown" id="roles" onChange={handleOnChange} required>
                                                                        <option value="1">Admin</option> 
                                                                        <option value='0'>Trader</option>
                                                                    </select>
                                                                )
                                                            }
                                                    </div>
                                                    <div className = "Edit-Button-Container">
                                                        <button type = 'Submit' className = "Edit-Button">Update</button>
                                                    </div>
                                                </form>
                                            ): editOption === 'pass' ?
                                            (
                                                <form className="Edit-Info-Container" onSubmit={() => {
                                                    ChangePass(data.id, changePassData.pass, changePassData.confirmPass); // Pass both userId and changePassData
                                                  }}>
                                                    <div className="Edit-Input-Container">
                                                      <p className="Edit-Form-Label">New Password</p>
                                                      <input className="Edit-Form-Input" name='pass' value={changePassData.pass} onChange={handlePassOnChange} type="password" required />
                                                    </div>
                                                    <div className="Edit-Input-Container">
                                                      <p className="Edit-Form-Label">Confirm Password</p>
                                                      <input className="Edit-Form-Input" name='confirmPass' value={changePassData.confirmPass} onChange={handlePassOnChange} type="password" required />
                                                    </div>
                                                    <div className="Edit-Button-Container">
                                                      <button type='submit' className="Edit-Button">Update</button>
                                                    </div>
                                                </form>
                                            ) :
                                            null
                                        }
                                    </div>
                                </div>
                            ) : UserInfoShowStatus === 'info' ? (
                                <div className="Show-User-Container">
                                    <div className="Show-User-Body">
                                        <div className = "Show-User-Info-Container">
                                            <p className="Show-User-Label">Email</p>
                                            <p className="Show-User-Value">{data.email}</p>
                                        </div>

                                        <div className = "Show-User-Info-Container">
                                            <p className="Show-User-Label">Wallet</p> 
                                            <p className="Show-User-Value">{parseFloat(data.wallet).toFixed(2)}</p>
                                        </div>

                                        <div className = "Show-User-Info-Container">
                                            <p className="Show-User-Label">Role</p>
                                            {
                                                    data.roles === 0 ? (
                                                        <p className="Show-User-Value">Trader</p>
                                                    ):
                                                    (
                                                        <p className="Show-User-Value">Admin</p>
                                                    )
                                                }
                                        </div>

                                        <div className = "Show-User-Info-Container">
                                            <p className="Show-User-Label">Member Since:</p>
                                            <p className="Show-User-Value">{new Date(data.created_at).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }


                    </div>
                ):
                (
                    <div />
                )
            }

        </div>
    );
};

export default ShowUserInfo;
