import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
const Login = () => {

    const { register, handleSubmit } = useForm();
    const { signIn, setLoading, handleGoogleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const Googleprovider = new GoogleAuthProvider();
    const from = location.state?.from?.pathname || '/';
    const handleGoogle = () => {
        handleGoogleSignIn(Googleprovider)
            .then((result) => {


                const user = result.user;

                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    userType: "Buyer",
                }


                fetch(' http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {



                        }
                    })
                    .catch(er => console.error(er));

                navigate(from, { replace: true });
            }).catch((error) => {
                console.log("error : ", error);
            })
    }

    const handleLogin = (data) => {
        setLoginError("");
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                setLoginError(error.message)
            });
    }
    return (
        <div className='h-[800px] flex mt-[50px] justify-center'>
            <div className='w-96 p-7'>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Email</span>
                        </label>
                        <input type="email" {...register("email")} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Password</span>
                        </label>
                        <input type="password" {...register("password")} className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text  text-sm">Don't have an account? <Link to={'/signup'} className='text-cyan-500 font-bold'>Sign up</Link></span>
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        {
                            loginError && <p className='text-red-500'>
                                {loginError}
                            </p>
                        }
                    </div>
                    <input className='input w-full btn btn-primary mt-5' type="submit" value="Login" />
                </form>
                <div className="w-full mt-3 ">
                    <button className="btn btn-info btn-outline" onClick={handleGoogle}>
                        <img src='https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1' style={{ height: "40px", borderRadius: "50%", marginRight: "5px" }} alt='' />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;