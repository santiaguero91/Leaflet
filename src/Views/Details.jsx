import { useState } from "react";


function Details() {

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
    <div>
        <h1>Hola</h1>
    </div>
  )
}

export default Details