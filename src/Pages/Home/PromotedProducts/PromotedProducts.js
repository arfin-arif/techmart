import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from '../../CategoryWiseProducts/ProductCard/ProductCard';
import Loading from '../../Shared/Loading/Loading';
import PromotedProductCard from './PromotedProductCard/PromotedProductCard';


const PromotedProducts = () => {

    const { data: promotedProduct = [], refetch, isLoading } = useQuery({
        queryKey: ['promotedProduct'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/promotedProducts?promotion=promoted', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    console.log(promotedProduct);
    if (isLoading) {
        return <Loading />
    }
    return (
        <>

            {
                promotedProduct.length > 0 &&


                <section  >
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-3xl font-semibold text-center">Advertised Items
                        </h1>
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

                            {
                                promotedProduct.map(product => <PromotedProductCard key={product._id} product={product} ></PromotedProductCard>)
                            }

                        </div>
                    </div>
                </section>




            }
        </>
    );
};

export default PromotedProducts;