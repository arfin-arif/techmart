import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from '../../CategoryWiseProducts/ProductCard/ProductCard';
import Loading from '../../Shared/Loading/Loading';


const PromotedProducts = () => {

    const { data: promotedProduct = [], refetch, isLoading } = useQuery({
        queryKey: ['promotedProduct'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertised');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading />
    }
    return (
        <>

            {
                promotedProduct &&
                <div>
                    <h2 className='text-3xl text-center'>        This is Advertisement</h2>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
                        {
                            promotedProduct.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default PromotedProducts;