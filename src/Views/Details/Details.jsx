import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getInfoById } from "../../redux/actions";
import { MainDiv } from "./DetailsStyle";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailInfo = useSelector((state) => state.detail);
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = React.useState(false);

  useEffect(() => {
    dispatch(getInfoById(id));
  }, [dispatch, id]);

  const volver = () => {
    navigate("/");
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };


  const [input, setInput] = useState({
    id: detailInfo.id,
    name: detailInfo.name,
    latitude: detailInfo.latitude,
    longitude: detailInfo.longitude,
    img: detailInfo.img,
    link: detailInfo.link,
    tipo: detailInfo.tipo,
    data: "data"
  });

  const ver = () => {
    console.log(detailInfo, "detailInfo");
    console.log(input, "input");
  };

  return (
    <MainDiv>
      <h1>{detailInfo.name}</h1>
      <div>
        <img width="250px" src={detailInfo.img} />
      </div>
      <button onClick={() => volver()} className="boton">
        Volver al inicio
      </button>
      <button onClick={() => ver()}>ver</button>
      <div className="formButtons">


        {/* agregar aca la data del item */}


      <button className="boton">Agregar Texto</button>
      <button className="boton">Agregar Imagen</button>
      </div>
    </MainDiv>
  );
};

export default Details;
