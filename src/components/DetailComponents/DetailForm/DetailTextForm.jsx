import { useState } from "react";
import { FormText, FormBtn,FormStack } from "./DetailTextFormStyle";
import { useDispatch } from "react-redux";
import { getMarkers, putMarker } from "../../../redux/actions";

export default function DetailTextForm(
  {id,
  name,
  latitude,
  longitude,
  img,
  tipo,
  link,
  changeDetailForm,
  getInfo,
  loadMarkers}
) {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    id: id,
    name: name,
    latitude: latitude,
    longitude: longitude,
    img: img,
    link: link, 
    tipo: tipo,
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      link: e.target.value,
    });

  };
  
  const handleSubmit = () => {
    dispatch(putMarker(input));
    changeDetailForm()
    setTimeout(() => {getInfo(),loadMarkers()}, 1000);
      };

  return (
    <FormStack>
      <FormText
          label="Agregar Descripción"
          id="inputname"
          type="text"
          value={input.link}
          name="description"
          onChange={(e) => handleChange(e)}
          title="description"
          multiline
          rows={8}
          placeholder={input.link}
          InputProps={{
            style: { color: "black" },
          }}
          InputLabelProps={{
            style: { color: "black" },
          }}
        >
        </FormText>
        <FormBtn onClick={(e) => handleSubmit(e)}>Confirmar</FormBtn>
    </FormStack>
  );
}
