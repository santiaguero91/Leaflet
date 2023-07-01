import { DELETE_MARKERS, GET_MARKERS, FILTER_BY_TYPE, SET_OPEN, OPEN_LATERL_LIST, OPEN_MODIFY_PANEL, PUT_MARKER, GET_DETAILS } from "./action-types";

const initialState = {
    openLateralList: "0",
    openModifyPanel: 0,
    openMain: "0",
    markers: [],
    allMarkers:[],
    detail: "",
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
        case OPEN_LATERL_LIST:
            return{
            ...state,
            openLateralList: action.payload
        }
        case OPEN_MODIFY_PANEL:
            return{
            ...state,
            openModifyPanel: action.payload
        }
        case PUT_MARKER:
            return{
                ...state,
        }
        case GET_DETAILS:
            return {
                ...state,
                detail: action.payload,
              };
        default:
            return{...state}; 
}

}
export default rootReducer;