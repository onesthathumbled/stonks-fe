import React, { useState } from "react";
import '../../styles/admin/Traders.css'
import Current from "./Current";
import Pending from "./Pending";
import Admins from "./Admins";
import NewUser from "./NewUser";
import ShowUserInfo from "./ShowUserInfo";
import { setUserInfoShowStatus } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Traders = () => {
  
  const [ TraderClass, setTraderClass ] = useState('current')
  const [ addNewUser, setAddNewUser ] = useState(false)
  const dispatch = useDispatch();

  const handleOnClick = (e) => {

    const pending = document.getElementById('pending');
    const current = document.getElementById('current');
    const admin = document.getElementById('admin');

    if (e.target === pending ) {
      pending.style.color = '#EEB80B'
      current.style.color = 'white'
      admin.style.color = 'white'
      setTraderClass('pending');
      dispatch(setUserInfoShowStatus(null));
      setAddNewUser(false);
    }
    else if (e.target === current) {
      pending.style.color = 'white'
      current.style.color = '#EEB80B'
      admin.style.color = 'white'
      setTraderClass('current');
      dispatch(setUserInfoShowStatus(null));
      setAddNewUser(false);
    }
    else if (e.target === admin) {
      pending.style.color = 'white'
      current.style.color = 'white'
      admin.style.color = '#EEB80B'
      setTraderClass('admin');
      dispatch(setUserInfoShowStatus(null));
      setAddNewUser(false);
    }
  };



  const UserInfoShowStatus = useSelector((state) => state.auth?.UserInfoShowStatus);

  const handleAddNewUserClick = () => {
    if ( UserInfoShowStatus !== 'add' ) {
      dispatch(setUserInfoShowStatus('add'));
    }
    else {
      dispatch(setUserInfoShowStatus(null));
    }
  }

  return (
    <div className="Traders-Main-Container">
      <div className="Traders-Body-Container">
        <div className="Traders-Left-Title-Container">
          <div className="Traders-Left-Options">
            <button className="Traders-Options-Button yellow" id = 'current' value="Current Users" onClick={handleOnClick}>Current Users</button>
            <button className="Traders-Options-Button" id = 'pending' value="Pending Users" onClick={handleOnClick}>Pending Users</button>
            <button className="Traders-Options-Button" id = 'admin' value="Pending Users" onClick={handleOnClick}>Admin Users</button>
          </div>
          <div className="Traders-Add-Container">
            <button className="Add-User-Button" onClick={handleAddNewUserClick}>Add a New User</button>
          </div>
        </div>
        <div className="Traders-Table-Container">
            { 
                TraderClass === 'current' ? (
                    <div className = "Traders-Table-Holder">
                        <Current />
                    </div>
                ) : TraderClass === 'pending' ? (
                    <div className = "Traders-Table-Holder">
                        <Pending />
                    </div>
                ) : TraderClass === 'admin' ? (
                  <div className = "Traders-Table-Holder">
                      <Admins />
                  </div>
              ) : null
            }
        </div>
      </div>

      <div className="Traders-Body-Right-Container">
            {
              UserInfoShowStatus === 'add' ? (
                <NewUser />
              ):
              (
                <div></div>
              )
            }
            <ShowUserInfo />
      </div>
    </div>
  );
};

export default Traders;
