import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
const Login = () => {

    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");

    const handleLogin = (data) => {
        setLoginError("");
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
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



                    {/* <select {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select>
                <textarea {...register("aboutYou")} placeholder="About you" /> */}
                    <div className="form-control w-full ">
                        {
                            loginError && <p className='text-red-500'>
                                {loginError}
                            </p>
                        }
                    </div>
                    <input className='input w-full btn btn-primary mt-5' type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default Login;