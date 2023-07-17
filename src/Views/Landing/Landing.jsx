import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { LogInDiv, MainLandingDiv } from "./LandingStyle";
import { Link } from "react-router-dom";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { Formulario } from "../../components/Auth/Formulario";
import { useAuth } from "../../components/Auth/authContext"


function Landing() {

const {user} = useAuth()

function ver() {
  console.log(user);
}

  const styles = {
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
  };

  return (
    <MainLandingDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* <Link to="/"> */}
        <LogInDiv><Formulario /></LogInDiv>
     {/*  </Link> */}

      <MouseParallaxContainer
        globalFactorX={0.2}
        globalFactorY={0.1}
        containerStyle={styles}
      >
        <MouseParallaxChild factorX={0.3} factorY={0.5} containerStyle={styles}>
          <img src="https://picsum.photos/id/237/200/300" className="photo1" />
          <img src="https://picsum.photos/id/100/200/300" className="photo2" />
          <img src="https://picsum.photos/id/155/200/300" className="photo5" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.7} factorY={0.8}>
          <img src="https://picsum.photos/id/123/400/400" className="photo6" />
          <img src="https://picsum.photos/id/321/400/400" className="photo8" />
        </MouseParallaxChild>

        <MouseParallaxChild factorX={0.5} factorY={0.3}>
          <img src="https://picsum.photos/id/180/200/300" className="photo3" />
          <img src="https://picsum.photos/id/288/400/400" className="photo7" />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </MainLandingDiv>
  );
}
export default Landing;
