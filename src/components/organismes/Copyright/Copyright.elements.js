import styled from 'styled-components';

export const CopyrightContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};
`;

export const CopyrightContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`;

export const CopyrightText = styled.p`
    font-size: 16px;
    color: ${props => props.theme.colors.accentText};
`;