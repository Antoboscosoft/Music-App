import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { getAllUsers, loginUser, registerUser } from '../util/api';
import Swal from 'sweetalert2';
import '../assert/stylesheets/Login1.css';


function Login() {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });
    const registrationSchema = Yup.object().shape({
        fullName: Yup.string().required('Full Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    const { register: registerLogin, handleSubmit: handleLoginSubmit, formState: { errors: loginErrors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const { register: registerRegister, handleSubmit: handleRegisterSubmit, formState: { errors: registerErrors }, reset: resetRegister } = useForm({
        resolver: yupResolver(registrationSchema)
    });

    const fetchAllUsers = async () => {
        try {
            const response = await getAllUsers();
            console.log("Users fetched: ", response);
        } catch (error) {
            console.error("Error fetching users: ", error);
        }
    }

    useEffect(() => {
        fetchAllUsers();
    }, []);

    // login function
    const onLoginSubmit = async (data) => {
        console.log("Login data: ", data);
        try {
            const response = await loginUser(data);
            console.log("Login Success: ", response);

            // Handle successful login (e.g., save token, redirect)
            localStorage.setItem('token', response?.data?.token);
            localStorage.setItem("loggedInUser", data?.username);
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'You have successfully logged in!',
                confirmButtonText: 'OK',
                confirmButtonColor: '#007bff',
                backdrop: true,
                timer: 2500
            });
            navigate('/music-player1');
        } catch (error) {
            console.log("Login Failed: ", error);
            // alert(error.message || 'Login failed');
            Swal.fire({
                icon: 'error',
                title: 'Check username or password || Login Failed',
                text: error.message || 'Login failed',
            });
        }
    };

    // register function
    const onRegisterSubmit = async (data) => {
        console.log("Register data: ", data);
        try {
            const response = await registerUser(data);
            console.log("Registration Success: ", response);
            if(response === "User created successfully!") {
                resetRegister();
            navigate('/login');
            }
            // Handle successful login (e.g., save token, redirect)
            localStorage.setItem('token', response?.data?.token);
            Swal.fire({
                icon: 'success',
                // title: response,
                text: response,
                confirmButtonText: 'OK',
                confirmButtonColor: '#007bff',
                backdrop: true,
                timer: 2500
            });
            // Optionally, switch back to login form
            switchCard();
        } catch (error) {
            console.log("Registration Failed: ", error);
            // alert(error.message || 'Login failed');
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: error.message || 'Registration failed',
                timer: 10000
            });
        }
    }

    const handleFormKeyDown = (event) => {
        if(event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission on key press
        }
    }

    // function switchCard() {
    const switchCard = () => {
        var checkbox = document.querySelector('.checkbox');
        checkbox.click();
    }

    return (
        <div className=''>
            <div className='d-flex justify-content-center align-items-center mt-5 p-2 login-form'>
                <form onSubmit={handleLoginSubmit(onLoginSubmit)} onKeyDown={handleFormKeyDown}>

                    {/* <h2 className='login-title me-5'>Login</h2> */}
                    {/* <div className='form-group mb-3 mt-3 p-2'>
                        <label className='form-label' htmlFor='username'>Username</label>
                        <input
                            className='form-input'
                            id='username'
                            name='username'
                            type='text'
                            {...register('username')}
                        />
                        {errors.username && <div>{errors.username.message}</div>}
                    </div>
                    <div className='form-group mb-3 mt-3 p-2'>
                        <label className='form-label' htmlFor='password'>Password</label>
                        <input
                            className='form-input'
                            id='password'
                            name='password'
                            type='password'
                            {...register('password')}
                        />
                        {errors.password && <div>{errors.password.message}</div>}
                    </div>
                    <button type='submit' className='zoom-button'>Login</button> */}
                    <div class="section">
                        <div class="container">
                            <div class="row full-height justify-content-center">
                                <div class="col-12 text-center align-self-center py-5">
                                    <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                        {/* <h6 class="mb-0 pb-3 text-black">
                                            <span>Log In </span>
                                            <span>Sign Up</span>
                                        </h6> */}
                                        <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                        {/* <label for="reg-log"></label> */}
                                        <div class="card-3d-wrap mx-auto">
                                            <div class="card-3d-wrapper">

                                                <div class="card-front">
                                                    <div class="center-wrap">
                                                        <div class="section text-center">
                                                            <h4 class="mt-4 pb-0 text-white">Log In</h4>
                                                            {/* <div class="form-group">
                                                                <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                                                <i class="input-icon uil uil-at"></i>
                                                            </div> */}
                                                            <div className='form-group mb-3 mt-3 p-2'>
                                                                <div className='d-flex position-absolute mt-5 text-white ms-3' style={{ width: '25px', height: '25px' }}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-heart" viewBox="0 0 16 16">
                                                                        <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z" />
                                                                    </svg>
                                                                </div>
                                                                <label className='form-label d-flex text-white' htmlFor='username'>Username</label>
                                                                <input className='form-input form-style' id='username' placeholder="Your Username" name='username' type='text' {...registerLogin('username')} />
                                                                {loginErrors?.username && <div>{loginErrors?.username.message}</div>}
                                                            </div>
                                                            {/* <div class="form-group mt-2">
                                                                <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                                                <i class="input-icon uil uil-lock-alt"></i>
                                                            </div> */}
                                                            <div className='form-group mb-3 mt-3 p-2'>
                                                                <div className='d-flex position-absolute mt-5 text-white ms-3' style={{ width: '25px', height: '25px' }}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                                                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                                                                    </svg>
                                                                </div>
                                                                <label className='form-label d-flex text-white' htmlFor='password'>Password</label>
                                                                <input className='form-input form-style' id='password' name='password' type='password' {...registerLogin('password')} />
                                                                {loginErrors?.password && <div>{loginErrors?.password.message}</div>}
                                                            </div>
                                                            {/* <a href="#" class="btn mt-4">submit</a> */}
                                                            <button type='submit' className='zoom-button btn1 btn-outline-primary'>Login</button>
                                                            <div className='d-flex justify-content-center'>
                                                                <p className='text-white'>Don't have an account ? &nbsp;</p>
                                                                <p class="mb-0 text-center"><a class="link" onClick={switchCard}> Sign Up</a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* </form> */}
                                                <div class="card-back">
                                                    <div class="center-wrap">
                                                        <div class="section text-center">
                                                            <h4 class="mt-4 pb-0 text-white">Sign Up</h4>
                                                            <div>
                                                            {/* <form onSubmit={handleRegisterSubmit(onRegisterSubmit)} onKeyDown={handleFormKeyDown}> */}
                                                                <div class="form-group">
                                                                    <input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off"  {...registerRegister('fullName')} />
                                                                    {registerErrors?.name && <div>{registerErrors.name.message}</div>}
                                                                    <i class="input-icon uil uil-user"></i>
                                                                </div>
                                                                <div class="form-group mt-2">
                                                                    <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"  {...registerRegister('email')} />
                                                                    {registerErrors.email && <div>{registerErrors.email.message}</div>}
                                                                    <i class="input-icon uil uil-at"></i>
                                                                </div>
                                                                <div class="form-group mt-2">
                                                                    {/* <input type='text' name="username" class="form-style" placeholder="Your Username" id="username" autocomplete="off" /> */}
                                                                    <input id="username" name="username" className='form-style' placeholder="Your Username" autocomplete="off" type="text" {...registerRegister('username')}
                                                                    />
                                                                    {registerErrors?.username && <div className='error-message'>{registerErrors?.username.message}</div>}
                                                                </div>
                                                                <div class="form-group mt-2">
                                                                    <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" {...registerRegister('password')} />
                                                                    {registerErrors.password && <div>{registerErrors.password.message}</div>}
                                                                    <i class="input-icon uil uil-lock-alt"></i>
                                                                </div>
                                                                {/* <button type='submit' className='btn mt-4'>Register</button> */}
                                                                <button type='button' onClick={handleRegisterSubmit(onRegisterSubmit)} class="btn1 mt-4">submit1</button>
                                                                <div className='d-flex justify-content-center'>
                                                                    <p className='text-white'>If you have an account ? &nbsp;</p>
                                                                    <p class="mt-0 text-center"><a class="link" onClick={switchCard}> Sign In</a></p>
                                                                </div>
                                                                {/* </form> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {/* <div className='register-link mt-3 ms-5'>
                    If you don't have a account ?
                    <Link to='/register'> Sign Up</Link>
                </div> */}
            </div>
        </div>
    )
}

export default Login