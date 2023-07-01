import { useState } from "react";
import { uploadFile } from "../firebase/config";


function View2() {

const [file, setFile] = useState(null)

const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    const result = await uploadFile(file);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="file"
      name="file"
      id="file"
      onChange={e=> setFile(e.target.files[0])}
      ></input>
      <button>UPLOAD</button>
    </form>
  )
}

export default View2