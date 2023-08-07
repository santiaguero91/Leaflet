import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  /* 
  new credentials */
  apiKey: "AIzaSyA37gQ4D4moLggsow5tP0pPyt3h6DN889g",
  authDomain: "germinarleafletproject.firebaseapp.com",
  projectId: "germinarleafletproject",
  storageBucket: "germinarleafletproject.appspot.com",
  messagingSenderId: "60019276033",
  appId: "1:60019276033:web:3a31af716df69eb07ac300" 
  

  /* 
  old credentials
  apiKey: "AIzaSyDZIkRN7Nb2gyWLtI--U_VTddnUEd6EUAY",
  authDomain: "leafletgerminar.firebaseapp.com",
  projectId: "leafletgerminar",
  storageBucket: "leafletgerminar.appspot.com",
  messagingSenderId: "61405451163",
  appId: "1:61405451163:web:fb8a003ae7d3ce12bbc73e" 
  */
};

const app = initializeApp(firebaseConfig);
export const storage  = getStorage(app);

export async function uploadFile(file){
    const storageRef = ref(storage, v4());
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
}

export const auth = getAuth(app)