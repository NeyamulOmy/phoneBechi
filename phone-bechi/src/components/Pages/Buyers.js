import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Buyers = () => {
    const url = 'https://server-sooty-xi.vercel.app/buyers';
    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {

                }
            });
            const data = await res.json();
            console.log(data)
            return data;
        }
    })
    return (
        <div>
            <h3 className="text-3xl mb-5">Buyers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers &&
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td><h1>{buyer.name}</h1></td>
                                <td>{buyer.email}</td>
                                <td><button className='btn btn-outline btn-error btn-sm'>Delete</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Buyers;