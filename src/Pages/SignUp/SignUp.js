import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { createUser, updateUser, googleLogin, } = useContext(AuthContext)
    const { handleSubmit, register, formState: { errors } } = useForm();
    const provider = new GoogleAuthProvider()
    const [signUpError, setSignUpError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')

    const navigate = useNavigate();
    const location = useLocation()

    const from = location?.state?.from?.pathname || '/'


    const handleLSignup = data => {
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        storeUserInfo(data.name, data.email, data.role);
                    })
                    .catch(err => console.log(err))

            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }

    const storeUserInfo = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
                // navigate('/')
            })
    };

    const handleGoogleLogin = () => {
        googleLogin(provider).then(result => {
            console.log(result);
        })
    }

    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7  bg-slate-200 '>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleLSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text"> Name</span></label>
                        <input type='text' className='input input-bordered w-full max-w-xs'
                            {...register("name", { required: " * Name is Required" })} />
                        {errors.name && <p className='text-red-400'>{errors.name?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text"> Email</span></label>
                        <input required type='email' className='input input-bordered w-full max-w-xs'
                            {...register("email", { required: " * Email is Required" })} />
                        {errors.email && <p className='text-red-400'>{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text"> Password</span></label>
                        <input type='password' className='input input-bordered w-full max-w-xs'
                            {...register("password", {
                                required: ' * Password is Required"',
                            })} />
                        {errors.password && <p className='text-red-400'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text"> Forget Password ?</span></label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text"> Register As</span></label>
                        <select    {...register("role")} className="select select-bordered w-full max-w-xs mb-5">
                            <option defaultValue >User</option>
                            <option >Seller</option>

                        </select>
                    </div>


                    <input className='btn btn-accent w-full' value='Sign Up' type="submit" />
                    <p className='text-red-400'>{signUpError} </p>
                </form>
                <p>Already Have Account? <Link className='text-blue-500' to='/login'>Log In Now</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full' onClick={handleGoogleLogin}>Sign In using GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;