/* import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { UserBtnDiv } from "./UserButtonStyled";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "./authContext";
import Logout from "./LogOut";
import { Login } from "./Login";
import Modal from "react-modal";
import DashboardADmin from "./DashboardADmin";
import { getUsers, postUser } from "../../redux/actions";
import io from "socket.io-client";

const UserButton = () => {
  const { user } = useAuth();
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const allUsers = useSelector((state) => state.users);

  const socket = io("http://localhost:3001");
  socket.connect("connect", console.log("estamos online maestro"));

  socket.on("update", (data) => {
    dispatch(getUsers());
  });

  const ver = () => {
    console.log(user?.email, allUsers);
  };
  useEffect(() => {
    dispatch(getUsers());
    if (user && allUsers) {
      const findUser = allUsers?.filter((u) => u.email === user?.email);
      console.log(findUser, " alo");
      !findUser.length && dispatch(postUser({
        family_name: user?.displayName,
        email: user?.email,
        picture: user?.photoURL,
        admin: false,
      }));
    }
  }, [user]);

  const modaltyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: " 2000 !important",
    },
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(!modalIsOpen);
    console.log(modalIsOpen, "me activo");
  }

  const checkAdmin = () => {
    const findUser = allUsers.filter((u) => u.email === user.email);
    findUser && setAdmin(true);
  };



  return (
    <UserBtnDiv>
      <div onClick={() => setActive(!active)}>
        <button onClick={() => ver()}>VER</button>

        {user ? (
          <img
            className="profileImg"
            src={user.photoURL}
            alt={user.displayName}
            onClick={() => checkAdmin()}
          />
        ) : (
          <HiOutlineUserCircle size={45} />
        )}
      </div>

      <div className="Menu" style={active ? null : { display: "none" }}>
        {admin ? (
          <ul className="Ul">
            <div className="profile">
              <h3 className="profileName">{user?.name}</h3>
            </div>
            {admin === true ? (
              <div>
                <li>
                  <Link className="Li" to="/admin">
                    Modo Admin
                  </Link>
                </li>
                <div
                  className="Li"
                  onClick={() => {
                    openModal();
                  }}
                >
                  Usuarios
                </div>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={modaltyle}
                >
                  <button onClick={closeModal}>X</button>
                  <DashboardADmin />
                </Modal>
                <li></li>
              </div>
            ) : null}

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
 */