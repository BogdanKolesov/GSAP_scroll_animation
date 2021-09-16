import React from 'react';
import { RelaxContainer, RelaxContent, RelaxTitle, RelaxText, RelaxContentImage, RelaxImage, RelaxOther } from './Relax.elements';
import { gsap } from "gsap";


const Relax = () => {
    return (
        <RelaxContainer>
            <RelaxContent>
                <RelaxTitle>Buy more plants, it helps you to be relaxed </RelaxTitle>
                <RelaxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.</RelaxText>
                <RelaxContentImage src={require('../../../assets/images/Relax/image.png').default} alt="Get Relax!" />
            </RelaxContent>
            <RelaxOther>
                <RelaxImage src={require('../../../assets/images/Relax/contentImage.png').default} alt="Get Relax!" />
            </RelaxOther>
        </RelaxContainer>
    );
};

export default Relax;