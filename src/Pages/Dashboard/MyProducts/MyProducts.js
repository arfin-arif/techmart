import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import MyProductTable from './MyProductTable';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?sellerEmail=${user?.email}`);

            const data = await res.json();
            return data;
        }

    })
    const handleDeleteProduct = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Successfully Deleted')
                    refetch()
                }
            })

    }




    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto mb-5">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Promote</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        products.map((product, index) => <MyProductTable
                            key={product._id}
                            product={product}
                            index={index}
                            handleDeleteProduct={handleDeleteProduct}></MyProductTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;