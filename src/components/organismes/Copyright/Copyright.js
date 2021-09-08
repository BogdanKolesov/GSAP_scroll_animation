import React from 'react';
import { CopyrightContainer, CopyrightContent, CopyrightText } from './Copyright.elements';

const Copyright = () => {
    return (
        <CopyrightContainer>
            <CopyrightContent>
                <CopyrightText>Created by Bogdan Kolesov, 2021</CopyrightText>
            </CopyrightContent>
        </CopyrightContainer>
    );
};

export default Copyright;