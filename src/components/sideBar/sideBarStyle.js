import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    transition: 1s;
    background-color: #000;
    height: fit-content;
    width:100%;
    height: 40px;
    z-index: 2000 !important;
`;

export const SideBarContainer = styled.div`
    display: flex;
    position: absolute;
    transition: 1s;
    background-color: #000;
    height: 100%;
    margin-left: 0;
    z-index: 2000 !important
    `;

export const SidebarDiv = styled.div`
background-color: #1a1a1a;
    color: #fff;
    font-size: 22px
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

    
