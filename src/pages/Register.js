import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup';
import '../assert/stylesheets/Register.css'
import { registerUser } from '../util/api';
import Swal from 'sweetalert2';

function Register() {

    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Full Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        mobileNumber: Yup.string().required('Mobile Number is required'),
        gender: Yup.string().required('Gender is required'),
        preferredLanguage: Yup.string().required('Preferred Language is required'),
      });
    
      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
      });
    
      const onSubmit = async(data) => {
        console.log('Register:', data);
        try {
            const response = await registerUser(data);
            console.log("User registered Success: ", response);

            // Handle successful login (e.g., save token, redirect)
            localStorage.setItem('token', response?.data?.token);
            Swal.fire({ 
                icon: 'success',
                title: 'Registration Successful',
                text: 'You have successfully registered!',
                confirmButtonText: 'OK',
                confirmButtonColor: '#007bff',
                backdrop: true,
                timer: 2500
            })
            navigate('/login');
        } catch (error) {
            console.log("Login Failed: ", error);
            alert(error.message || 'Login failed');
        }
      };

    return (
        <div className='register-container p-2'>
            <h2 className='register-title'>Register</h2>
            <form className='register-form form-group' onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3 p-2 mt-2'>
                    <label className='form-label' htmlFor="fullname">Full Name</label>
                    <input
                        id="fullname"
                        name="fullname"
                        type="text"
                        {...register('fullname')}
                    />
                    {errors.fullname && <div className='error-message'>{errors.fullname.message}</div>}
                </div>
                <div className='mb-3 p-2 mt-2'>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        {...register('email')}
                    />
                    {errors.email && <div className='error-message'>{errors.email.message}</div>}
                </div>
                <div className='mb-3 p-2 mt-2'>
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input
                        id="mobileNumber"
                        name="mobileNumber"
                        type="text"
                        {...register('mobileNumber')}
                    />
                    {errors.mobileNumber && <div className='error-message'>{errors.mobileNumber.message}</div>}
                </div>
                <div className='mb-3 p-2 mt-2'>
                    <label htmlFor="gender">Gender</label>
                    <input
                        id="gender"
                        name="gender"
                        type="text"
                        {...register('gender')}
                    />
                    {errors.gender && <div className='error-message'>{errors.gender.message}</div>}
                </div>
                <div className='mb-3 p-2 mt-2'>
                    <label htmlFor="preferredLanguage">Preferred Language</label>
                    <input
                        id="preferredLanguage"
                        name="preferredLanguage"
                        type="text"
                        {...register('preferredLanguage')}
                    />
                    {errors.preferredLanguage && <div className='error-message'>{errors.preferredLanguage.message}</div>}
                </div>

                <div className='mb-3 p-2 mt-2'>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        {...register('username')}
                    />
                    {errors.username && <div className='error-message'>{errors.username.message}</div>}
                </div>
                <div className='mb-3 p-2 mt-2'>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        {...register('password')}
                    />
                    {errors.password && <div className='error-message'>{errors.password.message}</div>}
                </div>
                <button className='btn btn-primary mt-3' type="submit">Register</button>
            </form>
            <Link to="/login">Sign In</Link>
        </div >
    )
}

export default Register