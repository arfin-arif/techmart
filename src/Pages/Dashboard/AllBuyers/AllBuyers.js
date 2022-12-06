import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: buyers = [], refetch, isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`https://techmart-server.vercel.app/allusers`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });

            const data = await res.json();
            return data;
        }
    })


    const handleDeleteProduct = (id) => {
        fetch(`https://techmart-server.vercel.app/users/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Successfully Deleted')
                    refetch()
                }
            })

    }

    return (
        <>
            <h3 className='text-3xl font-semibold ml-4 mb-2'>All Buyers</h3>
            <div className="overflow-x-auto mb-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers?.map((buyer, index) => <tr key={buyer._id} className='hover' >
                                <th>{index + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email} </td>
                                <td className='capitalize'>{buyer.role ? buyer.role : <p>Admin</p>} </td>
                                <td ><label onClick={() => handleDeleteProduct(buyer._id)} className='btn btn-sm' htmlFor="">X</label></td>

                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </>

    );
};

export default AllBuyers;