import Home from "./Views/Home"
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"
import View2 from "./Views/View2";
import Details from "./Views/Details/Details";

function App() {
  const location = useLocation();

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
