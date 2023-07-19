import React, { useEffect, useState } from "react";
import { MainContainer } from "./DashboardADminStyle";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";

const DashboardADmin = () => {
    const allUsers = useSelector((state) => state.users);
    
    const ver =()=>{
        console.log(allUsers);
    }

  return (
    <MainContainer>
      <h3>Lista de Usuarios</h3>
      <button onClick={()=>ver()}>VER USERS</button>
      {
        allUsers.map((el)=>{
            return(
                <UserCard 
                key={el._id}
                email={el.email}
                />
            )
        })
      }
    </MainContainer>
  );
};

export default DashboardADmin;