import { useQuery } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event';
import { format } from 'date-fns/esm';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../layouts/shared/Loading';


const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(user.displayName)
    const navigate = useNavigate();

    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const timeDate = new Date();
                    const time = format(timeDate, 'PP');
                    const product = {
                        name: data.name,
                        category: data.category,
                        image: imgData.data.url,
                        seller: user.displayName,
                        sellerEmail: user.email,
                        description: data.description,
                        location: data.location,
                        used: data.used,
                        orgPrice: data.orgPrice,
                        askPrice: data.askPrice,
                        condition: data.condition,
                        time: time

                    }

                    // save Product information to the database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/myproducts')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7 mx-auto'>
            <h2 className="text-4xl">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <textarea {...register("description", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">location</span></label>
                    <input type="text" {...register("location", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">No. of years used</span></label>
                    <input type="number" {...register("used", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original price</span></label>
                    <input type="number" {...register("orgPrice", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Asking price</span></label>
                    <input type="number" {...register("askPrice", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <select
                        {...register('condition')} className="select input-bordered w-full max-w-xs">
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select
                        {...register('category')}
                        className="select input-bordered w-full max-w-xs">
                        {
                            categories.map(category => <option
                                key={category._id}
                                value={category.name}
                            >{category.name}</option>)
                        }


                    </select>
                </div>

                <div className="form-control w-full max-w-xs">

                    <label className="label"> <span className="label-text">Picture</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} accept='image/*' className="block w-full text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-violet-50 file:text-violet-700
hover:file:bg-violet-100"
                    />

                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};


export default AddProduct;