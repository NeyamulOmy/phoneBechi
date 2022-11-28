import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Sellers = () => {
    const url = 'http://localhost:5000/sellers';
    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
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
            <h3 className="text-3xl mb-5">Seller</h3>
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
                            sellers &&
                            sellers.map((seller, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td><h1>{seller.name}</h1></td>
                                <td>{seller.email}</td>
                                <td><button className='btn btn-outline btn-info btn-sm mr-3'>Verify</button><button className='btn btn-outline btn-error btn-sm'>Delete</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sellers;