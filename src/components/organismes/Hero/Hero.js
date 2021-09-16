import React, { useEffect, useRef } from 'react';
import { HeroContainer, HeroBackground, HeroWrapper, HeroContent, HeroTitle, HeroText, HeroButton } from './Hero.elements';
import gsap from 'gsap';

const Hero = () => {
    const heroContent = useRef()
    useEffect(() => {
        gsap.fromTo(
            heroContent.current,
            { opacity: 0 },
            { opacity: 1, duration: 2.2 }
        );

    });
    return (
        <HeroContainer>
            <HeroBackground src={require('../../../assets/images/Hero/Background.jpg').default} />
            <HeroWrapper>
                <HeroContent ref={heroContent}>
                    <HeroTitle>Kembang Flower Mantap</HeroTitle>
                    <HeroText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </HeroText>
                    <HeroButton primary to='/'>Buy it!</HeroButton>
                </HeroContent>
            </HeroWrapper>
        </HeroContainer>
    );
};

export default Hero;