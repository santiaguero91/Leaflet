import { useState } from "react";
import { MainContainerDiv } from "./UserCardStyle";
import { useDispatch } from "react-redux";
import { putUser } from "../../redux/actions";

const UserCard = ({ id, family_name, email, picture, admin}) => {
  const dispatch = useDispatch();

   const [input, setInput] = useState({
    id: id,
    name: family_name,
    picture: picture,
    email: email,
    admin: !admin
  }); 
  const changeAdminstate =()=>{
    dispatch(putUser(input))
    setInput(
      {
        id: input.id,
        name: input.name,
        picture: input.picture,
        email: input.email,
        admin:!input.admin
      }
    )
}


  return (
    <MainContainerDiv>
        <p>{email}</p>
        <button onClick={()=>changeAdminstate()}>{admin===true ? <p>admin</p>: <p>user</p>}</button>
    </MainContainerDiv>
  );
};

export default UserCard;