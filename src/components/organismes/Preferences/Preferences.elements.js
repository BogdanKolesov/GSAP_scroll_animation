import styled from 'styled-components';
import { Container } from '../../atoms';

export const PreferencesContainer = styled(Container)`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const PreferencesItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    margin: 15px;
    border: 1px solid ${props => props.theme.colors.border};
    padding: 16px;

    @media screen and (max-width: 800px){
        width: 40%;
        min-height: 180px;
    }
`;

export const PreferencesTitles = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const PreferencesIcon = styled.div`
    color: ${props => props.theme.colors.primary};
    font-size: 40px;
    @media screen and (max-width: 800px){
        font-size: 30px;
    }
`;

export const PreferencesTitle = styled.h3`
    font-size: 20px;
    color: ${props => props.theme.colors.primary};
    margin-left: 5px;
    margin-bottom: 5px;
    @media screen and (max-width: 800px){
        font-size: 16px;
    }
    @media screen and (max-width: 400px){
        font-size: 13px;
    }

`;

export const PreferencesText = styled.p`
    color: ${props => props.theme.colors.text};
    font-size: 10px;
`;