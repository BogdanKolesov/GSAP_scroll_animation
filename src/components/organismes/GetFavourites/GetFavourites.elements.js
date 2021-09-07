import styled from 'styled-components';
import { Button } from '../../atoms';

export const GetFavouritesContainer = styled.div`
    background: ${props => props.theme.colors.bannerBackground};
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    min-height: 250px;
    width: 90%;
    @media screen and (max-width: 800px){
        height: 60vh;
        min-height: 250px;
    }
`;

export const GetFavouritesContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70%;
    height: 100%;
    margin-top: 10%;
    margin-bottom: 10%;
    @media screen and (max-width: 800px){
        flex-direction: column;
        width: 90%;
    }

`;

export const GetFavouritesText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    @media screen and (max-width: 800px){
        width: 100%;
        padding-top: 10%;
    }
    
`;

export const GetFavouritesTitle = styled.h3`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 3%;
    @media screen and (max-width: 1215px){
        font-size: 25px;
    }
`;

export const GetFavouritesSubtitle = styled.p`
    font-size: 16px;
    width: 70%;
    margin-bottom: 5%;

    @media screen and (max-width: 1215px){
        display: none;
    }
`;

export const GetFavouritesButton = styled(Button)`
    margin: 0;
`;

export const GetFavouritesImage = styled.img`
    height: 100%;
`;