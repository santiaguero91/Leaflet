import { useSelector } from "react-redux";
import { useAuth } from "../../components/Auth/authContext"
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) => {
  const {user, loading} = useAuth()
  const admin = useSelector((state) => state.admin);

  
  if(loading) return <h1>loading</h1>
  if(!admin) return <Navigate to="/" />

  return <>{children}</>
};
export default ProtectedRoute;