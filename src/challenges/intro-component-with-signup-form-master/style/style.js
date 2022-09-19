import styled, { createGlobalStyle } from "styled-components";
import bgIntroDesktop from "../images/bg-intro-desktop.png";
import {
    Red,
    Green,
    DarkGreen,
    Blue,
    DarkBlue,
    GrayishBlue,
    White,
    LightGray
} from "./colors";

// Responsive Layout Breakpoints
export const BREAKPOINTS = {
    sm: 'screen and (max-width: 576px)',
    md: 'screen and (min-width: 577px) and (max-width: 768px)',
    lg: 'screen and (min-width: 769px) and (max-width: 1440px)'
}

/*
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
*/

//Global style
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');  
    
    *{
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 0;
    }

    .test{
        color: red;
        font-size: 2rem;
        font-weight: bold;
    }
`;

//Main Section
export const Body = styled.div`
    min-height: 100vh;
    background-color:${Red} ;
`;
export const MainContent = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    background: url(${bgIntroDesktop}) no-repeat;
    background-size: contain;

    @media ${BREAKPOINTS.sm} {
        display: flex;
        flex-direction: column;
    }
`;

//Intro Section 
export const IntroSection = styled.div`
    color: ${White};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 80px;

    @media ${BREAKPOINTS.sm} {
        padding: 20px;
        text-align: center;
    }
    @media ${BREAKPOINTS.md} {
        padding: 20px;
    }
`;
export const IntroSectionTitle = styled.h1`
    font-size: 3rem;
`;
export const IntroSectionText = styled.p`
`;

//Sing-up Form Section
export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0px 100px;

    @media ${BREAKPOINTS.sm} {
        padding: 20px;
    }
    @media ${BREAKPOINTS.md} {
        padding: 20px;
    }
`;
export const FormSectionPricing = styled.div`
    color: ${White};
    background-color: ${Blue};
    border-radius: 8px;
    text-align: center;
    padding: 15px 10px;
    font-size: .8rem;
    min-width: 100%;
    box-shadow: 0px 8px 2px 0px rgba(0,0,0,0.2);
`;
export const FormSignUp = styled.form`
    background-color: ${White};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    padding: 35px;
    border-radius: 8px;
    box-shadow: 0px 8px 2px 0px rgba(0,0,0,0.2);
`;
export const FormInput = styled.input`
    width: 100%;
    border-style: none;
    border: 1px solid ${LightGray};
    border-radius: 5px;
    padding: 15px 25px;
    font-weight: bold;
    color: ${DarkBlue};
    &::placeholder{
        color: ${GrayishBlue}  ;
    }
    &:focus{
        outline: 1px solid ${DarkBlue};
    }
`;
export const FormInputErr = styled.small`
    color: ${Red};
    width: 100%;
    text-align: right;
    margin-top: 5px;
    margin-bottom: 15px;
    font-size: 0.7rem;
`;
export const FormBtnClaim = styled.button`
    width: 100%;
    background-color: ${Green};
    color: ${White};
    text-transform: uppercase;
    border-style: none;
    border-radius: 5px;
    border: 2px solid ${DarkGreen};
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
`;
export const FormTerms = styled.div`
    color: ${LightGray};
    margin-top: 15px;
    font-size: 12px;
`;
export const TermsAndServicesLink = styled.a`
    color: ${Red};
    font-weight: bold;
    text-decoration: none;
    margin-left: 5px;
`;