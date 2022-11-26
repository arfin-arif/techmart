import React from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const MyProductTable = ({ product, index, handleDeleteProduct }) => {
    const { image, buyingPrice, yearsOfUse, category_id, seller, sellerEmail, dateOfPost, purchaseYear, description, location: sellerLocation, phone, price, condition, name } = product
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    // add promotion
    const handleAddPromotion = (data) => {

        const advertise = {
            name,
            category_id,
            seller,
            sellerEmail,
            price,
            buyingPrice,
            condition,
            yearsOfUse,
            phone,
            sellerLocation,
            description,
            purchaseYear,
            dateOfPost,
            image,
        }
        console.log(product);
        // save doctor information
        fetch('http://localhost:5000/advertised', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(advertise)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Successfully Promoted')
                navigate('/')
            })

    }


    return (
        <tr className='hover' >
            <th>{index + 1}</th>
            <td>{product.name}</td>
            <td>{product.price} </td>
            <td>Available</td>
            <td ><label onClick={handleAddPromotion} className='btn btn-xs'>Advertise</label></td>
            <td ><label onClick={() => handleDeleteProduct(product._id)} className='btn btn-xs' htmlFor="">X</label></td>
        </tr>



    );
};

export default MyProductTable;