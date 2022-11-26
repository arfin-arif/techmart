import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyOrders = () => {
    const { data: bookings = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings`);
            const data = await res.json();
            return data;
        }
    })


    return (
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
                                    {booking?.price}
                                </td>
                                <td className=''>

                                    <button className='btn btn-sm'>Pay!</button>
                                </td>

                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;