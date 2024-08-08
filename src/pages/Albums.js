import React, { useContext, useEffect, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import { MusicPlayerContext } from '../component/MusicPlayerContext';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import aud1 from '../assert/audios/Kana-Kangiren.mp3';
import aud2 from '../assert/audios/Nee-Podhum-Enaku-MassTamilan.dev.mp3';
import aud3 from '../assert/audios/Orasaadha-Usurathan-MassTamilan.com.mp3';
import aud4 from '../assert/audios/Vena-Vena.mp3';
import comebackIndian from '../assert/audios/Come Back Indian.mp3';
import manaranaMass from '../assert/audios/Marana-Mass-MassTamilan.org.mp3'
import '../assert/stylesheets/Albums.css';

const tracks = [aud1, aud2, aud3, aud4, comebackIndian, manaranaMass];
const trackNames = ['Kana Kangiren', 'Nee Podhum Enaku', 'Orasaadha Usurathan', 'Vena Vena', 'Come Back Indian', 'Marana Mass'];

function Albums() {
    const { currentTrackIndex, isPlaying, handleSongSelect, handleNextTrack, handlePrevTrack, setIsPlaying, setCurrentTrackIndex } = useContext(MusicPlayerContext);

    // const [isPlaying, setIsPlaying] = useState(false);
    // const [currentTrackIndex, setCurrentTrackIndex] = useState(Math.floor(Math.random() * tracks.length));
    const audioPlayerRef = useRef();

    const [currTime, setCurrTime] = useState({ min: 0, sec: 0 });
    const [duration, setDuration] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (audioPlayerRef?.current?.audio?.current) {
            audioPlayerRef.current.audio.current.onloadedmetadata = () => {
                setDuration(audioPlayerRef.current.audio.current.duration);
            };
        }
    }, [currentTrackIndex]);

    const playingButton = () => {
        if (isPlaying) {
            audioPlayerRef.current.audio.current.pause();
            setIsPlaying(false);
        } else {
            audioPlayerRef.current.audio.current.play();
            setIsPlaying(true);
        }
    };

    const selectTrack = (index) => {
        setCurrentTrackIndex(index);
        setIsPlaying(true);
    }

    // const handleNextTrack = () => {
    //     const nextIndex = (currentTrackIndex + 1) % tracks.length;
    //     setCurrentTrackIndex(nextIndex);
    //     setIsPlaying(true);
    // }

    // const handlePrevTrack = () => {
    //     const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    //     setCurrentTrackIndex(prevIndex);
    //     setIsPlaying(true);
    // }

    const handleSeek = (value) => {
        if (audioPlayerRef.current.audio.current) {
            audioPlayerRef.current.audio.current.currentTime = value;
            setSeconds(value);
        }
    }

    const handleTimeUpdate = () => {
        const currentTime = audioPlayerRef.current.audio.current.currentTime;
        const min = Math.floor(currentTime / 60);
        const sec = Math.floor(currentTime % 60);
        setCurrTime({ min, sec });
        setSeconds(currentTime);
    }

    return (
        <div className='container albums'>
            <div className='row'>
                {trackNames.map((trackName, index) => (
                    <div key={index} className='col-md-3 mb-4'>
                        <div className='album-item card' onClick={() => selectTrack(index)}>
                            <img src={`https://picsum.photos/200/200?random=${index}`} alt={trackName} className='card-img-top img-fluid' />
                            <div className='card-body'>
                                <h3 className='card-title'>{trackName}</h3>
                                <p className='card-text'>Artist Name</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='mini-player fixed-bottom bg-light p-2 shadow'>
                <div className='row align-items-center'>
                    <div className='col-3'>
                        <img src={`https://picsum.photos/200/200?random=${currentTrackIndex}`} alt={trackNames[currentTrackIndex]} className='img-fluid rounded' />
                    </div>
                    <div className='col-6 text-center'>
                        <p className='mb-1'>{trackNames[currentTrackIndex]}</p>
                        <p className='text-muted'>Artist Name</p>
                        <IconContext.Provider value={{ className: 'react-icons', size: '3em', color: '#27AE60' }}>
                            <BiSkipPrevious onClick={handlePrevTrack} />
                            {isPlaying ?
                                <AiFillPauseCircle onClick={playingButton} />
                                :
                                <AiFillPlayCircle onClick={playingButton} />
                            }
                            <BiSkipNext onClick={handleNextTrack} />
                        </IconContext.Provider>
                    </div>
                    <div className='col-3'>
                        <input type='range' min={0} max={Math.floor(duration)} value={seconds} className='form-range' onChange={(e) => handleSeek(e.target.value)} />
                        <div className='d-flex justify-content-between'>
                            <span>{currTime.min}:{currTime.sec < 10 ? `0${currTime.sec}` : currTime.sec}</span>
                            <span>{Math.floor(duration / 60)}:{Math.floor(duration % 60) < 10 ? `0${Math.floor(duration % 60)}` : Math.floor(duration % 60)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <AudioPlayer
                ref={audioPlayerRef}
                src={tracks[currentTrackIndex]}
                onEnded={() => handleNextTrack()}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onListen={() => handleTimeUpdate()}
                style={{ display: 'none' }}
            />

            <div className="container row">
                {/* <a href="https://twitter.com/Dave_Conner" class="btn btn-5">Hover</a> */}
                {/* <button class="glow-on-hover btn" type="button">HOVER ME, THEN CLICK ME!</button> */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <dfn data-info="Lorem ipsum dolor sit amet, perspiciatis consectetur dolor.">Perspiciatis consectetur</dfn></p> */}
            </div>
        </div>
    )
}

export default Albums