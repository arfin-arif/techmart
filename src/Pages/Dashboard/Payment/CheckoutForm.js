import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = ({ booked, handleDeletePaidProduct }) => {
    const { name, productPrice, buyerEmail, buyerName, buyerLocation, _id, productId } = booked;
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState("");
    const [transitionID, setTransitionID] = useState("");
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();


    const price = parseInt(productPrice)
    useEffect(() => {

        fetch("https://techmart-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "content-Type": "application/json",

            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        };
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error)

        } else {
            setCardError('')
        };

        setSuccess('');
        setProcessing(true)
        const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail
                    },
                },
            },
        );
        if (confirmationError) {
            setCardError(confirmationError.message);
            return
        }
        if (paymentIntent.status === "succeeded") {

            // store in db 
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email: buyerEmail,
                bookingId: _id,
            }

            fetch('https://techmart-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        toast.success('Payment Successfully Done')
                        setSuccess("Payment Successfully done ");
                        setTransitionID(paymentIntent.id)
                        handleDeletePaidProduct(productId)
                    }
                })
        }
        setProcessing(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret || processing} >
                    Pay
                </button>
            </form>
            <p className="text-red-600 mt-5">{cardError.message}</p>
            {
                success && <div>
                    <p className="text-green-400">{success}</p>
                    <p> Transaction Id {transitionID} </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;