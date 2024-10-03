import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, clearError } from '../features/auth/authSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        return () => {
            dispatch(clearError());
        };
    }, [dispatch]);

    const loginForm = (data) => {
        dispatch(loginUser(data.email, data.password))
            .then(() => {
                toast.success('Successfully logged in!');
                navigate('/'); // Move navigate here without chaining to toast
            })
            .catch(() => {
                toast.error('Login failed. Please try again.');
            });
    };

    return (
        <div className="col-7 mx-auto my-5 p-5 shadow">
            <Toaster />
            <h1 className="my-4">Login</h1>
            <form onSubmit={handleSubmit(loginForm)}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder='Enter Email Id'
                        {...register('email', {
                            required: { value: true, message: "Please Enter Email Id" },
                        })}
                    />
                    <p className='text-danger'>{errors?.email?.message}</p>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder='Enter Password'
                        {...register('password', {
                            required: { value: true, message: "Please Enter Password" },
                            minLength: { value: 8, message: 'At least 8 characters' },
                        })}
                    />
                    <p className='text-danger'>{errors?.password?.message}</p>
                </div>
                <button className="btn btn-success">Login</button>
                <NavLink className="ms-3" to="/register">Sign up</NavLink>
            </form>
        </div>
    );
};

export default LoginPage;
