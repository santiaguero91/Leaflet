import axios from "axios";
import {GET_MARKERS} from "./action-types";

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