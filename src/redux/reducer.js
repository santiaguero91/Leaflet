import { DELETE_MARKERS, GET_MARKERS } from "./action-types";

const initialState = {
    markers: [],
    allMarkers:[]
}

const rootReducer =(state=initialState, action) => {
    switch(action.type){
        case GET_MARKERS:
          return {
              ...state, 
              markers: action.payload,
              allMarkers: action.payload
        }
        case DELETE_MARKERS:
            return{
            ...state,
            markers: action.payload
        }
        default:
            return{...state}; 
}

}
export default rootReducer;