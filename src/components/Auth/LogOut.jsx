import { useAuth } from "./authContext";
import React from "react";

const Logout = () => {
  const { logout } = useAuth();

  return (
    <div
      className="Li"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Cerrar sesion
    </div>
  );
};

export default Logout;