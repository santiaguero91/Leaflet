import React, { useEffect, useState } from "react";
import { MainContainer, UsersListDiv } from "./DashboardADminStyle";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoadingIMG } from "../LateralItemsView/LateralItemsStyle";

const DashboardADmin = () => {
  const allUsers = useSelector((state) => state.users);
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [usersPerPage, setUsersPerPage] = useState(5);
  const indexOfLastUser = currentPage * usersPerPage;
  // eslint-disable-next-line
  const indexOfFirstMarker = indexOfLastUser - usersPerPage;
  const currentUsers = allUsers.slice(0, currentPage * usersPerPage);

  const addPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <MainContainer>
      <h3>Lista de Usuarios</h3>
      <InfiniteScroll
        dataLength={currentUsers.length}
        next={() => addPage()}
        hasMore={true}
        loader={
          allUsers.length >= currentUsers.length ? (
            ""
          ) : (
            <LoadingIMG>
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </LoadingIMG>
          )
        }
      >
        <UsersListDiv>
        {currentUsers.map((el) => {
          return (
            <UserCard
              key={el._id}
              id={el._id}
              family_name={el.family_name}
              email={el.email}
              picture={el.picture}
              admin={el.admin}
            />
          );
        })}
        </UsersListDiv>
      </InfiniteScroll>
    </MainContainer>
  );
};

export default DashboardADmin;
