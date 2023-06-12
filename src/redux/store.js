import { createStore, applyMiddleware, compose  } from "redux"
import rootReducer from "./reducer"
import ThunkMiddleware from "redux-thunk" 

// what is to do a compose???
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//esta linea es para conectar con la extension del navegador => REDUX DEVTOOLS 

const store = createStore( 
    rootReducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware)))
// esta linea es para poder acer peticiones a un server.
export default store;