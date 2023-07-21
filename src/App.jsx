import Home from "./Views/Home"
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"
import View2 from "./Views/View2";
import Details from "./Views/Details/Details";
import io from 'socket.io-client'
import { useState } from "react";
import { getMarkers } from "./redux/actions";
import { useDispatch } from "react-redux";
import Landing from "./Views/Landing/Landing";
import HomeAdmin from "./Views/HomeAdmin/HomeAdmin";
import { AuthProvider } from "./components/Auth/authContext";
import TopBar from "./components/TopBar/TopBar";
import ProtectedRoute from "./components/Auth/ProtectedRoute";


function App() {
  const location = useLocation();
  const [isConected, setisConnected] = useState(false)
  const dispatch = useDispatch();

  const socket = io('http://localhost:3001')
  socket.connect('connect', console.log("estamos online maestro"))

   socket.on('update', (data) => { 
    dispatch(getMarkers());
  });  

  return (
    <AuthProvider>
    <AnimatePresence>
    <Routes location={location} key={location.pathname}> 
    <Route exact path="/" element={<Home />} /> 
    <Route exact path="/2" element={<View2 />} /> 
    <Route exact path="/details/:id" element={<Details />} /> 
    
    <Route exact path="/admin" element={<ProtectedRoute><HomeAdmin/></ProtectedRoute>} /> 
    
    </Routes>
    </AnimatePresence>
    </AuthProvider>
  )
}

export default App
