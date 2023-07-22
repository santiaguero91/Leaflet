import { useState } from "react";
import { useAuth } from "./authContext";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const { loginWithGoogle, logout } = useAuth();
  const navigate = useNavigate();

  const logOut = async () => {
    await logout();
  };

  const handleGoogleSignIn = async () => {
    await loginWithGoogle();
    navigate("/")
  };

  return (
    <div>
        <div>
          <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
    </div>
  );
}