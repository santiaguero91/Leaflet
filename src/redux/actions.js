import axios from "axios";
import {FILTER_BY_TYPE, GET_MARKERS, OPEN_LATERL_LIST, SET_OPEN,OPEN_MODIFY_PANEL, GET_DETAILS, CHANGE_MAP, GET_USERS, ADMIN} from "./action-types";

const Url = `https://leaflet-api-santiaguero91.vercel.app/`


export function getMarkers(){
    return async function(dispatch) {
        try {
        let json = await axios.get(`${Url}markers`);
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
        const response = await axios.post(`${Url}markers`, payload)
        return response
    } catch (error){
        console.log(error);
    }
    }
} 



export function getInfoById(id) {
    return async function (dispatch) {
      try {
          const json = await axios.get(`${Url}markers/${id}`);
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
        const response = await axios.delete(`${Url}markers/`+id)
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
export function setAdmin(payload){
    return{
        type: ADMIN,
        payload
    }
}

export function putMarker(payload){
    const id = payload.id
    return async function() {
        try{       
        console.log(payload);
        const response = await axios.put(`${Url}markers/`+ id, payload)
        return response
    } catch (error){
        console.log(error);
    }
    }
} 

export function getUsers(){
    return async function(dispatch) {
        try {
        let json = await axios.get(`${Url}user`);
        return dispatch({
            type: GET_USERS,
            payload: json.data
        })
    } catch (error){
        console.log(error);
    }
    }
}


export function putUser(payload){
    const id = payload.id
    console.log(id);
    return async function() {
        try{
        const response = await axios.put(`${Url}user/`+ id, payload)
        return response
    } catch (error){
        console.log(error);
    }
    }
} 


export function postUser(payload){
    return async function() {
        try{       
            console.log(payload, "posteando data");
        const response = await axios.post(`${Url}user`, payload)
        return response
    } catch (error){
        console.log(error);
    }
    }
} 