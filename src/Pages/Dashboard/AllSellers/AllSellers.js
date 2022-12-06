import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [], refetch, isLoading } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            try {

                const res = await fetch(`https://techmart-server.vercel.app/allsellers?role=Seller`,
                    {
                        headers: {
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        }
                    });
                const data = await res.json();
                return data;
            }
            catch {

            }
        }

    })

    const handleDeleteSeller = (id) => {
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


    // to change status 
    const handleVerify = id => {
        fetch(`https://techmart-server.vercel.app/seller/verify/${id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Verified')
                    refetch();
                    console.log(data);
                }
            })
    }
    // to change status of product 
    const handleProductStatus = email => {
        fetch(`https://techmart-server.vercel.app/seller/verifyOnProduct/${email}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    refetch();
                    console.log(data);
                }
            })
    }


    return (

        <>
            <h3 className='text-3xl font-semibold ml-4 mb-2'>All Sellers</h3>
            <div className="overflow-x-auto mb-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers?.map((seller, index) => <tr key={seller._id} className='hover' >
                                <th>{index + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email} </td>
                                <td>{seller.role} </td>
                                <td><label className='btn btn-xs' onClick={() => { handleVerify(seller._id); handleProductStatus(seller.email) }}>{seller.status}</label> </td>
                                <td ><label onClick={() => handleDeleteSeller(seller._id)} className='btn btn-sm' htmlFor="">X</label></td>

                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </>

    );
};

export default AllSellers;