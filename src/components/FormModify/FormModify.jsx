import React, { useState } from "react";
import validate from "./FormValidation";
import { motion } from "framer-motion";
import {
  Background,
  CloseBtn,
  FormTitle,
  IconsGrid,
  LabelTitle,
  StyledButton,
  StyledInputFile,
  StyledTextField,
} from "./FormStyle";
import { useDispatch, useSelector } from "react-redux";
import SchoolIcon from "../../assets/Schoolcon.png";
import PawIcon from "../../assets/PawIcon.png";
import TreeIcon from "../../assets/TreeIcon.png";
import GerminarIcon from "../../assets/germinarIcon.png";
import leafIcon from "../Mapas/leaf.png";
import { getMarkers, putMarker, setOpenModifyPanel } from "../../redux/actions";
import { uploadFile } from "../../firebase/config";
import { Button } from "@mui/material";
import { SelectIcon } from "../TopBar/TopBarStyle";
function FormModify() {
  const dispatch = useDispatch();
  const allMarkers = useSelector((state) => state.markers);
  const openModifyPanel = useSelector((state) => state.openModifyPanel);

  /////////
  const [file, setFile] = useState(null);
  const [imagen, setImage] = useState(null);
  //////

  const [input, setInput] = useState({
    id: openModifyPanel._id,
    name: openModifyPanel.name,
    latitude: openModifyPanel.latitude,
    longitude: openModifyPanel.longitude,
    img: openModifyPanel.img,
    link: openModifyPanel.link,
    tipo: openModifyPanel.tipo,
  });

  const [errors, setErrors] = useState({
    name: "",
    latitude: "",
    longitude: "",
    img: "",
    link: "",
    tipo: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleCheck = (e) => {
    setInput({
      ...input,
      tipo: e,
    });
  };
  const handleSubmitImage = async (e) => {
    e.preventDefault();
    try {
      const result = await uploadFile(file);
      setImage(result);
      setInput({
        ...input,
        img: result,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putMarker(input));
    dispatch(setOpenModifyPanel(0));

    setTimeout(() => {
      dispatch(getMarkers());
    }, 1000);
  };

  function closeModifyForm() {
    dispatch(setOpenModifyPanel(0));
  }

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0, transition: { duration: 0.1 } }}
      style={{
        backgroundColor: "rgba(211, 211, 211, 1)",
        borderRadius: "15px",
      }}
    >
      <Background>
        <form className="form">
          <FormTitle variant="h4">Modificar Marcador</FormTitle>
          <div>
            <StyledTextField
              label="Nuevo Nombre"
              id="inputname"
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
              title="name"
              InputProps={{
                style: { color: "black" },
              }}
              InputLabelProps={{
                style: { color: "black" },
              }}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className="SeasonCheckboxs">
            <LabelTitle variant="h6">Selecciona un Icono</LabelTitle> <br></br>
            <IconsGrid>
            <SelectIcon
                name="Tree"
                value="Tree"
                src={TreeIcon}
                onClick={() => handleCheck("Tree")}
                style={ input.tipo=== "Tree"? { boxShadow:"rgba(00, 00, 00, 0.8) 0px 2px 8px 0px" } : { border:"none" }}
              />
              <SelectIcon
                name="school"
                value="school"
                src={SchoolIcon}
                onClick={() => handleCheck("school")}
                style={ input.tipo=== "school"? { boxShadow:"rgba(00, 00, 00, 0.8) 0px 2px 8px 0px" } : { border:"none" }}

              />
              <SelectIcon
                name="paw"
                value="paw"
                src={PawIcon}
                onClick={() => handleCheck("paw")}
                style={ input.tipo=== "paw"? { boxShadow:"rgba(00, 00, 00, 0.8) 0px 2px 8px 0px" } : { border:"none" }}
              /> 
            <SelectIcon
                name="ptoDeInteres"
                value="ptoDeInteres"
                src={GerminarIcon}
                onClick={() => handleCheck("ptoDeInteres")}
                style={ input.tipo=== "ptoDeInteres" || !input.tipo ? { boxShadow:"rgba(00, 00, 00, 0.8) 0px 2px 8px 0px" } : { border:"none" }}
              />
              <SelectIcon
                name="hoja"
                value="hoja"
                src={leafIcon}
                onClick={() => handleCheck("hoja")}
                style={ input.tipo=== "hoja"? { boxShadow:"rgba(00, 00, 00, 0.8) 0px 2px 8px 0px" } : { border:"none" }}
              /> 
              </IconsGrid>
          </div>
          <div className="fotosBtns"> 
            <label htmlFor="file">
              <input
                style={{ display: "none" }}
                type="file"
                name="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <Button color="secondary" variant="contained" component="span">
                Seleccionar Foto
              </Button>
            </label>
            <StyledButton onClick={handleSubmitImage}>
              Confirmar Foto
            </StyledButton>

            {imagen && (
              <div>
                <img src={imagen} alt="Descripción de la imagen" width="100" />
              </div>
            )}
          </div>
          <div className="divSubmitButton">
            {input.name !== "" &&
            input.latitude !== "" &&
            input.longitude !== "" &&
            input.tipo !== "" ? (
              <StyledButton
                id="submitButton"
                onClick={(e) => handleSubmit(e)}
                type="submit"
              >
                Actualizar Marcador
              </StyledButton>
            ) : (
              <StyledButton
                id="submitButton"
                disabled
                onClick={(e) => handleSubmit(e)}
                type="submit"
              >
                ACTUALIZAR
              </StyledButton>
            )}
          </div>
        </form>
        <CloseBtn onClick={() => closeModifyForm()}>CERRAR</CloseBtn>
      </Background>
    </motion.div>
  );
}

export default FormModify;
