// MusicPlayerContext.js
import React, { createContext, useState } from 'react';
import aud1 from '../assert/audios/Kana-Kangiren.mp3';
import aud2 from '../assert/audios/Nee-Podhum-Enaku-MassTamilan.dev.mp3';
import aud3 from '../assert/audios/Orasaadha-Usurathan-MassTamilan.com.mp3';
import aud4 from '../assert/audios/Vena-Vena.mp3';
import comebackIndian from '../assert/audios/Come Back Indian.mp3';
import manaranaMass from '../assert/audios/Marana-Mass-MassTamilan.org.mp3'
import '../assert/stylesheets/Albums.css';
const MusicPlayerContext = createContext();


const tracks = [aud1, aud2, aud3, aud4, comebackIndian, manaranaMass];
const trackNames = ['Kana Kangiren', 'Nee Podhum Enaku', 'Orasaadha Usurathan', 'Vena Vena', 'Come Back Indian', 'Marana Mass'];



const MusicPlayerProvider = ({ children }) => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleNextTrack = () => {
        // Implement logic to play the next track
        const nextIndex = (currentTrackIndex + 1) % tracks.length;
            setCurrentTrackIndex(nextIndex);
            setIsPlaying(true);
    };

    const handlePrevTrack = () => {
        // Implement logic to play the previous track
        const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
            setCurrentTrackIndex(prevIndex);
            setIsPlaying(true);
    };

    const handleSongSelect = (index) => {
        setCurrentTrackIndex(index);
        setIsPlaying(true);
    };

    return (
        <MusicPlayerContext.Provider value={{
            currentTrackIndex,
            isPlaying,
            handlePlayPause,
            handleNextTrack,
            handlePrevTrack,
            handleSongSelect,
            setCurrentTrackIndex,
            setIsPlaying
        }}>
            {children}
        </MusicPlayerContext.Provider>
    );
};

export { MusicPlayerContext, MusicPlayerProvider };
