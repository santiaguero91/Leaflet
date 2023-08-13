import Home from "./Views/Home"
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"
import View2 from "./Views/View2";
import Details from "./Views/Details/Details";
import Landing from "./Views/Landing/Landing";
import HomeAdmin from "./Views/HomeAdmin/HomeAdmin";
import { AuthProvider } from "./components/Auth/authContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Mui from "./Views/MUI/MUI";


function App() {
  const location = useLocation();

  return (
    <AuthProvider>
    <AnimatePresence >
    <Routes location={location} key={location.pathname}> 
    <Route exact path="/" element={<Home />} /> 
    <Route exact path="/2" element={<View2 />} /> 
    <Route exact path="/login" element={<Landing />} /> 
    <Route exact path="/details/:id" element={<Details />} /> 
    <Route exact path="/mui" element={<Mui />} /> 
    
    <Route exact path="/admin" element={<ProtectedRoute><HomeAdmin/></ProtectedRoute>} /> 
    
    </Routes>
    </AnimatePresence>
    </AuthProvider>
  )
}

export default App
