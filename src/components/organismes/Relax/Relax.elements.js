import styled from 'styled-components';
import { Container } from '../../atoms';

export const RelaxContainer = styled(Container)`
    margin-top: 30px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`;

export const RelaxContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 40px;
    @media screen and (max-width: 1024px){
        width: 100%;
    }
`;

export const RelaxTitle = styled.h2`
    font-size: 40px;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    margin-bottom: 40px;
`;

export const RelaxText = styled.p`
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    margin-bottom: 20px;
`;

export const RelaxContentImage = styled.img`
    width: 80%;
    object-fit: cover;
    @media screen and (max-width: 1024px){
        margin: 0 auto;
    }
    @media screen and (max-width: 800px){
        width: 100%;
    }
`;

export const RelaxOther = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 1024px){
        display: none;
    }
`;

export const RelaxImage = styled.img`
    width: 70%;
    object-fit: cover;
`;