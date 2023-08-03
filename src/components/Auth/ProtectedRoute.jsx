import { useSelector } from "react-redux";
import { useAuth } from "../../components/Auth/authContext"
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) => {
  const {user, loading} = useAuth()
  const allUsers = useSelector((state) => state.users);

  
  if(loading) return <h1>loading</h1>
  if(!user) return <Navigate to="/" />
  if(user?.displayName !== allUsers[0]?.family_name) return <Navigate to="/" />

  return <>{children}</>
};
export default ProtectedRoute;