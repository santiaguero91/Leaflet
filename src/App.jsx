import Home from "./Views/Home"
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}> 
    <Route exact path="/" element={<Home />} /> 
    </Routes>
    </AnimatePresence>
  )
}

export default App
