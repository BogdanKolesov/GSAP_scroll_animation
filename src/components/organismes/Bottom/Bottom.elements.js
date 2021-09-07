import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BottomContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${props => props.theme.colors.primary};
`;

export const BottomContent = styled.div`
    width: 80%;
    margin-top: 40px;
    margin-bottom: 35px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 960px){
        flex-wrap: wrap;
    }
`;

export const BottomAdress = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 960px){
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
    }
`;

export const BottomLogo = styled.h2`
    color: ${props => props.theme.colors.primary};
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 15px;
`;

export const BottomAdressText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const BottomAdressTextTitle = styled.h4`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
`;

export const BottomAdressTextDiscription = styled.p`
    font-size: 13px;
`;

export const BottomLinks = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 960px){
        width: 100%;
        margin-bottom: 15px;
    }
`;

export const BottomLinksCol = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 960px){
        width: 50%;
    }
`;

export const BottomLinkColTitle = styled.h4`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 15px;
`;

export const BottomLinksItems = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BottomLink = styled(Link)`
    font-size: 14px;
    margin-bottom: 14px;
    color: ${props => props.theme.colors.titles};
`;

export const BottomForm = styled.form`
    width: 30%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 960px){
        width: 100%;
    }
`;

export const BottomFormTitle = styled.h4`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 15px;

`;

export const BottomFormInput = styled.input`
    font-size: 12px;
    padding: 8px;
    color: ${props => props.theme.colors.titles};
    margin-bottom: 10px;

    &[placeholder]{
        color: ${props => props.theme.colors.titles};
    }
`;

export const BottomFormButton = styled.button`
    background: ${({ primary }) => (primary ? `#156963` : `transparent`)} ;
    white-space: nowrap;
    outline: none;
    border: 1px solid ${props => props.theme.colors.primary} ;;
    min-width: 100px;
    max-width: 200px;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? '16px' : '14px')};
    color: ${props => props.theme.colors.accentText};
    font-size: ${({ big }) => (big ? '20px' : '14px')};

    &:hover{
        transform: translateY(-2px);
    }
`;