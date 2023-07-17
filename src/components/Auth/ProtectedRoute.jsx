import { useAuth } from "../../components/Auth/authContext"
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) => {
  const {user, loading} = useAuth()

  if(loading) return <h1>loading</h1>
  if(!user) return <Navigate to="/Inicio" />

  return <>{children}</>
  
};
export default ProtectedRoute;