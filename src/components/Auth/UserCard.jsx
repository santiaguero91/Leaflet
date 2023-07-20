import { MainContainerDiv } from "./UserCardStyle";

const UserCard = ({ id, email,admin}) => {
  return (
    <MainContainerDiv>
        <p>{email}</p>
        <button>{admin===true ? <p>admin</p>: <p>user</p>}</button>
    </MainContainerDiv>
  );
};

export default UserCard;