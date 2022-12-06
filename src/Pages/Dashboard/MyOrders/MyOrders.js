import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: bookings = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`https://techmart-server.vercel.app/booking?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    return (

        <>
            <h3 className='text-3xl font-semibold ml-4 mb-2'>Your Orders</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th> <p>SR</p> </th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            bookings.map((booking, index) =>
                                <tr key={booking._id} className='hover'>
                                    <th>  <p>{index + 1}</p> </th>
                                    <td> <div className='mask mask-squircle w-12 h-12'>
                                        <img src={booking?.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{booking?.name}</div>
                                    </td>
                                    <td>
                                        {booking?.productPrice}
                                    </td>
                                    <td className=''>
                                        {
                                            booking.productPrice && !booking.paid &&
                                            <Link to={`/dashboard/payment/${booking._id}`}> <button className='btn btn-sm'>Pay!</button></Link>
                                        }
                                        {
                                            booking.productPrice && booking.paid &&
                                            <button className='btn btn-sm btn-success'>Paid</button>
                                        }
                                    </td>

                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyOrders;