import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: buyers = [], refetch, isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allusers`);

            const data = await res.json();
            return data;
        }
    })


    const handleDeleteProduct = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Successfully Deleted')
                    refetch()
                }
            })

    }

    return (
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
                            <td>{buyer.role ? buyer.role : <p>Admin</p>} </td>
                            <td ><label onClick={() => handleDeleteProduct(buyer._id)} className='btn btn-sm' htmlFor="">X</label></td>

                        </tr>)

                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;