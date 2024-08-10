import React, { useEffect, useRef, useState } from 'react';
import '../assert/stylesheets/MusicPlayer.css';
import { Link, Outlet } from 'react-router-dom';
import img1 from '../assert/images/profile-picture1.jpg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { MusicPlayerProvider } from '../component/MusicPlayerContext';

import Albums from '../pages/Albums';
import Artists from '../pages/Artists';
import Playlists from '../pages/Playlists';
import Songs from '../pages/Songs';


import aud1 from '../assert/audios/Kana-Kangiren.mp3';
import aud2 from '../assert/audios/Nee-Podhum-Enaku-MassTamilan.dev.mp3';
import aud3 from '../assert/audios/Orasaadha-Usurathan-MassTamilan.com.mp3';
import aud4 from '../assert/audios/Vena-Vena.mp3';
import comebackIndian from '../assert/audios/Come Back Indian.mp3';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { CgMiniPlayer } from 'react-icons/cg';

const tracks = [aud1, aud2, aud3, aud4, comebackIndian];
const trackNames = ['Kana Kangiren', 'Nee Podhum Enaku', 'Orasaadha Usurathan', 'Vena Vena', 'Come Back Indian'];


function MusicPlayer1() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(Math.floor(Math.random() * tracks.length));
    const audioPlayerRef = useRef();
    const [currTime, setCurrTime] = useState({ min: 0, sec: 0 });
    const [duration, setDuration] = useState(0);
    const [seconds, setSeconds] = useState(0);




    const [currentView, setCurrentView] = useState('albums');

    const [currentSong, setCurrentSong] = useState({
        title: 'Vena Vena',
        artists: 'Udit Narayan, S...',
        imageUrl: 'https://th.bing.com/th?id=OVP.8VP5IOOIPkgZJmhpHs4gRgEsDh&w=197&h=110&c=7&rs=1&qlt=90&o=6&pid=1.7',
        audioUrl: '/path/to/your/audio.mp3',
    });

    const renderContent = () => {
        switch (currentView) {
            case 'albums':
                return <Albums />;
            case 'artists':
                return <Artists />;
            case 'songs':
                return <Songs />;
            case 'playlists':
                return <Playlists />;
            default:
                return currentView;
        }
    };

    useEffect(() => {
        if (audioPlayerRef?.current?.audio?.current) {
            audioPlayerRef.current.audio.current.onloadedmetadata = () => {
                setDuration(audioPlayerRef.current.audio.current.duration);
            };
        }
    }, [currentTrackIndex]);

    const playingButton = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audioPlayerRef.current.audio.current.pause();
            setIsPlaying(false);
        } else {
            audioPlayerRef.current.audio.current.play();
            setIsPlaying(true);
        }
    };

    const handleNextTrack = () => {
        // Implement logic to play the next song
        setCurrentTrackIndex((currentTrackIndex + 1) % tracks.length);
        setIsPlaying(true);
        audioPlayerRef.current.audio.current.play();
    };

    const handlePrevTrack = () => {
        // Implement logic to play the previous song
        setCurrentTrackIndex((currentTrackIndex - 1 + tracks.length) % tracks.length);
        setIsPlaying(true);
        audioPlayerRef.current.audio.current.play();
    };

    const handleTimeUpdate = () => {
        const currentTime = audioPlayerRef.current.audio.current.currentTime;
        const min = Math.floor(currentTime / 60);
        const sec = Math.floor(currentTime % 60);
        setCurrTime({ min, sec });
        setSeconds(currentTime);
    }

    const handleSeek = (value) => {
        if (audioPlayerRef.current.audio.current) {
            audioPlayerRef.current.audio.current.currentTime = value;
            setSeconds(value);
        }
    }

    return (
        <>
        <div className='music-player'>
            {/* <div className='top-bar'>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/music-player1/albums' className='nav-link active'>Albums</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/music-player1/artists' className='nav-link active'>Artists</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/music-player1/songs' className='nav-link active'>Songs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/music-player1/playlists' className='nav-link active'>Playlists</Link>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center">
                            <div>
                                <button className="btn btn-outline-light dropdown-toggle" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: 'none' }}>
                                    <img src={img1} alt='profile' className='profile rounded-circle' style={{ width: '40px', height: '40px' }} />
                                </button>
                                <ul className='dropdown-menu dropdown-menu-end' aria-labelledby='profileDropdown'>
                                    <li><a className='decoration-none dropdown-item'> <Link to='/dashboard'>Logout</Link></a></li>
                                    <li><a className='dropdown-item'>Settings</a></li>
                                    <li><a className='dropdown-item'>Profile</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </div> */}

            {/* <div className='mini-player fixed-bottom bg-light p-3 shadow'>
                <div className='row align-items-center'>
                    <div className='col-3'>
                        <img src={currentSong.imageUrl} alt={currentSong.title} className='img-fluid rounded' />
                    </div>
                    <div className='col-6 text-center'>
                        <p className='mb-1'>{trackNames[currentTrackIndex]}</p>
                        <p className='text-muted'>Artist Name</p>
                        <div className='d-flex align-items-center justify-content-center '>
                            <button className='btn btn-primary me-2' onClick={handlePreviousSong}> <i className="fa fa-backward"></i> </button>
                            <button className='btn btn-primary me-2' onClick={handlePlayPause}> {isPlaying ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>} </button>
                            <button className='btn btn-primary' onClick={handleNextSong}> <i className="fa fa-forward"></i> </button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className='mini-player fixed-bottom bg-light p-3 shadow'>
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
            </div> */}

            {/* <AudioPlayer
                ref={audioPlayerRef}
                src={tracks[currentTrackIndex]}
                onEnded={() => handleNextTrack()}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onListen={() => handleTimeUpdate()}
                style={{ display: 'none' }}
            /> */}

            <MusicPlayerProvider>
                <div className='music-player'>
                    <div className='top-bar'>
                        <nav className="navbar navbar-expand navbar-dark bg-dark m-0 p-2">
                            <div className="container-fluid">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item me-1">
                                        <Link to='/music-player1/albums' className='nav-link active'>Albums</Link>
                                    </li>
                                    <li className="nav-item me-1">
                                        <Link to='/music-player1/artists' className='nav-link active'>Artists</Link>
                                    </li>
                                    <li className="nav-item me-1">
                                        <Link to='/music-player1/songs' className='nav-link active'>Songs</Link>
                                    </li>
                                    <li className="nav-item ne-1">
                                        <Link to='/music-player1/playlists' className='nav-link active'>Playlists</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='profile_icon'>
                                <p className='profile_name mb-4 me-2'>{localStorage.getItem('loggedInUser')}</p>

                                <button className="btn btn-outline-light dropdown-toggle" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: 'none' }}>
                                    <img src={img1} alt='profile' className='profile rounded-circle' style={{ width: '40px', height: '40px' }} />
                                </button>
                                <ul className='dropdown-menu dropdown-menu-end' aria-labelledby='profileDropdown'>
                                    <li><Link to='/login' className='dropdown-item'>Logout</Link></li>
                                    <li><a className='dropdown-item'>Settings</a></li>
                                    <li><a className='dropdown-item'>Profile</a></li>
                                </ul>
                            </div>
                        </nav>

                        <Outlet />
                    </div>

                    {/* <CgMiniPlayer /> */}
                </div>
            </MusicPlayerProvider>

        </div>
        </>
    )
}

export default MusicPlayer1