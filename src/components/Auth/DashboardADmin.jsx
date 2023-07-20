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
                id={el._id}
                family_name={el.family_name}
                email={el.email}
                picture={el.picture}
                admin={el.admin}
                />
            )
        })
      }
    </MainContainer>
  );
};

export default DashboardADmin;