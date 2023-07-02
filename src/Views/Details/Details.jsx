import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getInfoById } from "../../redux/actions";
import { BackCardDiv, FrontCardDiv, MainDiv } from "./DetailsStyle";
import ReactCardFlip from 'react-card-flip';

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

  const ver = () => {
    console.log(detailInfo, "detailInfo");
  };

  return (

    <MainDiv >
 <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <FrontCardDiv onClick={handleClick}>
      <h1>{detailInfo.name}</h1>
      <div>
        <img width="250px" src={detailInfo.img} />
      </div>
      <button onClick={() => volver()} className="boton">
        Volver al inicio
      </button> 
        </FrontCardDiv>
      <BackCardDiv onClick={handleClick}>
       <h1>ACA VA MAS INFO</h1>
       <p>Latitude:{detailInfo.latitude}</p>
       <p>Latitude:{detailInfo.longitude}</p>
       <button onClick={()=>ver()}>VER</button>
        </BackCardDiv>
    </ReactCardFlip>


    </MainDiv>
  );
};

export default Details;
