import React from 'react';
import { HeroContainer, HeroBackground, HeroWrapper, HeroContent, HeroTitle, HeroText, HeroButton } from './Hero.elements';


const Hero = () => {
    return (
        <HeroContainer>
            <HeroBackground src={require('../../../assets/images/Hero/Background.jpg').default} />
            <HeroWrapper>
                <HeroContent>
                    <HeroTitle>Kembang Flower Mantap</HeroTitle>
                    <HeroText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </HeroText>
                    <HeroButton primary to='/'>Buy it!</HeroButton>
                </HeroContent>
            </HeroWrapper>
        </HeroContainer>
    );
};

export default Hero;