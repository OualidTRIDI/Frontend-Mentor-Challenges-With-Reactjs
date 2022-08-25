import styled from "styled-components";
import { VeryDarkBlue, DarkBlue, Blue, White, LightGrey, MediumGrey, Orange } from "./colors";
import IconStar from "../images/icon-star.svg";
import ThankYouImg from "../images/illustration-thank-you.svg";

export const Body = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');
    
    font-family: 'Overpass', sans-serif;
    font-size: 15px;
    background-color: ${VeryDarkBlue};
    min-height: 100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const MainRatingComponent = styled.div`
    background-color: ${DarkBlue};
    height: 350px;
    width: 350px;
    border-radius: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const RatingComponentTitle = styled.h1`
    font-weight: bold;
    color: ${White};
    margin: 0;
`;


export const RatingComponentText = styled.div`
    color: ${MediumGrey};
`;

export const RatingNumbersContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const RatingCircleComponent = styled.div`
    background-color:${Blue};
    color: ${MediumGrey};
    height: 50px;
    width: 50px;
    border-radius:50px;
    display: flex;
    justify-content: center;
    align-items:center;
`;

export const RatingNumber = styled(RatingCircleComponent)`
    background-color:${props => props.clicked ? LightGrey : Blue};
    color: ${props => props.clicked ? White : MediumGrey};

    &:hover{
        background-color: ${Orange};
        color:${White};
        cursor: pointer;
    }
`;

export const RatingStar = styled.div`
    background: url(${IconStar}) no-repeat;
    background-size: contain;
    height: 25px;    
    width: 25px;
`;

export const RatingSubmitBtn = styled.button`
    background-color: ${Orange};
    color: ${White};
    font-size: .9em;
    letter-spacing: .2em;
    width: 100%;
    padding: 15px;
    border-radius: 20px;
    border: none;

    &:hover{
        background-color: ${White};
        color: ${Orange};
        cursor: pointer;
    }
`;

export const MainThankYouComponent = styled(MainRatingComponent)`
    align-items: center;
`;

export const SelectedRatingNbr = styled.div`
    background-color:${Blue};
    color: ${Orange};
    padding:10px 25px;
    border-radius: 20px;
`;

export const ThankYouImage = styled.div`
    background: url(${ThankYouImg}) no-repeat;
    background-size: contain;
    height: 160px;    
    width: 220px;
`;

export const ThankYouText = styled(RatingComponentText)`
    text-align: center;
    padding: 5px;
`;