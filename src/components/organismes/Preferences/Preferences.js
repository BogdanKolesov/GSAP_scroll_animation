import React, { useEffect, useRef } from 'react';
import { PreferencesData } from '../../../data/PreferencesData';
import { PreferencesContainer, PreferencesItem, PreferencesTitles, PreferencesIcon, PreferencesTitle, PreferencesText } from './Preferences.elements';
import { gsap, TimelineLite, Power1 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Preferences = () => {
    const t1 = new TimelineLite({ delay: 0.3 });
    const preferencesRef = useRef()

    useEffect(() => {
        t1.from(
            preferencesRef.current,
            { y: 15, opacity: 0, ease: Power1.easeOut, delay: 0.1 },
            ScrollTrigger.create({
                trigger: preferencesRef.current,
                animation: t1,
                toggleActions: "restart"

            })

        )

    });
    return (
        <PreferencesContainer ref={preferencesRef} >
            {PreferencesData.map((item, index) => (
                <PreferencesItem key={index}>
                    <PreferencesTitles>
                        <PreferencesIcon>{item.icon}</PreferencesIcon>
                        <PreferencesTitle>{item.title}</PreferencesTitle>
                    </PreferencesTitles>
                    <PreferencesText>{item.text}</PreferencesText>
                </PreferencesItem>
            ))}
        </PreferencesContainer>
    );
};

export default Preferences;