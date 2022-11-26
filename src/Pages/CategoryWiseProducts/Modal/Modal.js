import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const Modal = ({ productInfo, setProductInfo }) => {
    const { user } = useContext(AuthContext)
    const { image, buyingPrice, yearsOfUse, seller, dateOfPost, purchaseYear, description, location, phone, price, condition, name } = productInfo
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        const productPrice = form.price.value;
        const buyerPhone = form.phone.value;
        const buyerLocation = form.location.value;

        const phoneBooking = {
            buyerName,
            buyerEmail,
            productPrice,
            buyerPhone,
            buyerLocation,
            image,
            name
        }
        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(phoneBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Booking Confirmed')

                }
                else {
                    toast.error(data.message)
                }
            })

        console.log(phoneBooking)


    }

    return (
        <div className=''>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10' >
                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full " />
                        <input name='email' type="email" disabled defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full " />
                        <input name='price' type="text" disabled defaultValue={price} className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full " required />
                        <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full " required />
                        <br />
                        <label htmlFor="booking-modal"><input className='btn mt-4 text-center w-full ' type="submit" value="Submit" /></label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;