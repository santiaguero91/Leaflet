import { useState } from "react";
import { useAuth } from "./authContext";
import { Link, useNavigate } from "react-router-dom";

export function Formulario() {
  const { loginWithGoogle, user, logout } = useAuth();
  const navigate = useNavigate();

  const logOut = async () => {
    await logout();
  };

  const handleGoogleSignIn = async () => {
    await loginWithGoogle();
    navigate("/home")
  };

  return (
    <div>
        <div>
          <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
      <h5 onClick={()=>logOut()}>LogOut</h5>
    </div>
  );
}
