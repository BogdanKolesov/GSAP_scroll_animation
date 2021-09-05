import styled from 'styled-components';
import { Container } from '../../atoms';
import { Link } from 'react-router-dom';

export const FeaturedContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

export const FeaturedHeaders = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`;

export const FeaturedTitle = styled.h2`
    margin-bottom: 10px;
    font-size: 20px;
`;

export const FeaturedItems = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width:1270px){
        justify-content: center;
    }    
`;


export const FeaturedItem = styled.div`
    width: 16%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8px;
    min-height: 200px;
    @media screen and (max-width:1270px){
        width: 29%;
    }
    @media screen and (max-width:800px){
        width: 41%;
    }
`;

export const FeaturedItemImg = styled.img`
    width: 100%;
    margin-bottom: 8px;
    max-height: 80%;
    object-fit: cover;
`;

export const FeaturedItemTitle = styled(Link)`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 5px;
    color: ${props => props.theme.colors.text};
    text-align: center;
`;

export const FeaturedItemPrice = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.theme.colors.text}
`;