import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [], refetch, isLoading } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allsellers?role=Seller`);
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
                        sellers?.map((seller, index) => <tr key={seller._id} className='hover' >
                            <th>{index + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email} </td>
                            <td>{seller.role ? seller.role : <p>Admin</p>} </td>
                            <td ><label onClick={() => handleDeleteProduct(seller._id)} className='btn btn-sm' htmlFor="">X</label></td>

                        </tr>)

                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;