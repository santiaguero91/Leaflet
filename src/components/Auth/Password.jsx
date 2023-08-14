import { useDispatch, useSelector } from "react-redux";
import { Passmenu } from "./PasswordStyle";
import { useEffect, useState } from "react";
import { getUsers, putUser } from "../../redux/actions";

export function Password({menu}) {
    const allUsers = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
      }, []);

    const [input, setInput] = useState({
        id: allUsers[0]._id,
        family_name: allUsers[0].family_name,
        email: "",
        picture: allUsers[0].picture,
        admin: allUsers[0].admin,
      });

      const handleChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(putUser(input))
        menu()
      };

         const ver =()=>{
          console.log(input);
          console.log(allUsers);          
        }
        
        return (
            <div>
        <Passmenu>
        <button onClick={()=>ver()}>VER</button>
          <form className="form">
          <label>Contraseña:</label>
          <input
            id="email"
            type="text"
            value={input.email}
            name="email"
             onChange={(e) => handleChange(e)} 
            title="email"
          />
           {input.email !== "" &&  (
            <button
              id="submitButton"
              onClick={(e) => handleSubmit(e)}
              type="submit"
            >
              Cambiar
            </button>
          )
          }
          </form>
        </Passmenu>
    </div>
  );
}