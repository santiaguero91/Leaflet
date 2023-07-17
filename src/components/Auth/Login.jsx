import { useState } from "react";
import { useAuth } from "./authContext";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
    const { login } = useAuth();

    const [user, setUser] = useState({
      email: "",
      password: "",
    });
  
    const [error, setError] = useState("");
     const navigate = useNavigate();   

    const handleSubmit = async (e) => {
      e.preventDefault();
      login(user.email, user.password);
      setError(""); 
      try {
        await signup(user.email, user.password);
        navigate("/");
      } catch (error) {
        if (error.code === "auth/internal-error"){
          setError("Correo Invalido");
        }
        if (error.code === "auth/email-already-in-use"){
          setError("Correo ya esta en uso");
        }
        if (error.code === "auth/weak-password"){
          setError("Contraseña debe tener al menos 6 caracteres.");
        }
        console.log(error.code);
      } 
    };


    return (
        <div>
          {error && /* <Alert message={error} */<p>{error}</p>}
    
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email">Email</label>
              <input type="email" onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email@company.com"
              />
            </div>
    
            <div>
              <label
                htmlFor="password"              >
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="*************"
              />
            </div>
    
            <button>
              Login
            </button>
          </form>
          <p>
            Already have an Account?
            <Link to="/login" className="text-blue-700 hover:text-blue-900">
              Login
            </Link>
          </p>
        </div>
      );
    }