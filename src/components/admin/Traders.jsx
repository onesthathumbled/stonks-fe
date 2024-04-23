import React, { useState } from "react";
import '../../styles/admin/Traders.css'
import Current from "./Current";
import Pending from "./Pending";
import NewUser from "./NewUser";

const Traders = () => {
  
  const [ TraderClass, setTraderClass ] = useState('current')
  const [ addNewUser, setAddNewUser ] = useState(false)

  const handleOnClick = (e) => {

    const pending = document.getElementById('pending');
    const current = document.getElementById('current');

    if (e.target === pending ) {
      pending.style.color = '#EEB80B'
      current.style.color = 'white'
      setTraderClass('pending');
    }
    else if (e.target === current) {
      pending.style.color = 'white'
      current.style.color = '#EEB80B'
      setTraderClass('current');
    }
  };

  const handleAddNewUserClick = (e) => {
    e.preventDefault();
    if (addNewUser === false) {
      setAddNewUser(true);
    }
    else {
      setAddNewUser(false);
    }
  }

  return (
    <div className="Traders-Main-Container">
      <div className="Traders-Body-Container">
        <div className="Traders-Left-Title-Container">
          <div className="Traders-Left-Options">
            <button className="Traders-Options-Button yellow" id = 'current' value="Current Users" onClick={handleOnClick}>Current Users</button>
            <button className="Traders-Options-Button" id = 'pending' value="Pending Users" onClick={handleOnClick}>Pending Users</button>
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
                ) : (
                    <div className = "Traders-Table-Holder">
                        <Pending />
                    </div>
                )
            }
        </div>
      </div>

      <div className="Traders-Body-Right-Container">
            {
              addNewUser === true ? (
                <NewUser />
              ):
              (
                <div></div>
              )
            }
      </div>
    </div>
  );
};

export default Traders;
