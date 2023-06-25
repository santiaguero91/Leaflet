import { DELETE_MARKERS, GET_MARKERS, FILTER_BY_TYPE } from "./action-types";

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
        case FILTER_BY_TYPE:
            const allMarkers = state.allMarkers
            const markerFiltered = action.payload === "All"
            ? allMarkers
            : allMarkers.filter(el => el.tipo.includes(action.payload))
            return {
                ...state,
                markers: markerFiltered
        }
        default:
            return{...state}; 
}

}
export default rootReducer;