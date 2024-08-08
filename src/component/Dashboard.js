import React from 'react';

import img1 from '../assert/images/Timothy Sharan.jpg';
import img2 from '../assert/images/Benny Joshua.jpg'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import MusicPlayer1 from './MusicPlayer1';

function Dashboard() {

    const navigate = useNavigate();

    const MusicPlayer = () => {
        navigate('/music-player');
    }

    const MusicPlayer1 = () => {
        navigate('/music-player1');
    }

    return (
        <div>
            <div className='d-flex flex-column' style={{ width: '100%', height: '100vh', maxHeight: '100vh', overflow: 'hidden' }}>
                <div className='header bg-info d-flex align-items-center justify-content-center' style={{ height: '10%' }}>
                    <h1 className='text-light ms-2 mt-2'>Random App</h1>
                    <div className='d-flex align-items-center justify-content-center' style={{ marginLeft: 'auto' }}>
                        <span className='fa-stack fa-lg'>
                            <i className='fa fa-circle fa-stack-2x'></i>
                            <i className='fa fa-user fa-stack-1x fa-inverse'></i>
                        </span>
                    </div>
                    <div>
                    <Link to={'/'}>Home</Link>

                    <nav>
                        <Link to={'/dashboard/profile'}>Profile</Link>
                        <Link to={'/dashboard/mysettings'}>MySettings</Link>
                    </nav>
                    <Outlet />
                </div>
                </div>
                <div className='body d-flex flex-row' style={{ height: '100vh', maxHeight: '100vh' }}>
                    <div className='bg-primary col-6' onClick={() => {MusicPlayer() }} style={{ width: '50%', height: '100vh', maxHeight: '100vh', marginLeft: '2px', marginTop: '2px' }}>
                        <img src={img1}
                            alt='image' className='img-fluid' style={{ width: '100%', height: 'auto', opacity: '0.7' }}
                            onMouseEnter={(e) => { e.target.style.transform = 'scale(0.9)'; e.target.style.opacity = '1' }}
                            onMouseLeave={(e) => { e.target.style.transform = 'scale(1.0)'; e.target.style.opacity = '1.7' }} />
                    </div>
                    <div className='bg-primary col-6' onClick={() => {MusicPlayer1() }} style={{ width: '50%', height: '100vh', maxHeight: '100vh', marginLeft: '2px', marginTop: '2px' }}>
                        <img src={img2}
                            alt='image' className='img-fluid' style={{ width: '100%', height: 'auto', opacity: '0.7' }}
                            onMouseEnter={(e) => { e.target.style.transform = 'scale(1.0)'; e.target.style.opacity = '1' }}
                            onMouseLeave={(e) => { e.target.style.transform = 'scale(0.9)'; e.target.style.opacity = '1.7' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard