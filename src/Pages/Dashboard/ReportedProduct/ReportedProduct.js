import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const ReportedProduct = () => {
    const { loading } = useContext(AuthContext)



    const { data: reportedProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['reportedProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reportedItems?status=reported');
            const data = await res.json();
            return data;
        }
    })


    const handleDeleteProduct = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
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



    if (loading) {
        return <Loading />
    }


    return (
        <>
            <h3 className='text-3xl font-semibold ml-4 mb-2'>Reported Items</h3>
            <div className="overflow-x-auto mb-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Seller</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reportedProducts?.map((reportedProduct, index) => <tr key={reportedProduct._id} className='hover' >
                                <th>{index + 1}</th>
                                <td>{reportedProduct.name}</td>
                                <td>{reportedProduct.price} </td>
                                <td>{reportedProduct.seller} </td>
                                <td ><label onClick={() => handleDeleteProduct(reportedProduct._id)} className='btn btn-sm' htmlFor="">X</label></td>

                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </>

    );
};

export default ReportedProduct;