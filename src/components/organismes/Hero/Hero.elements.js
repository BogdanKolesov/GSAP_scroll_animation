import styled from 'styled-components';
import { Button, Container } from '../../atoms';

export const HeroContainer = styled(Container)` 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    min-height: 500px;

    @media screen and (max-width: 800px){
        flex-direction: column-reverse;
    }
`;

export const HeroBackground = styled.img`
    width: 40%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 800px){
        width: 100%;
        height: 40%;
    }
`;

export const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
    @media screen and (max-width: 800px){
        width: 80%;
    }
`;

export const HeroContent = styled.div`
    width: 80%;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media screen and (max-width: 800px){
        width: 100%;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 30px;
    color: ${props => props.theme.colors.primary};
    line-height: 1.1;
    letter-spacing: 1.1px;
    @media screen and (max-width: 800px){
        margin-bottom: 30px;
    }
`;

export const HeroText = styled.p`
    width: 80%;
    color: ${props => props.theme.colors.text};

`;

export const HeroButton = styled(Button)`
    &:hover{
        border: 1px solid ${props => props.theme.colors.text};
    }
    @media screen and (max-width: 800px){
        margin-top: 60px;
    }
`;