import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getInfoById } from "../../redux/actions";
import { MainDiv } from "./DetailsStyle";
import DetailTextForm from "../../components/DetailComponents/DetailForm/DetailTextForm";

const Details = ({id}) => {
  const dispatch = useDispatch();
  const detailInfo = useSelector((state) => state.detail);
  const navigate = useNavigate();
  const [detailForm, setDetailForm] = useState(false);

  useEffect(() => {
    getInfo()
  }, [dispatch, id]);

  const volver = () => {
    navigate("/");
  };

  const getInfo = () => {
    dispatch(getInfoById(id))
  };

  const changeDetailForm = () => {
    setDetailForm(!detailForm);
  };

  return (
    <MainDiv>
      <h1>{detailInfo.name}</h1>
      <p>{detailInfo.link}</p>
      <div>
        <img width="250px" src={detailInfo.img} />
      </div>
      <button onClick={() => volver()} className="boton">
        Volver al inicio
      </button>
      <div className="formButtons">
        <button onClick={() => changeDetailForm()} className="boton">Cambiar Texto</button>
      </div>
      {detailForm && (
                  <div>
                    <DetailTextForm
                    id={detailInfo._id}
                    name={detailInfo.name}
                    latitude={detailInfo.latitude}
                    longitude={detailInfo.longitude}
                    img={detailInfo.img}
                    tipo={detailInfo.tipo}
                    link={detailInfo.link}
                    changeDetailForm={changeDetailForm}
                    getInfo={getInfo}
                    />
                  </div>
                )}
    </MainDiv>
  );
};

export default Details;
