import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import useSound from 'use-sound';
import '../assert/stylesheets/MusicPlayer.css';
import aud1 from '../assert/audios/Kana-Kangiren.mp3';
import aud2 from '../assert/audios/Nee-Podhum-Enaku-MassTamilan.dev.mp3';
import aud3 from '../assert/audios/Orasaadha-Usurathan-MassTamilan.com.mp3';
import aud4 from '../assert/audios/Vena-Vena.mp3';

const tracks = [aud1, aud2, aud3, aud4];
const trackNames = ['Kana Kangiren', 'Nee Podhum Enaku', 'Orasaadha Usurathan', 'Vena Vena'];

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(Math.floor(Math.random() * tracks.length));
  const [play, { pause, duration, sound, stop }] = useSound(tracks[currentTrackIndex], {
    // onPlay: () => setIsPlaying(true),
    // onPause: () => setIsPlaying(false),
    onend: () => handleNextTrack(),
  });

  const [currTime, setCurrTime] = useState({
    min: '',
    sec: '',
  });

  const totalSec = Math.floor(duration/1000);
  const totalMin = Math.floor(totalSec/60);
  const totalSecRemain = totalSec%60;
  const totalTime = {
    min: totalMin,
    sec: totalSecRemain
  }

  const [seconds, setSeconds] = useState();

  useEffect(()=> {
    if(isPlaying){
      play();
    }
  },[currentTrackIndex, play, isPlaying]);

  useEffect(()=> {
    const interval = setInterval(() => {
      if(sound){
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([])/60);
        const sec = Math.floor(sound.seek([])%60);
        setCurrTime({
          min,
          sec
        });
      }
    },1000);
    return () => clearInterval(interval);
  }, [sound]);


  const playingButton = () => {
    if (isPlaying) {
      pause();// this will pause the audio
      setIsPlaying(false);
    } else {
      play();// this will play the audio
      setIsPlaying(true);
    }
  };

  const selectTrack = (index) => {
    // if(play){
      stop();
    // }
    setCurrentTrackIndex(index);
    setIsPlaying(false); 
    // play({id: tracks[index]});
    // setIsPlaying(true);
  }

  const handleNextTrack = () => {
    // if(play){
    stop(); // Stop the current playing track
    // }
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(false);
  }

  const handlePrevTrack = () => {
    // if(play){
    stop();
    // }
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(false);
  }

  return (
    <div className='d-flex flex-column'>
      <h1>Music Player</h1>
      <div className='component'>
        <h2>Playing Now</h2>
        <img className='musicCover' src='https://picsum.photos/200/200' />
        <div>
          <h3 className='musicTitle'>{trackNames[currentTrackIndex]}</h3>
          <p className='subTitle'>From Soran artist</p>
        </div>
        <div>
          <div className='time'>
            <p>
              {currTime.min}:{currTime.sec}
            </p>
            <p>{totalTime.min}:{totalTime.sec}</p>
          </div>
          <input
            type='range'
            min={0}
            max={duration / 1000}
            // default={0}
            value={seconds}
            className='timeline'
            onChange={(e) => {
              setSeconds(e.target.value);
              sound.seek([e.target.value]);
            }}
          />
        </div>
        <div>
          <button className='playButton'  onClick={()=>handlePrevTrack()}>
            <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
              <BiSkipPrevious />
            </IconContext.Provider>
          </button>
          {!isPlaying ? (
            <button className='playButton' onClick={playingButton}>
              <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button className='playButton' onClick={playingButton}>
              <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
          <button className='playButton' onClick={handleNextTrack}>
            <IconContext.Provider value={{ size: '3em', color: '#27AE60' }}>
              <BiSkipNext />
            </IconContext.Provider>
          </button>
        </div>
      </div>
          <div className='playlist'>
            <h2>Playlist</h2>
            <ul>
              {trackNames.map((name, index) => (
                <li key={index} onClick={() => selectTrack(index)}>{name}</li>
              ))}
            </ul>
          </div>
    </div>
  )
}

export default MusicPlayer