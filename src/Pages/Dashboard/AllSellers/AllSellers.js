import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allsellers`);

            const data = await res.json();
            return data;
        }

    })

    return (
        <div>
            This is all seller

        </div>
    );
};

export default AllSellers;