import React from 'react';
import styled from 'styled-components';
import { Container } from '../atoms';

const DoubleContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Right = styled.div`
    width: 40%
`;

const Left = styled.div`
    width: 60%
`;

const DoubleBlock = (right, left) => {
    return (
        <DoubleContainer>
            <Left>
                {left}
            </Left>
            <Right>
                {right}
            </Right>
        </DoubleContainer>
    );
};

export default DoubleBlock;