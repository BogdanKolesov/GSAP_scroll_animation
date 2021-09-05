import React from 'react';
import { PreferencesData } from '../../../data/PreferencesData';
import { PreferencesContainer, PreferencesItem, PreferencesTitles, PreferencesIcon, PreferencesTitle, PreferencesText } from './Preferences.elements';

const Preferences = () => {
    return (
        <PreferencesContainer>
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