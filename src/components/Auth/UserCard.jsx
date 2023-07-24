import { useState } from "react";
import { AdminButton, MailDiv, MainContainerDiv, UserButton } from "./UserCardStyle";
import { useDispatch } from "react-redux";
import { putUser } from "../../redux/actions";

const UserCard = ({ id, family_name, email, picture, admin }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    id: id,
    name: family_name,
    picture: picture,
    email: email,
    admin: !admin,
  });
  const changeAdminstate = () => {
    dispatch(putUser(input));
    setInput({
      id: input.id,
      name: input.name,
      picture: input.picture,
      email: input.email,
      admin: !input.admin,
    });
  };

  return (
    <MainContainerDiv>
      <MailDiv>{email}</MailDiv>
      {admin === true ? (
        <AdminButton onClick={() => changeAdminstate()}>
          <p>admin</p>
        </AdminButton>
      ) : (
        <UserButton onClick={() => changeAdminstate()}>
          <p>user</p>
        </UserButton>
      )}
    </MainContainerDiv>
  );
};

export default UserCard;
