import { DELETE_MARKERS, GET_MARKERS, FILTER_BY_TYPE, SET_OPEN } from "./action-types";

const initialState = {
    openMain: "hola",
    markers: [],
    allMarkers:[],
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
        case FILTER_BY_TYPE:
            const allMarkers = state.allMarkers
            const markerFiltered = action.payload === "All"
            ? allMarkers
            : allMarkers.filter(el => action.payload.includes(el.tipo))
            return {
                ...state,
                markers: markerFiltered
        }
        case SET_OPEN:
            return{
            ...state,
            openMain: action.payload
        }
        default:
            return{...state}; 
}

}
export default rootReducer;