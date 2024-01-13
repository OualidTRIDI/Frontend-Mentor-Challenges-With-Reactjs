import styled from "styled-components";
import { Yellow, White, Grey, Black } from "./colors";

import illustrationArticle from '../images/illustration-article.svg';
import avatar from '../images/image-avatar.webp'

export const Body = styled.section`

    @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@600;800&display=swap');
    
    font-family: 'Overpass', sans-serif;
    font-size: 16px;
    min-height: 100vh;
    background-color: ${Yellow};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    background-color: ${White};
    max-width: 300px;
    border: 1px solid ${Black};
    border-radius:20px;
    padding: 15px;
    box-shadow: 5px 5px 0px 0px ${Black};

`;

export const CardHead = styled.div`
    margin-bottom: 15px;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;

`;

export const CardImg = styled.img.attrs({
    src: `${illustrationArticle}`
})`
    width:100%;
    border-radius: 10px;
`;

export const CardTitle = styled.div`
    font-weight:800;
`;

export const CardTag = styled.div`
    background-color: ${Yellow};
    padding: 5px;
    border-radius:5px;
    font-weight: 800;
    font-size: 12px;

`;

export const CardPublishedDate = styled.div`
    font-size: 12px;

`;

export const CardContent = styled.div`
    color: ${Grey};
  line-height: 1.5;
`;

export const CardUser = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

`;

export const CardUserAvatar = styled.img.attrs({
    src: `${avatar}`
})`
    width:50px;
    height:50px;
    border-radius: 50%;
`;

export const CardUserName = styled.div`
    padding: 5px;
    font-weight: 800;
    font-size: 12px;
`;