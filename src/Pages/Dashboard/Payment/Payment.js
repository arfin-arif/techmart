import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripePublishableKey);
const Payment = () => {
    const booked = useLoaderData()
    const { name, productPrice, buyerName, buyerLocation } = booked;
    console.log(booked);

    const handleDeletePaidProduct = (id) => {
        fetch(`https://techmart-server.vercel.app/products/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Successfully Purchased')

                }
            })
    }

    return (
        <div>
            <h2 className='text-3xl'>You are going to pay for {name}</h2>
            <p className='text-xl'>The amount have to Pay is <strong> ${productPrice} </strong></p>
            <>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        handleDeletePaidProduct={handleDeletePaidProduct}
                        booked={booked} />
                </Elements>

            </>

        </div>
    );
};

export default Payment;