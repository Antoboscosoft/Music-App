import React, { useState } from 'react';
import trackNames from '../component/MusicPlayer1'; // Assuming you have a data file with track names
import selectTrack from '../pages/Albums'; // Assuming you have a utility function for track selection
import mainbackground from '../assert/images/join-pic.jpg'
import mainbackground1 from '../assert/videos/b3-1.mp4';
import mainbackground10 from '../assert/videos/baby playing.mp4'
import { useNavigate } from 'react-router-dom';
const MainPage = () => {

    const navigate = useNavigate();

    const NavToLogin = () => {
        navigate('/login');
        // navigate('/login1');
    }

    return (
        <>
        <div className='d-flex flex-wrap justify-content-center '>
            {/* <img src={mainbackground} alt="mainbackground" className='img-fluid' /> */}
            <video autoPlay muted loop className='img-fluid'>
                <source src={mainbackground1} type="video/mp4" />
            </video>
            <div className='main_text' 
            style={{position: 'absolute', top: '20%', left: '25%', transform: 'translate(-50%, -50%)'}}
             onClick={() => NavToLogin()}>Nav To Login</div>
        </div>

            {/* {trackNames.map((trackName, index) => (
                <div key={index} className='col-md-3 mb-4'>
                    <div className='album-item card' onClick={() => selectTrack(index)}>
                        <img src={`https://picsum.photos/200/200?random=${index}`} alt={trackName} className='card-img-top img-fluid' />
                        <div className='card-body'>
                            <h3 className='card-title'>{trackName}</h3>
                            <p className='card-text'>Artist Name</p>
                        </div>
                    </div>
                </div>
            ))} */}
        </>
    );
};

export default MainPage;