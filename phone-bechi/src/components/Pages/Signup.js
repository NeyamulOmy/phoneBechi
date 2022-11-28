import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
    //const [data, setData] = useState('');
    //const [createdUserEmail, setCreatedUserEmail] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const handleSignup = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.userType)
                    })
                    .catch(err => console.error(err))
                toast.success("User created successfully!")

            })
            .catch(error => console.error(error));

    }
    const saveUser = (name, email, userType) => {
        const user = { name, email, userType };
        fetch('https://server-sooty-xi.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                //setCreatedUserEmail(email);
            })
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