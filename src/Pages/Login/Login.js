import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { user, logIn, googleLogin } = useContext(AuthContext)
    const [signInUserEmail, setSignInUserEmail] = useState('');
    const { handleSubmit, register, formState: { errors } } = useForm()
    const provider = new GoogleAuthProvider()
    const [token] = useToken(signInUserEmail)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    if (token) {
        navigate(from, { replace: true })
    }
    const handleEmailLogin = data => {
        console.log(data)

        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setSignInUserEmail(data.email)
            })
            .catch(error => {
                console.log(error.message)

            })
    }
    const handleGoogleLogin = () => {
        googleLogin(provider).then(result => {
            console.log(result);
            navigate('/')
        })
    }

    return (


        <div className='h-[600px]  flex justify-center items-center'>
            <div className='w-96 p-7 bg-slate-200 rounded-xl'>
                <h2 className='text-xl text-center'>Log In</h2>
                <form onSubmit={handleSubmit(handleEmailLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text"> Email</span></label>
                        <input type='email' className='input input-bordered w-full max-w-xs'
                            {...register("email", { required: " * Email is Required" })} />
                        {errors.email && <p className='text-red-400'>{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text"> Password</span></label>
                        <input type='password' className='input input-bordered w-full max-w-xs'
                            {...register("password", {
                                required: ' * Password is Required"',
                                minLength: { value: 6, message: "Password Needs to at least 6 character" }
                            })} />
                        {errors.password && <p className='text-red-400'>{errors.password?.message}</p>}


                    </div>

                    <input className='btn btn-success mt-2 w-full' value='Login' type="submit" />
                </form>
                <p>New To Tech Mart? <Link className='text-blue-500' to='/signup'>SignUp Now</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>Sign In using GOOGLE</button>

            </div>
        </div>






    );
};

export default Login;