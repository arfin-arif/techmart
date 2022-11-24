import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { user, logIn, googleLogin } = useContext(AuthContext)
    const { handleSubmit, register, formState: { errors } } = useForm()
    const provider = new GoogleAuthProvider()


    const location = useLocation()
    const navigate = useNavigate()
    const form = location.state?.from?.pathname || '/'


    const handleEmailLogin = data => {
        console.log(data)

        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;


            })
            .catch(error => {
                console.log(error.message)

            })
    }
    const handleGoogleLogin = () => {
        googleLogin(provider)
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

                        <label className="label"><span className="label-text"> Forget Password ?</span></label>
                    </div>

                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </form>
                <p>New To Tech Mart? <Link className='text-blue-500' to='/signup'>SignUp Now</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>Sign In using GOOGLE</button>

            </div>
        </div>






    );
};

export default Login;