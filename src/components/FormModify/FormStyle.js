import styled from "styled-components";

export const Background = styled.div`
display: grid;
    place-content: center;
    .form{
    background-color: rgba(15, 15, 15);
    border: none;
    border-radius: 30px;
    padding: 50px;
    padding-bottom: 80px;
    margin-top: 2rem;



    color: aliceblue;
    font-weight: 600;
    font-size: large;
    font-family: 'Courier New', Courier, monospace;
}

h4{
    font-size: 34px;
    font-weight: 900;
    color: white;
    margin-top: 0;
}
`;

export const ButtonsDiv = styled.div`
  
  background-color: rgba(89, 89, 89);
    border: none;
    border-radius: 10px;
    width: fit-content;
    height: fit-content;
    padding: 10px;
    margin: 10px auto 0px 0;
    font-weight: 800;
    transition: 1s;

    :hover{
      background-color: rgba(150, 150, 150);
    }
  `;

export const Clean = styled.div`
  cursor: pointer;
  background-color: rgb(35,35,35);
    border: none;
    border-radius: 10px;
    width: fit-content;
    height: fit-content;
    padding: 10px;
    margin: 0 auto ;
    font-weight: 800;
    transition: 1s;

    :hover{
  background-color: rgb(50,50,50);
    }
  `;
