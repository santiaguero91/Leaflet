import Home from "./Views/Home"
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"
import View2 from "./Views/View2";
import Details from "./Views/Details/Details";
import io from 'socket.io-client'
import { useState } from "react";
import { getMarkers } from "./redux/actions";
import { useDispatch } from "react-redux";



function App() {
  const location = useLocation();
  const [isConected, setisConnected] = useState(false)
  const dispatch = useDispatch();

  const socket = io('http://localhost:3001')
  socket.connect('connect', console.log("estamos online maestro"))

   socket.on('update', (data) => { 
    console.log("hubo un cambio");
    dispatch(getMarkers());
  }); 

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}> 
    <Route exact path="/" element={<Home />} /> 
    <Route exact path="/2" element={<View2 />} /> 
    <Route exact path="/details/:id" element={<Details />} /> 

    </Routes>
    </AnimatePresence>
  )
}

export default App
