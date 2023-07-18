import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition: 1s;
    background-color: rgba(15,15,15,1);
    width: 100vw;
    height: 40px;
    z-index: 2000 !important;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`;

export const TopBarContainer = styled.div`
    position: relative;
    transition: 1s;
    background-color: #000;
    height: 100%;
    margin-left: 1%;
    z-index: 2000 !important;
    .sidebar{
        background-color:  transparent;
    }
    `;


    export const UserButtonContainer = styled.div`
    position: relative;
    transition: 1s;
    background-color: #000;
    height: 100%;
    z-index: 2000 !important;
    margin-right: 1%;
    `;

    
export const SidebarDiv = styled.div`
background-color: #1a1a1a;
    color: #fff;
    font-size: 22px;
    top: 0;
`;
    
