import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { UserBtnDiv } from "./UserButtonStyled";
import { useDispatch } from "react-redux";
import { useAuth } from "./authContext";
import Logout from "./LogOut";
import Modal from "react-modal";
import DashboardADmin from "./DashboardADmin";

const UserButton = () => {
  const { user } = useAuth();
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(true);
  const [modalActive, setModalActive] = useState(false);

  useEffect( () => {
  },[dispatch,user])

const ver =()=>{
  console.log(user);
}

const modaltyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex:" 2000 !important" ,
  },
};

  useEffect( () => {
    console.log();
  },)

  return (
    <UserBtnDiv>
      <div onClick={() => setActive(!active)}>
        {user ? (
          <img className="profileImg" src={user.photoURL} alt={user.displayName} />
        ) : (
          <HiOutlineUserCircle size={45} />
        )}
      </div>
      <div className="Menu" style={active ? null : { display: "none" }}>
        {user ? (
          <ul className="Ul">
            <div className="profile">
              <h3 className="profileName">{user.name}</h3>
            </div>
            {
              admin === true ? 
              <div>
                <li>
                  <Link
                    className="Li"
                    to="/admin"
                    onClick={() => setActive(!active)}
                  >
                    Dashboard
                  </Link>
                </li> 
                <div className="Li" onClick={()=>{
                    setModalActive(!modalActive);
                  }}>MODAL
                <Modal
                  isOpen={modalActive}
                  onRequestClose={() => setModalActive(false)}
                  ariaHideApp={false}
                  style={modaltyle}
                >
                  <DashboardADmin/>
                </Modal>
                
                </div>
                <li>
                </li>
              </div>
            :
              null
            }
            
            <li>
               <Logout /> 
            </li>
          </ul>
        ) : (
          <ul className="Ul">
            <li className="Li">
              <Login />
            </li>
          </ul>
        )}
      </div>
    </UserBtnDiv>
  );
};
export default UserButton;
