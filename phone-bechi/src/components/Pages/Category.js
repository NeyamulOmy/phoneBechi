import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const products = useLoaderData();
    return (

        <div className='p-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                products.map(product => {
                    return <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={product.image} alt={product.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {product.name}
                            </h2>
                            <p>{product.description}</p>
                            <div className="card-actions justify-center">
                                <div className="badge badge-outline">Asking price: {product.askPrice}</div>
                                <div className="badge badge-outline">Original price: {product.orgPrice}</div>
                                <div className="badge badge-outline">{product.location}</div>
                                <div className="badge badge-outline">{product.used} years</div>
                                <div className="badge badge-outline">Posted on: {product.time} </div>
                            </div>
                            <p className='text-start'>Seller: {product.seller}</p>
                        </div>
                    </div>
                })
            }

        </div>
    );
};

export default Category;