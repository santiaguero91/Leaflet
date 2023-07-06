import { useState } from "react";
import { uploadFile } from "../firebase/config";

function View2() {

const [file, setFile] = useState(null)
const [imagen, setImage] = useState(null)

const handleSubmitImage = async (e) => {
  e.preventDefault();
  try{
    const result = await uploadFile(file);
    setImage(result)
    console.log(result,);
  } catch (error) {
    console.log(error);
  }
}

  return (
    <form onSubmit={handleSubmitImage}>
      <input 
      type="file"
      name="file"
      id="file"
      onChange={e=> setFile(e.target.files[0])}
      ></input>
      <button>UPLOAD</button>

    {imagen && <div><img src={imagen} alt="Descripción de la imagen" width="100"/></div>}

    </form>
  )
}

export default View2