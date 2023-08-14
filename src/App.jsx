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
import { useDispatch } from "react-redux";
import { getMarkers } from "./redux/actions";
import { useEffect } from "react";
import ModoAdmin from "./components/Mapas/ModoAdmin";


function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    loadMarkers()
  }, []);
  function loadMarkers() {
    dispatch(getMarkers());
  }


  return (
    <AuthProvider>
    <AnimatePresence >
    <Routes location={location} key={location.pathname}> 
    <Route exact path="/" element={<Home loadMarkers={loadMarkers}/>} /> 
    <Route exact path="/login" element={<Landing />} /> 
    <Route exact path="/details/:id" element={<Details />} /> 
     <Route exact path="/admin" element={<ProtectedRoute><HomeAdmin loadMarkers={loadMarkers}/></ProtectedRoute>} />  
    </Routes>
    </AnimatePresence>
    </AuthProvider>
  )
}

export default App
