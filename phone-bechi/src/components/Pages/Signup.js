import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    //const [data, setData] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignup = (data) => {
        console.log(data);

    }
    return (
        <div className='h-[800px] flex mt-[50px] justify-center'>
            <div className='w-96 p-7'>
                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name required" })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email required" })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold text-xl">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })} className="input input-bordered w-full " />
                    </div>
                    {/* <div className="form-control w-full">

                        <label className="label">
                            <span className="label-text font-bold text-xl">Choose profile picture</span>
                        </label>
                        <input type="file" accept='image/*' class="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100"
                        />

                    </div> */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold text-xl">User type</span>
                        </label>
                        <select className='input input-bordered w-full ' {...register("userType")}>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>

                        </select>
                        <label className="label">
                            <span className="label-text  text-sm">Already have an account? <Link to={'/login'} className='text-cyan-500 font-bold'>Login</Link></span>
                        </label>
                    </div>
                    <div className="form-control w-full text-left">
                        {
                            errors.name && <p className='text-red-500'>{errors.name.message}</p>
                        }
                        {
                            errors.email && <p className='text-red-500'>{errors.email.message}</p>
                        }
                        {
                            errors.password && <p className='text-red-500'>{errors.password.message}</p>
                        }
                    </div>




                    {/* <select {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select>
                <textarea {...register("aboutYou")} placeholder="About you" /> */}

                    <input className='input w-full btn btn-primary mt-5' type="submit" value="Sign up" />
                </form>
            </div>
        </div>
    );
};

export default Signup;