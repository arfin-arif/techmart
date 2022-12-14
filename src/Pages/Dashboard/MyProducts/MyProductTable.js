import React from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const MyProductTable = ({ product, index, handleDeleteProduct, refetch }) => {
    const { image, buyingPrice, yearsOfUse, category_id, seller, sellerEmail, dateOfPost, purchaseYear, description, sellerLocation, phone, price, condition, name } = product
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    // add promotion
    const handlePromotoe = id => {
        fetch(`https://techmart-server.vercel.app/products/promote/${id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully Promoted ')
                    refetch()
                    console.log(data);
                }
            })
    }


    // const handleAddPromotion = (data) => {

    //     const advertise = {
    //         name,
    //         category_id,
    //         seller,
    //         sellerEmail,
    //         price,
    //         buyingPrice,
    //         condition,
    //         yearsOfUse,
    //         phone,
    //         sellerLocation,
    //         description,
    //         purchaseYear,
    //         dateOfPost,
    //         image,
    //     }
    //     console.log(product);
    //     // save product promotion information
    //     fetch('https://techmart-server.vercel.app/advertised', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',

    //         },
    //         body: JSON.stringify(advertise)

    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //             toast.success('Successfully Promoted')
    //             navigate('/')
    //         })

    // }


    return (
        <tr className='hover' >
            <th>{index + 1}</th>
            <td>{product.name}</td>
            <td>{product.price} </td>
            <td>Available</td>
            <td ><label onClick={() => handlePromotoe(product._id)} className='btn btn-xs'>{product.promotion ? product.promotion : 'Not Promoted'}</label></td>
            <td ><label onClick={() => handleDeleteProduct(product._id)} className='btn btn-xs' htmlFor="">X</label></td>
        </tr>



    );
};

export default MyProductTable;