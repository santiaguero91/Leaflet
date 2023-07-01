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

  useEffect(() => {
    dispatch(getInfoById(id));
  }, [dispatch, id]);


const ver = () => {
  navigate("/");
}

  return (
    <MainDiv>
        <h1>{detailInfo.name}</h1>
        <div>
        <img width="250px" src={detailInfo.img} />
        </div>

        
        <button onClick={()=>ver()} className="boton">Volver al inicio</button>
    </MainDiv>
  )
}

export default Details