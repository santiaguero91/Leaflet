import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getInfoById } from "../../redux/actions";
import { AddTxtBtn, BackBtn, DeTiltle, DeTxt, ImgTxtDiv, MainDiv } from "./DetailsStyle";
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
      <DeTiltle variant="h4">{detailInfo.name}</DeTiltle>
      <ImgTxtDiv>
        <img width="250px" src={detailInfo.img} />
      <DeTxt variant="subtitle1">{detailInfo.link}</DeTxt>
      </ImgTxtDiv>
      <div className="formButtons">
        <AddTxtBtn onClick={() => changeDetailForm()} className="boton">Cambiar Texto</AddTxtBtn>
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
