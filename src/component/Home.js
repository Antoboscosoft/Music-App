import React from 'react'
import { useNavigate } from 'react-router-dom';
import img1 from '../assert/images/Timothy Sharan.jpg';
import img2 from '../assert/images/Benny Joshua.jpg'
import img3 from '../assert/images/Joseph Aldrin.png'
import '../assert/stylesheets/Home.css'

function Home() {
    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate('/dashboard');
    }

    return (
        <div className='home d-flex flex-row vh-100'>
            <div className='sidebar bg-dark d-flex flex-column align-items-center justify-content-center p-3 text-light' style={{ width: '15%', height: '100vh', maxHeight: '100vh' }}>
                <div className='d-flex align-items-center justify-content-center'>
                    <span className='fa-stack fa-lg'>
                        <i className='fa fa-circle fa-stack-2x'></i>
                        <i className='fa fa-user fa-stack-1x fa-inverse'></i>
                    </span>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <button className='btn btn-primary' onClick={() => goToDashboard()}>Dashboard</button>
                </div>
            </div>
            <div className='d-flex flex-column' style={{ width: '85%', height: '100vh', maxHeight: '100vh', overflow: 'hidden' }}>
                <div className='header bg-primary d-flex align-items-center justify-content-center' style={{ height: '10%' }}>
                    <h1 className='text-light ms-2 mt-2'>Random App</h1>
                    <div className='d-flex align-items-center justify-content-center' style={{ marginLeft: 'auto' }}>
                        <span className='fa-stack fa-lg'>
                            <i className='fa fa-circle fa-stack-2x'></i>
                            <i className='fa fa-user fa-stack-1x fa-inverse'></i>
                        </span>
                    </div>
                </div>
                <div className='body d-flex flex-row'>
                    <div className='bg-primary col-6' style={{ width: '50%', height: '90vh', maxHeight: '90vh', marginLeft: '2px', marginTop: '2px' }}>
                        <img src={img1}
                            alt='image' className='img-fluid' style={{ width: '100%', height: 'auto', opacity: '0.7' }}
                            onMouseEnter={(e) => { e.target.style.transform = 'scale(0.9)'; e.target.style.opacity = '1' }}
                            onMouseLeave={(e) => { e.target.style.transform = 'scale(1.0)'; e.target.style.opacity = '1.7' }} />
                    </div>
                    <div className='bg-primary col-6' style={{ width: '49%', height: '90vh', maxHeight: '90vh', marginLeft: '2px', marginTop: '2px' }}>
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

export default Home
