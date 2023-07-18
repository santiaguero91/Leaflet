import { useState } from "react";
import { useAuth } from "./authContext";
import { Link, useNavigate } from "react-router-dom";

export function Formulario() {
  const { signup, loginWithGoogle, user, logout } = useAuth();

  const [userid, setUserid] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(userid.email, userid.password);
    setError("");
    try {
      await signup(userid.email, userid.password);
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/internal-error") {
        setError("Correo Invalido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("Correo ya esta en uso");
      }
      if (error.code === "auth/weak-password") {
        setError("Contraseña debe tener al menos 6 caracteres.");
      }
      console.log(error.code);
    }
  };
  

  const logOut = async () => {
    await logout();
  };

  const handleGoogleSignIn = async () => {
    await loginWithGoogle();
  };

  return (
    <div>
      {error && <p>{error}</p>}
      {user ? (
        <p>Usuario logeado: {user.email}</p>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={(e) =>
                  setUserid({ ...userid, email: e.target.value })
                }
                placeholder="email@company.com"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={(e) =>
                  setUserid({ ...user, password: e.target.value })
                }
                placeholder="*************"
              />
            </div>

            <button>Register</button>
          </form>

          <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
      )}
      <Link to="/home">Login</Link>
      <h5 onClick={()=>logOut()}>LogOut</h5>
    </div>
  );
}
