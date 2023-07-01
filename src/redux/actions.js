import axios from "axios";
import {FILTER_BY_TYPE, GET_MARKERS, OPEN_LATERL_LIST, SET_OPEN,OPEN_MODIFY_PANEL, GET_DETAILS, CHANGE_MAP} from "./action-types";

const Url = `http://localhost:3001/markers`


export function getMarkers(){
    return async function(dispatch) {
        try {
        let json = await axios.get(`${Url}`);
        return dispatch({
            type: GET_MARKERS,
            payload: json.data
        })
    } catch (error){
        console.log(error);
    }
    }
}
export function postMarker(payload){
    return async function() {
        try{       
        const response = await axios.post(`${Url}`, payload)
        return response
    } catch (error){
        console.log(error);
    }
    }
} 


export function getInfoById(id) {
    return async function (dispatch) {
      try {
        const json = await axios.get(`${Url}/${id}`);
        return dispatch({
          type: GET_DETAILS,
          payload: json.data,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

export function deleteMarker(id){
    return async function() {
        try{       
        const response = await axios.delete(`${Url}/`+id)
        return response
    } catch (error){
        console.log(error);
    }
    }
} 

export function filterMarkersByType(payload){
    return{
        type: FILTER_BY_TYPE,
        payload
    }
} 


export function setOpenOnMain(payload){
    return{
        type: SET_OPEN,
        payload
    }
}
export function changeMap(payload){
    return{
        type: CHANGE_MAP,
        payload
    }
}
export function setOpenLateralList(payload){
    return{
        type: OPEN_LATERL_LIST,
        payload
    }
}
export function setOpenModifyPanel(payload){
    return{
        type: OPEN_MODIFY_PANEL,
        payload
    }
}

export function putMarker(payload){
    const id = payload.id
    return async function() {
        try{       
        console.log(payload);
        const response = await axios.put(`${Url}/`+ id, payload)
        return response
    } catch (error){
        console.log(error);
    }
    }
} 
