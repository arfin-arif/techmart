import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Modal = ({ productInfo, setProductInfo }) => {
    const { user } = useContext(AuthContext)
    const { image, buyingPrice, yearsOfUse, seller, dateOfPost, purchaseYear, description, location, phone, price, condition, name } = productInfo
    const handleBooking = event => {

    }

    return (
        <div className=''>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-10' >
                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full " />
                        <input name='email' type="email" disabled defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full " />
                        <input type="text" value={price} disabled className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full " />
                        <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full " />
                        <br />
                        <input className='btn mt-4 text-center w-full ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;