import React, { useEffect, useRef } from 'react';
import { RelaxContainer, RelaxContent, RelaxTitle, RelaxText, RelaxContentImage, RelaxImage, RelaxOther } from './Relax.elements';
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Relax = () => {

    const relaxContentRef = useRef()
    const relaxImageRef = useRef()

    const t1 = gsap.timeline({ delay: 0.3 });

    useEffect(() => {
        t1.from(relaxContentRef.current,
            { x: -20, opacity: 0, ease: Power2.easeOut, delay: 0.1 },
        )
        t1.from(relaxImageRef.current,
            { x: 20, opacity: 0, ease: Power2.easeIn, delay: 0.1 },
        )
        ScrollTrigger.create({
            trigger: relaxContentRef.current,
            animation: t1,
            toggleActions: "restart"
        })
        ScrollTrigger.create({
            trigger: relaxImageRef.current,
            animation: t1,
            toggleActions: "restart"
        })
    });

    return (
        <RelaxContainer >
            <RelaxContent ref={relaxContentRef}>
                <RelaxTitle>Buy more plants, it helps you to be relaxed </RelaxTitle>
                <RelaxText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.</RelaxText>
                <RelaxContentImage src={require('../../../assets/images/Relax/image.png').default} alt="Get Relax!" />
            </RelaxContent>
            <RelaxOther>
                <RelaxImage ref={relaxImageRef} src={require('../../../assets/images/Relax/contentImage.png').default} alt="Get Relax!" />
            </RelaxOther>
        </RelaxContainer>
    );
};

export default Relax;