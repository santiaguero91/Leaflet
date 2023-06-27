import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition: 1s;
    background-color: #000;
    width: 98vw;
    height: 40px;
    z-index: 2000 !important;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`;

export const TopBarContainer = styled.div`
    display: flex;
    position: absolute;
    transition: 1s;
    background-color: #000;
    height: 100%;
    margin-left: 0;
    z-index: 2000 !important;
    background-color:  transparent;
    .sidebar{
        background-color:  transparent;
    }
    `;

export const SidebarDiv = styled.div`
background-color: #1a1a1a;
    color: #fff;
    font-size: 22px;
    top: 0;
`;

export const FormContainer = styled.div`
    display: flex;
    position: relative;
    transition: 1s;
    background-color: #000;
    height: 100%;
    z-index: 2000 !important;
    margin: 0 auto 0 auto;
    `;


    export const LateralListContainer = styled.div`
    display: flex;
    position: relative;
    transition: 1s;
    background-color: #000;
    height: 100%;
    margin-right: 0;
    z-index: 2000 !important
    `;
    
