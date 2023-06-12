import { GET_MARKERS } from "./action-types";

const initialState = {
    markers: [],
    allMarkers:[]
}

const rootReducer =(state=initialState, action) => {
    switch(action.type){
        case GET_MARKERS:
          return {
              ...state, 
              countries: action.payload,
              allCountries: action.payload
        }
        default:
            return{...state}; 
}

}
export default rootReducer;